<template>
    <form class="w-full pageHeight bg-slate-900 flex justify-center items-center" @submit.prevent="">

        <div class="w-10/12 sm:w-3/5 max-w-xl formPaddings bg-slate-950 rounded flex flex-col items-center gap-3 shadow-sm shadow-slate-600">
            <span class="w-full text-center p-1 bg-red-600 text-slate-400 rounded" v-if="err">{{ err }}</span>
            <input type="text" autocomplete="username" class="w-full inputPaddings rounded bg-gray-100" placeholder="نام ادیمن" v-model="adminName" name="username">
            <input type="text" class="w-full rounded inputPaddings bg-gray-100" placeholder="پسوورد" v-model="pw" name="pw">
            <loader v-if="loaderStatus"/>
            <button v-else @click="checkinfo()" type="button" class="formButton w-full">
                ورود
            </button>
            <button @click="goHome" class="formButton w-full">
                بازگشت به خانه
            </button>
        </div>
    </form>
</template>

<script setup>
import loader from '~/components/iconComponents/loader.vue';
definePageMeta({
    layout: 'admin'
})
const adminName = ref('');
const pw = ref('');
const err = ref(null);
const loaderStatus = ref(false);
const checkinfo = async ()=>{
    let userToken = useCookie('userToken',{secure:true});
    let adminLoginStatus = useCookie('adminLoginStatus');
    loaderStatus.value = true;
    try{
        const loginData = await $fetch("https://api.bargh-saman.ir/api/login",{
        method: 'POST',
        body :{
                "email" : adminName.value,
                "password" : pw.value
            }
        });
        if(loginData){
            userToken.value = loginData["access token"];
            adminLoginStatus.value = "logedIn";
            adminName.value = "";
            pw.value = "";
            console.log('success');
            router.push("/adminpanel");
        }
    }catch(er){
        err.value = 'یوزر یا پسوورد اشتباه است'
    }finally {
        loaderStatus.value = false;
    }
}
const router = useRouter();
const goHome = ()=>{
    router.push('/')
}
onMounted(()=>{
    let adminLoginStatus = useCookie("adminLoginStatus")
    if(adminLoginStatus.value == 'logedIn') {
    router.push('/adminpanel');
}
})
</script>

<style scoped>
.pageHeight{
    height: 100vh;
}
</style>