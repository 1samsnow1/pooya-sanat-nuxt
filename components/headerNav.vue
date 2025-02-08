<template>
    <nav class="w-full flex justify-between absolute -bottom-11 bg-slate-900 opacity-80 translate-y-1 navbarPadding">
        <ul class="hidden sm:flex items-center gap-5">
            <li v-for="item in headerLists" class="text-gray-100 text-sm md:text-lg lg:hover:text-blue-300 transition-all duration-300">
                <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
            </li>
        </ul>
        <ul>
            <MobileNav class="sm:hidden"/>
        </ul>
        <ul class="flex gap-2 items-center logosPadding">
            <li>
                <img class="w-10 h-10" src="@/assets/images/brand1.png" alt="brand_image">
            </li>
            <li>
                <img class="w-10 h-10" src="@/assets/images/schneiderBrand.png" alt="brand_image">
            </li>
        </ul>
    </nav>
</template>

<script setup>
let headerLists = [
    {name:'صفحه اصلی',path:'/'},
    {name:'محصولات',path:'/product'},
    {name:'درباره ما',path:'/about'},
    {name:'پنل ادمین',path:'/signIn'},
]
</script>

<style scoped>
.navbarPadding {
    padding: 5px 10px;
}
</style>