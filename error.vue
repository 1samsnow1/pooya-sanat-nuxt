<template>
    <section class="w-full pageHeight flex flex-col justify-center items-center gap-2 bg-slate-900 text-slate-400">
        <h2 class="text-7xl font-bold">{{ error.statusCode }}</h2>
        <p>{{ error.message }}</p>
        <p>صفحه مورد نظر پیدا نشد</p>
        <button @click="handleClearError()" class="border-blue-800 border-2 rounded paddings hover:text-slate-300 cursor-pointer">منو ببر به خانه</button>
    </section>
</template>

<script setup>
defineProps(['error']);

const handleClearError = ()=>{
    clearError({redirect:'/'})
}
</script>

<style scoped>
.pageHeight{
    height: 100vh;
}
.paddings {
    padding: 6px;
}
</style>