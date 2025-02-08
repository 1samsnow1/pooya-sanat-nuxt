<template>
    <div class="w-full theHeight">
            <swiper-container init="false" class="w-full theHeight mx-auto swiperClass" ref="containerRef">

            <swiper-slide class="w-full h-full relative">
                <img class="w-full h-full absolute top-0 left-0" src="@/assets/images/banner3.jpg" alt="کابل های برق سالم">
                <div class="w-full h-full absolute top-0 left-0 flex justify-center items-center bgBlur">
                    <div class="w-full sm:w-4/5 h-[90%] -translate-y-8 sm:translate-y-6 relative">

                        <div class="first-slide-small-box transform rotate-45 absolute top-20 right-1/2 translate-x-1/2 hover:bg-slate-900 hoverTransition" :class="slideNumber==0?'animate-showContent':'animate-fade'">
                            <div class="w-full h-full relative text-center text-slate-300 lineHeight transform -rotate-45 cursor-pointer hover:scale-110 hoverTransition">
                                <NuxtLink>محصولات</NuxtLink>
                            </div>
                        </div>

                        <div class="first-slide-small-box transform rotate-45 absolute top-37 sm:top-49 right-1/2 translate-x-1/2 sm:-translate-x-9 hover:bg-slate-900 hoverTransition" :class="slideNumber==0?'animate-showContent2':'animate-fade'">
                            <div class="w-full h-full relative text-center text-slate-300 lineHeight transform -rotate-45 cursor-pointer hover:scale-110 hoverTransition">
                                <NuxtLink to="/about">درباره ما</NuxtLink>
                            </div>
                        </div>

                        <div class="first-slide-small-box transform rotate-45 absolute top-54 sm:top-49 left-1/2 -translate-x-14 sm:tranlsate-x-1/2 sm:translate-x-9 hover:bg-slate-900 hoverTransition":class="slideNumber==0?'animate-showContent3':'animate-fade'">
                            <div class="w-full h-full relative text-center text-slate-300 lineHeight transform -rotate-45 group hoverTransition">
                                <span class="group-hover:opacity-0 hoverTransition">برند ها</span>
                                <div class="absolute top-12 right-3 opacity-0 hoverTransition group-hover:opacity-100 flex gap-2">
                                    <img class="w-16 h-16" src="@/assets/images/schneiderBrand.png" alt="برند اشنایدر">
                                    <img class="w-16 h-16" src="@/assets/images/brand1.png" alt="برند سیمیا">
                                </div>
                            </div>
                        </div>

                        <div class="first-slide-small-box transform rotate-45 absolute bottom-0 sm:bottom-20 right-1/2 translate-x-1/2 hover:bg-slate-900 hoverTransition" :class="slideNumber==0?'animate-showContent4':'animate-fade'">
                            <div class="w-full h-full relative text-center text-slate-300 lineHeight transform -rotate-45 hoverTransition overflow-hidden group">
                                <span class="group-hover:opacity-0 hoverTransition">شماره تماس</span>
                                <span class="absolute top-10 sm:top-0 right-4 sm:right-7 sm:opacity-0 hoverTransition sm:group-hover:opacity-100">09129548433</span>
                            </div>
                        </div>

                    </div>
                </div>
            </swiper-slide>

            <swiper-slide class="w-full h-full flex justify-center items-center">
                <div class="w-20 h-20 border-2 border-blue-700 bg-slate-950 transform rotate-45 translate-y-6 flex justify-center items-center text-gray-300":class="slideNumber==1?'animate-mobileIncreaseSize sm:animate-increaseSize':'animate-mobileDecreaseSize sm:animate-decreaseSize'">
                    <div class="transform -rotate-45 flex flex-col gap-2 sm:text-lg">
                        <span class="bg-slate-800 slide2-text1-padding rounded-full" :class="slideNumber==1?'animate-showContent2 ':'animate-none opacity-0'">درستکاری صداقت و مسئولیت پذیری</span>
                        <span class="bg-slate-800 text-center rounded-full" :class="slideNumber==1?'animate-showContent3':'animate-none opacity-0'">تاکید ویژه برکسب اعتماد و وفاداری</span>
                        <span class="bg-slate-800 text-center rounded-full" :class="slideNumber==1?'animate-showContent4':'animate-none opacity-0'">تاکیید برکیفیت بالای محصول</span>
                        <span class="bg-slate-800 text-center rounded-full" :class="slideNumber==1?'animate-showContent5':'animate-none opacity-0'">رعایت حقوق مشتریان</span>
                        <span class="bg-slate-800 text-center rounded-full" :class="slideNumber==1?'animate-showContent6':'animate-none opacity-0'">بیش از 22 سال تجربه</span>
                    </div>
                    
                </div>
            </swiper-slide>

            <swiper-slide class="w-full h-full flex justify-center items-center">
                <div class="w-[330px] h-[330px] translate-y-6 border-2 border-blue-700 bg-slate-950 grid grid-cols-2 gap-4 slide4BoxPadding" :class="slideNumber==2?'animate-mobileRotate45 sm:animate-rotate45':'animate-fade'">
                    <span :class="slideNumber==2?'animate-showContent3':'animate-none opacity-0'" class="w-full h-full bg-blue-950 border-4 border-blue-700 flex flex-col justify-center items-center text-blue-300 sm:text-xl">
                        <span>تلگرام:</span>
                        <span>09129548433</span>
                    </span>
                    <span :class="slideNumber==2?'animate-showContent4':'animate-none opacity-0'" class="w-full h-full bg-green-900 border-4 border-green-700 flex flex-col justify-center items-center text-green-300 sm:text-xl">
                        <span>واتس اپ:</span>
                        <span>09129548433</span>
                    </span>
                    <a target="_blank" href="/https://simiacable.com/representatives-and-sales-agents/" :class="slideNumber==2?'animate-showContent5':'animate-none opacity-0'" class="w-full h-full bg-slate-900 hover:bg-slate-950 border-4 border-slate-600 hover:border-blue-900 flex flex-col justify-center items-center text-slate-300 sm:text-xl hover:text-blue-400 hoverTransition">
                        <span>نمایندگی ها</span>
                    </a>
                    <span :class="slideNumber==2?'animate-showContent6':'animate-none opacity-0'" class="w-full h-full bg-slate-900 border-4 border-slate-600 flex flex-col justify-center items-center text-slate-300 sm:text-xl overflow-hidden">
                        <span>آدرس:</span>
                        <span class="w-[310px] animate-moveLtr">تهران لاله زار جنوبی کوچه باربد پلاک 2</span>
                    </span>
                </div>
            </swiper-slide>
        </swiper-container>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'home',
})
useHead({
    title:'شرکت پویا صنعت برق سامان',
    meta : [
        {name:'description', content:'فروشنده کابل های برق تهران ، لاله زار جنوبی کوچه باربد پلاک 2'}
    ],
    htmlAttrs:{dir:'rtl',lang:'fa'}
 })
import 'swiper/swiper-bundle.css';
import { SwiperSlide } from 'swiper/vue';
const containerRef = ref(null);
const slideNumber = ref(0);
const swiper = useSwiper(containerRef,{
    slidesPerView: 1,
    pagination:{
        clickable:true,
        renderBullet: (index, className) => `<span class='${className} custom-bullet'></span>`,
   
    },
    direction:'vertical',
    effect: 'fade',
    crossFade:true,
    mousewheel:{
        enabled:true,
        sensitivity:0.1,
        thresholdDelta:null | 1,
        thresholdTime:null | 1000
    },
    injectStyles: [
      `
      .swiper-pagination-bullet{
        width:20px;
        height:20px;
        border: 2px solid #155dfc;
        opacity:100,
        background-color:#0f172b;
        }
        .swiper-pagination-bullet-active::after {
            content: '';
            position: absolute;
            transform: translate(5.5px,4px);
            width: 12px;
            height: 12px;
            border-radius: 100%;
            background-color:#2563eb;
            }
      `,],
      on:{
          init(){
        },
        slideChange(swiperInstance){
            slideNumber.value = swiperInstance.activeIndex;
        }
    },
})
</script>

<style>
:root {
    --swiper-pagination-bullet-inactive-color: #0f172b;
    --swiper-pagination-bullet-inactive-opacity: 1;
    --swiper-pagination-color: #0f172b;
}
.custom-bullet{ 
    width: 24px;
    height: 24px;
    border: 2px black solid;
}
.theHeight {
  height: calc(100vh - 90px);
}
.bgBlur {
    backdrop-filter: blur(5px);
}
.bgOpacity {
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(1px);
}
.contentPadding {
    padding: 10px;
    line-height: 30px;
}
.slide1_p2{ 
    margin-top: 20px;
}
.lineHeight{
    line-height: 160px;
}
@media screen and (max-width:640px){
    .lineHeight{
        line-height: 40px;
    }
}
.slide2-text1-padding{
    padding: 0 10px;
}
.slide4BoxPadding{
    padding: 1rem;
}
</style>