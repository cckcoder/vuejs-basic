# vuejs-basic

## Implement vue with CDN

* [Vue CDN](https://v3.vuejs.org/guide/installation.html#cdn)

`<script src="https://unpkg.com/vue@next"></script>`

* Implement code like this.

```html
<body>
    <div id="app">
        <h1>{{ product }}</h1>
    </div>

    <!-- Import App -->
    <script src="main.js"></script>

    <!-- Mount App -->
    <script>
        const mountedApp = app.mount('#app')
    </script>
</body>
```

* Connect vue with html
```javascript
const app = Vue.createApp({
    data () {
        return {
            product: 'Espresso'
        }
    }
})
```