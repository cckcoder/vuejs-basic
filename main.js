const app = Vue.createApp({
    data() {
        return {
            brand: 'Stackpython',
            coffee: 'Espresso',
            selectedVarian: 0,
            qty: 0,
            message: 'Espresso is a coffee-brewing method of Italian origin',
            onStock: true,
            img: './resource/espresso1.jpg',
            imgSize: {
                width: '350px',
                height: '400px'
            },
            coffeeList: [
                { 
                    id: 001,
                    product: 'Espresso',
                    image: './resource/espresso1.jpg'
                },
                { 
                    id: 002,
                    product: 'Espresso Macchiato',
                    image: './resource/espresso2.jpg'
                },
                { 
                    id: 003,
                    product: 'Esspresso Con Panna',
                    image: './resource/espresso3.jpg'
                },
            ]
        }
    },
    methods: {
        handleOrder () {
            this.qty ++
        },
        handleCancleOrder () {
            this.qty = 0
        },
        updateVariant (index) {
            this.selectedVarian = index
        }
    },
    computed: {
        title () {
            return `${this.brand} ${this.coffee}`
        },
        image () {
            return this.coffeeList[this.selectedVarian].image
        },
        order () {
            return `${this.coffeeList[this.selectedVarian].product}: ${this.qty}`
        }
    }
})
