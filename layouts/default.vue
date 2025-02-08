<template>
    <div>
        <header class="z-50 bg-slate-900 relative">
            <div class="flex items-center headerPadding">
                <ShopTitle class=""/>
                <Logo/>
            </div>
            <HeaderNav/>
        </header>
        <main class="bg-slate-950 min-h-svh mainPadding">
            <slot/>
        </main>
        <footer class="bg-slate-900">
            <ShopFooter/>
        </footer>
    </div>
</template>

<style scoped>
.mainPadding {
    padding: 1rem 0;
}
</style>