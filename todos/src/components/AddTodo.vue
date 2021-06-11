<template>
  <div>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="title" name="title"  placeholder="Add Todo..."/>
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>

<script>

export default {
  name: 'AddTodo',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTodo() {
      let id = Math.floor(Math.random() * 10000)

      const newTodo = {
        id: id,
        title: this.title,
        completed: false
      }
      this.$store.dispatch('addTodo', newTodo)
      this.title = ''
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
  }
  input[type="text"] {
    flex: 10;
    padding: 15px;
  }
  input[type="submit"] {
    flex: 2;
  }
</style>
