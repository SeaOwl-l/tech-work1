<template>
    <div class="team">
        <v-container class="my-3">
            <v-layout row wrap>
                <v-col xs12 sm6 md4>
                    <v-card
                        class="text-xs-center ma-3 card-prod"
                        tile
                        @mousedown="setProduct(item.id)"
                        @mouseup="$router.push(`/Product/${item.id}`)"
                    >
                        <v-responsive class="pt-4">
                            <v-img
                                :aspect-ratio="1"
                                contain
                                max-width="300px"
                                max-height="180px"
                                :src="item.url"
                            />
                        </v-responsive>
                        <v-card-text>
                            <div class="subheading">{{ item.name }}</div>
                            <div class="grey--text">
                                {{ item.massa }} - {{ item.price
                                }}{{ item.currency }}
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn
                                color="orange lighten-2"
                                text
                                v-on:mousedown.stop
                                v-on:mouseup.stop
                                @click="addToBasket(item)"
                            >
                                Добавить в корзину
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    props: {
        item: {},
    },
    methods: {
        ...mapMutations(['setProduct', 'addToBasket', 'removeFromBasket']),
    },
};
</script>

<style scoped>
.team {
    margin-top: 30px;
}

</style>
