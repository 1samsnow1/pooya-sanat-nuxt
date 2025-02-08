<template>
    <div class="w-full svHeight flex justify-center items-center">
        <form @submit.prevent="">
            <input class="inputStyles marginBot" type="number" v-model="productId" placeholder="ای دی محصول">
            <button @click="goToEdit">برو به ویرایش</button>
        </form>
    </div>
</template>
<script setup>
const router= useRouter();
let productId = ref(null) 
const goToEdit = ()=>{
    router.push(`/adminpanel/editProduct/${productId.value}`);
}
</script>

<style scoped>
.marginBot{
    margin-bottom: 1rem;
}
</style>