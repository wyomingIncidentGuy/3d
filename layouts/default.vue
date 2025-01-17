<script lang="ts" setup>

</script>

<template>
<Header />
<NuxtPage />
<Footer />
</template>

<style lang="scss">
html,body {
    height: 100%;
    width: 100%;
}

body {
    margin: 0;
    padding: 0;
    height: 100%;

    & > #__nuxt {
        display: flex;
        flex-direction: column;
        min-height: 100%;

        & > main {
            flex: 1;
        }
    }
}
</style>