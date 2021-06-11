const app = Vue.createApp({
    data() {
        return {
            coffee: 'Espresso',
            qty: 0,
            message: 'Espresso is a coffee-brewing method of Italian origin',
            onStock: true,
            img: './resource/espresso1.jpg',
            imgSize: {
                width: '350px',
                height: '400px'
            },
            coffeeList: [
                'Espresso',
                'Espresso Macchiato',
                'Esspresso Con Panna'
            ]
        }
    },
    methods: {
        handleOrder () {
            this.qty ++
        },
        handleCancleOrder () {
            this.qty = 0
        }
    }
})
