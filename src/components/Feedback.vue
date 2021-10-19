<template>
    <v-container class="cnt-feedback" pt-6 pb-10>
        <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="sendMessage">
                <validation-provider
                    v-slot="{ errors }"
                    name="name"
                    rules="required|max:20"
                >
                    <v-text-field
                        v-model="name"
                        name="name"
                        :counter="20"
                        :error-messages="errors"
                        label="Ваше имя"
                        required
                    ></v-text-field>
                </validation-provider>
                <validation-provider
                    v-slot="{ errors }"
                    name="email"
                    rules="required|email"
                >
                    <v-text-field
                        name="email"
                        v-model="email"
                        :error-messages="errors"
                        label="Ваш E-mail"
                        required
                    ></v-text-field>
                </validation-provider>
                <validation-provider
                    v-slot="{ errors }"
                    name="message"
                    rules="required"
                >
                    <v-textarea
                        autocomplete="message"
                        name="message"
                        v-model="message"
                        :counter="450"
                        :error-messages="errors"
                        label="Ваше сообщение"
                        required
                    ></v-textarea>
                </validation-provider>

                <v-btn class="mr-4" type="submit" :disabled="invalid">
                    Отправить
                </v-btn>
            </form>
        </validation-observer>
    </v-container>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import emailjs from 'emailjs-com';

export default {
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    data: () => ({
        name: '',
        email: '',
        message: '',
    }),

    methods: {
        sendMessage(e) {
            this.$refs.observer.validate();
            try {
                emailjs.sendForm(
                    'service_xld7tgi',
                    'template_103r9mt',
                    e.target,
                    'user_UjzrfwbYpnFovEHz1vjQk',
                    {
                        name: this.name,
                        email: this.email,
                        message: this.message,
                    }
                );
                this.name = "";
                this.email = "";
                this.message = "";
            } catch (error) {
                console.log({ error });
            }
        },
    },
};
</script>

<style>
.cnt-feedback {
    margin-top: 40px;
}
</style>
