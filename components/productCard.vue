<template>
    <NuxtLink :to="`/product/${product.id}`">
        <article class="w-full bg-slate-900 flex flex-col sm:flex-row items-start gap-2 text-gray-400 shadow-xs shadow-gray-500 cardPadding rounded lg:hover:-translate-y-3 lg:hover:bg-slate-700 hoverTransition cursor-pointer">
            <figure class="w-full sm:w-52 lg:w-60 h-40 min-[440px]:h-48 sm:h-40 lg:h-44 rounded shadow-md shadow-gray-900">
                <img class="w-full h-full rounded" :src="product.path" :alt="product.name">
            </figure>
            <div class="flex flex-col items-start infoPadding">
                <h3 class="text-lg lg:text-2xl text-slate-300">{{ product.name }}</h3>
                <span class="priceMargin">
                    <span class="font-sans lg:text-lg">{{ product.price }} </span>
                    تومان
                </span>
                <span>
                    <span class="text-blue-400">{{ product.category }}</span>
                </span>
            </div>
        </article>
    </NuxtLink>
</template>

<script setup>
const {product} = defineProps(['product']);
</script>

<style scoped>
.cardPadding {
    padding: 4px;
}
.infoPadding {
    padding-top: 8px;
}
.priceMargin{
    margin: 16px 0 32px 0;
}
@media only screen and (max-width:650px){
    .infoPadding {
        padding: 2px 6px;
    }
    .priceMargin{
        margin: 4px 0 8px 0;
    }
}
</style>