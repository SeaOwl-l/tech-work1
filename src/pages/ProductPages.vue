<template>
    <v-container>
        <v-row>
            <Product
            v-for="item in $store.getters.getTeam"
            :key="item.id"
            v-bind:item="item"
            />
        </v-row>
    </v-container>
</template>

<script>
import Product from '@/components/products/Product.vue';
export default {
    components: { Product },
};
</script>

<style></style>
