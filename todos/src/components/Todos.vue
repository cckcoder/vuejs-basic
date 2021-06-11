<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <TodoItems :todo="todo" />
    </div>
  </div>
</template>

<script>
import TodoItems from '@/components/TodoItems';

export default {
  name: 'Todos',
  components: {
    TodoItems
  },
  computed: {
    todos () {
        return this.$store.state.todos
    }
  }
}

</script>

<style scoped>

</style>
