<template>
    <div class="bg-slate-900">
        <nav class="w-full sticky top-0 border-b border-slate-500 bg-slate-900/50 navPadding navbarBg">
            <ul class="flex justify-around items-center gap-2 text-slate-300">
                <li v-for="item in panelList" :key="item">
                    <NuxtLink :to="item.address">{{ item.name }}</NuxtLink>
                </li>
                <loader v-if="logoutLoader"/>
                <button v-else @click="logOut" class="text-red-500 cursor-pointer">خروج</button>
            </ul>
        </nav>
        <NuxtPage/>
    </div>
</template>

<script setup>
import loader from '~/components/iconComponents/loader.vue';
definePageMeta({
layout:"admin"
})

const panelList = [
    {name:'محصولات',address:'/adminpanel/products'},
    {name:'اضافه کردن محصول',address:'/adminpanel/addProduct'},
    {name:'ویرایش محصول',address:'/adminpanel/editProduct'},
]
let logoutLoader = ref(false)
const logOut = async ()=>{
    
    let adminToken = useCookie("userToken").value;
    logoutLoader.value = true;
    try{
        const logout = await $fetch("https://api.bargh-saman.ir/api/logout",{
            headers: {
                Authorization: `Bearer ${adminToken}`,
            },
        })
        let userToken = useCookie("userToken");
        let adminLoginStatus = useCookie("adminLoginStatus");
        userToken.value = null;
        adminLoginStatus.value = null;
        const router = useRouter();
        router.push('/');
    }catch(er){
        console.log(er);
    }finally{
        logoutLoader.value=false;
    }
}
let router = useRouter();
onMounted(()=>{
let adminLoginStatus = useCookie("adminLoginStatus")
if(adminLoginStatus.value !== 'logedIn') {
    router.push('/signIn');
}
})
onUnmounted(()=>{
    logOut();
})
</script>

<style scoped>
.navPadding {
    padding: 5px;
}
.navbarBg{
    backdrop-filter: blur(5px);
}
.contentWidth {
width: calc(100vw - 240px);
}
@media only screen and (max-width:900px){
.contentWidth{
    width: 100%;
}
}
.panelScrollBar::-webkit-scrollbar {
width: 10px;
}

/* Track */
.panelScrollBar::-webkit-scrollbar-track {
box-shadow: none;
border-radius: 10px;
}

/* Handle */
.panelScrollBar::-webkit-scrollbar-thumb {
background: #111827;
border-radius: 10px;
}
</style>