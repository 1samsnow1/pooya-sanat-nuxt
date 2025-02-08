<template>
    <section class="w-full border-r-2 border-blue-500 overflow-hidden paddingr">
        <div class="flex flex-col items-start text-gray-300 gap-4">
            <button v-for="item in categories" :key="item" @click="callCategory(item.name)" class="hover:text-blue-400 transition-all duration-300 cursor-pointer max-[440px]:text-sm">{{ item.name }}</button>
        </div>
    </section>
</template>

<script setup>
let categories = [
    {name:'همه',id:'all'},
    {name:'سیم',id:1},
    {name:'کابل شبکه',id:2},
    {name:'کابل تلفنی',id:3},
]

const emit = defineEmits();
const callCategory = (chosenCategory) =>{
    emit("chooseCategory",chosenCategory)
}
</script>

<style scoped>
.paddingr{
    padding-right: 8px;
}
.categoryAnime {
    animation: showCategory linear forwards;
    animation-timeline: view();
    position: absolute;
    overflow: hidden;
}
@keyframes showCategory {
    0%{
       transform: translateX(20px);
       opacity: 0;
    }
    40%{
        transform: translateX(0);
        opacity: 1;
    }
}
</style>