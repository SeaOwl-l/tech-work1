import { getDatabase, ref, onValue } from 'firebase/database';
export default {
    state: {
        team: [],
        oneProduct: {},
    },
    mutations: {
        setProduct(state, id) {
            state.team.forEach((element) => {
                if (element.id == id) {
                    state.oneProduct = element;
                }
            });
        },
        getItems(state) {
            var products = [];
            const db = getDatabase();
            const dbRef = ref(db, '/Products');
            onValue(
                dbRef,
                (snapshot) => {
                    snapshot.forEach((childSnapshot) => {
                        const childKey = childSnapshot.key;
                        const childData = childSnapshot.val();
                        childData.id = Number(childKey);
                        products.push(childData);
                    });
                },
                {
                    onlyOnce: true,
                }
            );
            state.team = products;
        },
    },
    getters: {
        getTeam(state) {
            return state.team;
        },
        getProduct(state) {
            return state.oneProduct;
        },
    },
};
