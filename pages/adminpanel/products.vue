<template>
    <section class="w-[98%] sm:w-4/5 max-w-7xl minHeight productsMargins flex gap-2 flex-wrap">
        <loader v-if="loaderStatus"/>
        <div v-else class="flex flex-wrap gap-4">
            <NuxtLink v-for="item in productsList" :to="`/adminpanel/editProduct/${item.id}`">
                <article class="text-slate-400 flex flex-col items-start gap-2 cardPaddings shadow-sm shadow-gray-600 rounded">
                    <figure>
                        <img class="w-40 h-40 rounded" :src="item.path" alt="">
                    </figure>
                    <h3 class="text-lg">{{ item.name }}</h3>
                    <p>{{ item.category }}</p>
                    <p>
                        <span>{{ item.price }}</span>
                        <span>تومان</span>
                    </p>
                </article>
            </NuxtLink>
        </div>
    </section>
</template>

<script setup>
import loader from '~/components/iconComponents/loader.vue';
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
.productsMargins{
    margin: 2rem auto;
    margin-bottom: 0;
}
.minHeight {
    min-height: 100vh;
}
.cardPaddings{
    padding: 5px;
}
</style>