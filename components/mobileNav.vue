<template>
    <div class="absolute top-1 right-2 z-50">
        <menuIcon class="translate-y-1" @click="toggleMenu()"/>
            <ul id="mobileMenu" class="w-0 h-0 bg-slate-900 overflow-hidden absolute -top-0 -right-2 flex flex-col gap-2 transition-all duration-300 rounded-md shadow-sm shadow-gray-900" :class="menuStatus?'menuPadding':'noPadding'">
                <button @click="toggleMenu" class="text-gray-200 absolute -top-1 left-1 text-2xl">×</button>
                <li @click="toggleMenu" v-for="item in list" :key="item" class="text-gray-200 cursor-pointer md:hover:text-yellow-400 transition-all duration-300">
                    <NuxtLink :to="item.address">
                        {{ item.name }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
</template>

<script setup>
import menuIcon from './iconComponents/menuIcon.vue';

let menuStatus = ref(false);
let list = [
    {name:'صفحه اصلی',address:'/'},
    {name:'درباره ما',address:'/about'},
    {name:'محصولات',address:'/product'},
    {name:'پنل ادمین',address:'/signIn'},
];
const toggleMenu = ()=>{
    if(!menuStatus.value) {
        document.querySelector('#mobileMenu').style.width = '200px';
        document.querySelector('#mobileMenu').style.height = '130px';
        menuStatus.value = true;
    }else {
        document.querySelector('#mobileMenu').style.width = '0px';
        document.querySelector('#mobileMenu').style.height = '0px';
        menuStatus.value = false;
    }
}
</script>

<style scoped>
.menuPadding{
    padding-right: 10px;
    padding-top: 5px;
}
.nopadding {
    padding: 0px;
}
</style>