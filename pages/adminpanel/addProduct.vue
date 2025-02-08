<template>
    <form class="w-[95%] svHeight sm:w-4/5 max-w-4xl formMargins" @submit.prevent="" >
       <div class="w-full">
            <input type="file" ref="productPic" id="pic" class="hidden" @change="showImage">
            <label class="cursor-pointer" for="pic">
                <div v-if="!imgPreview" class="pic_label_styles lineHeight288">+</div>
                <img v-else class="imgPreview" :src="imgPreview" alt="عکس محصول">
            </label>
       </div>
       <div class="text-slate-300 inputMargins">
            <label class="text-blue-400 text-sm md:text-base block md:inline labelPadding">نام محصول:</label>
            <input :style="{width:inputWidth + 'px'}" @input="resizeInput" class="max-w-full transition-all duration-50 inputStyles inputPaddings marginRight" type="text" v-model="productName" placeholder="نام محصول">
       </div>

       <div class="flex lg:grid lg:grid-cols-2 gap-4 flex-wrap">

            <div class="text-slate-300">
                <label class="text-blue-400 labelPadding labelStyles">کتگوری محصول:</label>
                <select v-model="productCategory" class="block md:inline w-[190px] md:w-[160px] outline-0 inputPaddings rounded-md focus:ring-black focus:border-black dark:placeholder-black dark:focus:ring-black dark:focus:border-black dark:bg-slate-700 marginRight">
                        <option value="سیم">سیم</option>
                        <option value="کابل شبکه">کابل شبکه</option>
                        <option value="کابل تلفنی">کابل تلفنی</option>
                     </select>
            </div>

            <div class="text-slate-300">
                <label class="text-blue-400 labelStyles labelPadding">رنگ محصول:</label>
                <input class="inputStyles inputPaddings marginRight" type="text" v-model="productColor" placeholder="رنگ">
            </div>

            <div class="text-slate-300">
                <label class="text-blue-400 labelPadding labelStyles">کد محصول:</label>
                <input class="inputStyles inputPaddings marginRight" type="number" v-model="productCode" placeholder="کد">
            </div>

            <div class="text-slate-300">
                <label class="text-blue-400 labelPadding labelStyles">قیمت محصول:</label>
                <input class="inputStyles inputPaddings marginRight" type="number" v-model="productPrice" placeholder="قیمت">
            </div>
       </div>
       
       <div class="marginTop">
            <label class="text-blue-400 block textareaLable">رنگ محصول:</label>
            <textarea
            name="text"
            ref="textArea"
            @input="resizeTextarea"
            v-model="productDetail"
            class="min-w-[280px] sm:min-w-[500px] min-h-[100px] sm:min-h-[200px] text-slate-300 inputStyles inputPaddings" 
            placeholder="متن و جزییات"></textarea>

            <button v-if="!loaderStatus" @click="uploadProduct" class="bg-blue-600 text-slate-300 block rounded cursor-pointer hover:bg-blue-500 active:scale-90 formButtonPadding">اضافه کردن محصول</button>
            <div v-else class="w-40">
                <loader/>
            </div>
            <div class="notfpadding">
                <span v-if="errorName" class="text-red-500">{{ errorName }}</span>
                <span class="text-green-500" v-if="addedProductCount>0">{{ addedProductCount }} محصول اضافه شد</span>
            </div>
       </div>

    </form>
</template>

<script setup>
import loader from '~/components/iconComponents/loader.vue';
// design variables and functions
let loaderStatus = ref(false);
let addedProductCount = ref(0);
let errorName = ref('');

let inputWidth = ref(190);
const resizeInput = () => {
    inputWidth.value = Math.max(190,productName.value.length*10 + 25);
};

let textArea = ref(null);
const resizeTextarea = () => {
    const refTextArea = textArea.value;
    refTextArea.style.height = "auto";
    refTextArea.style.height = `${refTextArea.scrollHeight}px`;
};

// product functions and variables;
let imgPreview = ref(null)
function showImage (event) {
    const file = event.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = (e)=>{
            imgPreview.value = e.target.result;
        };
        reader.readAsDataURL(file);
    };
}

let productPic = ref(null);
let productName = ref(null);
let productCategory = ref(null);
let productColor = ref(null);
let productCode = ref(null);
let productPrice = ref(null);
let productDetail = ref(null);

const uploadProduct = async () =>{
    if(!productName.value){
        return errorName.value = 'نام محصول را وارد نکردید';
    }else if(!productPrice.value){

        return errorName.value = 'قیمت محصول را وارد نکردید';
    }else if(!productCode.value){

        return errorName.value = 'کد محصول را وارد نکردید';
    }else if(!productCategory.value){

        return errorName.value = 'کتگوری محصول را انتخاب نکردید';
    }else if(!productColor.value){

        return errorName.value = 'رنگ محصول را وارد نکردید';
    }else if(!productDetail.value || productDetail.value.length <5){

        return errorName.value = 'جزییات محصول باید بیش از 5 کلمه باشد';
    }else if(productPic.value.files[0] == undefined){

        return errorName.value = 'لطفا عکس محصول را وارد کنید';
    }else{
        errorName.value = false;
    }
    let adminToken = useCookie("userToken").value;
    loaderStatus.value = true;
    let fd = new FormData();
    // fd.append("path",productPic.value.files[0]);
    fd.append("path",productPic.value.files[0]);
    fd.append("name",productName.value);
    fd.append("color",productColor.value);
    fd.append("price",productPrice.value);
    fd.append("category",productCategory.value);
    fd.append("product_code",productCode.value);
    fd.append("discription",productDetail.value);
    try{
        const addProduct = await $fetch("https://api.bargh-saman.ir/api/ProductManagement/product/create",{
            method:'POST',
            body:fd,
            headers: {
                Authorization: `Bearer ${adminToken}`,
            },
        })
        addedProductCount.value +=1;
    }catch(err){
        errorName.value = err;
    }finally{
        loaderStatus.value = false;
    }
    // "/ProductManagement/product/create"
}
</script>

<style scoped>
.marginTop {
    margin-top: 1rem;
}
.textareaLable{
    padding-bottom: 5px;
}
.notfpadding{ 
    margin-top: 5px;
}
</style>
