const app = Vue.createApp({
    mounted() {
        setInterval(() => {
            this.counter++
        }, 1000)
    },
    data () {
        return {
            counter: 0
        }
    }
})