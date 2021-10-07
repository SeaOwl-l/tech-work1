export default {
    state: {
        team: [
            {
                id: 1,
                name: 'the tomato',
                price: 100,
                massa: '1кг',
                currency: '$',
                url:
                    'https://avatars.mds.yandex.net/get-zen_doc/4395091/pub_6099082887bf2977fc1b31ff_609908fba38d215d4ead542d/scale_1200',
            },
            {
                id: 2,
                name: 'Summer',
                price: 150,
                massa: '1 day',
                currency: '$',
                url:
                    'https://www.nastol.com.ua/download.php?img=201209/1680x1050/nastol.com.ua-33065.jpg',
            },
            {
                id: 3,
                name: 'the tomato',
                price: 100,
                massa: '1кг',
                currency: '$',
                url:
                    'https://avatars.mds.yandex.net/get-zen_doc/4395091/pub_6099082887bf2977fc1b31ff_609908fba38d215d4ead542d/scale_1200',
            },
            {
                id: 4,
                name: 'the tomato',
                price: 100,
                massa: '1кг',
                currency: '$',
                url:
                    'https://avatars.mds.yandex.net/get-zen_doc/4395091/pub_6099082887bf2977fc1b31ff_609908fba38d215d4ead542d/scale_1200',
            },
            {
                id: 5,
                name: 'the tomato',
                price: 100,
                massa: '1кг',
                currency: '$',
                url:
                    'https://avatars.mds.yandex.net/get-zen_doc/4395091/pub_6099082887bf2977fc1b31ff_609908fba38d215d4ead542d/scale_1200',
            },
            {
                id: 6,
                name: 'the tomato',
                price: 100,
                massa: '1кг',
                currency: '$',
                url:
                    'https://avatars.mds.yandex.net/get-zen_doc/4395091/pub_6099082887bf2977fc1b31ff_609908fba38d215d4ead542d/scale_1200',
            },
            {
                id: 7,
                name: 'the tomato',
                price: 100,
                massa: '1кг',
                currency: '$',
                url:
                    'https://avatars.mds.yandex.net/get-zen_doc/4395091/pub_6099082887bf2977fc1b31ff_609908fba38d215d4ead542d/scale_1200',
            },
            {
                id: 8,
                name: 'the tomato',
                price: 100,
                massa: '1кг',
                currency: '$',
                url:
                    'https://avatars.mds.yandex.net/get-zen_doc/4395091/pub_6099082887bf2977fc1b31ff_609908fba38d215d4ead542d/scale_1200',
            },
        ],
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
