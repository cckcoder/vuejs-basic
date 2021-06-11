const app = Vue.createApp({
    data() {
        return {
            coffee: 'Espresso',
            message: 'Espresso is a coffee-brewing method of Italian origin',
            onStock: true,
            img: './resource/espresso1.jpg',
            imgSize: {
                width: '350px',
                height: '400px'
            }
        }
    }
})
