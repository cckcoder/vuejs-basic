<template>
  <div class="todo-item" :class="{'is-complete' : todo.completed}">
    <p>
      <input type="checkbox" @change="markComplete(todo.id)">
      {{ todo.title }}
      <button @click="handleDelete(todo.id)" class="del">x</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
  methods: {
      markComplete (id) {
	this.$store.dispatch('markComplete', id)
      },
      handleDelete (id) {
	this.$store.dispatch('deleteTodo', id)
      }
  },
}

</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

.is-complete {
  text-decoration: line-through;
}

.del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>
