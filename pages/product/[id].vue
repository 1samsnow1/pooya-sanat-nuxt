<template>
    <section class="w-[98%] sm:w-4/5 max-w-7xl articleMargin">
        <loader v-if="!product"/>
        <article v-else class="w-full text-gray-300 flex gap-2">
        <figure class="max-w-xl rounded shadow-sm">
            <img class="max-w-xl rounded" :src="product.path" alt="نام محصول">
        </figure>
        <div class="info_box_paddings border-r-2 border-slate-400">
                <div>
                    <span class="text-2xl text-slate-300">{{ product.name }}</span>
                </div>

                <div class="descriptionPadding">
                    <span class="text-slate-300 text-lg">توضیحات: &nbsp;</span>
                    <span class="text-slate-400">{{ product.discription }}</span>
                </div>

                <div class="colorPaddings">
                    <span class="text-lg text-slate-300">رنگ:&nbsp;</span>
                    <span class="text-gray-400">{{ product.color }}</span>
                </div>

                <div>
                    <span class="text-lg text-slate-300">قیمت:&nbsp;</span>
                    <span class="text-gray-400">
                        <span>{{ product.price }}</span>
                        تومان
                    </span>
                </div>
            </div>
        </article>
        <p class="paragraphMargin text-slate-400">
            برای خرید کالا میتوانید با شماره های 09129548433 یا 33920665 - 33939645 
            تماس بگیرید و محصول خود را به صورت آماده در محل دریافت کنید.
        </p>
        <p class="text-slate-400">
            شرکت پویا صنعت برق سامان به عنوان نماینده فروش برندهای معتبر و شناخته شده در صنعت، محصولات خود را از برندهایی همچون سیمیا، سیل کیبل، رسانا، اشنایدر، هیوندای، خراسان افشارنژاد و بسیاری دیگر به بازار عرضه می‌کند.
        </p>

    </section>
</template>

<script setup>
import loader from '~/components/iconComponents/loader.vue';
const route = useRoute();
let productId = route.params.id;

const {data:product} = await useFetch(`https://api.bargh-saman.ir/api/product/${productId}`);
console.log(product)
useHead({
    title:product.value.name +" || "+"شرکت پویا صنعت",
    meta : [
        {name:'description', content: product.value.discription}
    ],
    htmlAttrs:{dir:'rtl',lang:'fa'}
})
if(!product){
    throw createError ({statusCode: 404,statusMessage:'product not found',fatal:true})
}
</script>

<style scoped>
.articleMargin{
    margin: 2.5rem auto;
}
.info_box_paddings{
    padding-right: 6px;
}
.descriptionPadding{
    margin: 1rem 0 2rem 0;
}
.colorPaddings{
    margin-bottom: 4rem;
}
.paragraphMargin{
    margin: 4rem 0 2rem 0;
}
</style>