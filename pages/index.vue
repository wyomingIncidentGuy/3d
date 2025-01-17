<script lang="ts" setup>
    const products = useMoki.products
</script>

<template>
    <main class="container">
        <h1 class="section-title">Наши продукты</h1>
        <div class="products">
            <ProductCard 
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </div>
        
    </main>
</template>

<style scoped lang="scss">
   main{
    display: flex;
    flex-direction: column;

    & > .products{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

   }
</style>