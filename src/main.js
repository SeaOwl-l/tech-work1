import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from '@/router';
import store from './store';
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


Vue.config.productionTip = false;

new Vue({
    vuetify,
    store,
    router,
    created() {
        const firebaseConfig = {
  apiKey: "AIzaSyDstEfFk-xVpmg1rJ-424HYQ4D9ny2EDgM",
  authDomain: "testdb-39e4d.firebaseapp.com",
  databaseURL: "https://testdb-39e4d-default-rtdb.firebaseio.com",
  projectId: "testdb-39e4d",
  storageBucket: "testdb-39e4d.appspot.com",
  messagingSenderId: "302895284369",
  appId: "1:302895284369:web:aa9d1d810507ba6a71bf30",
  measurementId: "G-0J9W2XB1NN"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);
    },
    render: (h) => h(App),
    
}).$mount('#app');
