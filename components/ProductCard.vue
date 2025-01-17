<script lang="ts" setup>
    interface Product{
        id: number,
        name: string,
        modelUrl: string,
        imageUrl: string,
        description: string,
        price: number,
    }

    const props = defineProps<{
       product: Product
    }>()
</script>

<template>
    <div class="card">
        <UICard
            padding="20px"
        >
            <div class="info">
                <h3>{{ product.name }}</h3>
                <p>{{ product.description }}</p>
                <span>Цена: {{ product.price + ' руб.' }}</span>
            </div>
            <ModelViewer />
        </UICard>
    </div>
    
</template>

<style scoped lang="scss">
   .card{
        width: 100%;

        & > .ui-card{
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: fit-content;
            width: 100%;

            & > .info{
                display: flex;
                flex-direction: column;
                gap: 10px;
                width: 70%;
    
                & > h3{
                    font-size: 24px;
                    margin: 10px 0;
                }
            }

            
        }
   }
</style>