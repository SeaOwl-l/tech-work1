<template>
<div>
    <div class="help"></div>
    <v-footer padless absolute>
        <v-card tile class="text-center footercard blue-grey darken-1">
            <v-card-text class="white--text pt-6">
                 Duis commodo vitae velit
                et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat
                augue vel ipsum ultrices, cursus iaculis dui sollicitudin.
                Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </v-card-text>
        </v-card>
    </v-footer>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.v-footer {
    flex-shrink: 0 !important;
}
.help{
    height: 100px;
    width: 100px;
    /* background: #ff0000; */
    margin-top: 100px;
}
</style>
