<template>
    <section class="w-[98%] sm:w-4/5 paddingtop margin-auto max-w-7xl grid grid-cols-4 sm:grid-cols-6 gap-2">
        <div class="sm:col-start-1 sm:col-end-6 col-span-3 flex flex-col gap-4">
            <loader v-if="loaderStatus"/>
            <ProductCard v-else v-for="product in productsList" :key="product" :product="product"/>
        </div>
        <Categories class=" sm:col-start-6 sm:col-end-7 col-span-1 col h-fit sticky top-2" @chooseCategory="chooseCategory"/>
    </section>
</template>

<script setup>
useHead({
    title:'محصولات | شرکت پویا صنعت',
    meta : [
        {name:'description', content:'کابل های شبکه، برق، مخابراتی، تلفن،ساختمانی و ...'}
    ],
    htmlAttrs:{dir:'rtl',lang:'fa'}
})
import loader from '~/components/iconComponents/loader.vue';
let testProductList = [
    {name:'محصول',price:'20000',path:'lol'},
    {name:'محصول',price:'20000',path:'lol'},
    {name:'محصول',price:'20000',path:'lol'},
    {name:'محصول',price:'20000',path:'lol'},
]
const chooseCategory = (chosenCategory)=>{
  if(chosenCategory=='همه'){
    productListForView.value = productList.value;
  }else {
    productListForView.value = productList.value.filter((cate)=>{
      return cate.category == chosenCategory
    })
  }
}

let loaderStatus = ref(true);
let productsList = ref(null)
const requestProducts = async ()=>{
    try{
        const products = await $fetch("https://api.bargh-saman.ir/api/products");
        if(products){
            loaderStatus.value = false;
            productsList.value = products;
        }
    }catch(er){
        console.log(er);
    }
}
requestProducts();
</script>

<style scoped>
.paddingtop {
    padding-top: 3.5rem;
}
</style>