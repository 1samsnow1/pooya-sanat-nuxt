<template>
    <div>
        <header class="z-50 bg-slate-900 relative">
            <div class="flex items-center headerPadding">
                <ShopTitle class=""/>
                <Logo/>
            </div>
            <HeaderNav/>
        </header>
        <main>
            <slot/>
        </main>
    </div>
</template>

<style scoped>

</style>