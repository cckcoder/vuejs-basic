import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: 1, title: 'Studying Vue', completed: false}
    ]
  },
  mutations: {
    ADD_TODO (state, newTodo) {
      state.todos.push(newTodo)
    },
    UPDATE_MARK(state, id) {
      let todoIndex = state.todos.findIndex(todo => todo.id == id)
      state.todos[todoIndex].completed = !state.todos[todoIndex].completed 
    },
    DELETE_TODO (state, id) {
      state.todos = state.todos.filter(
        todo => todo.id != id
      )      
    }
  },
  actions: {
    addTodo ({ commit }, newTodo) {
      commit('ADD_TODO', newTodo)
    },
    markComplete ({ commit }, id) {
      commit('UPDATE_MARK', id)
    },
    deleteTodo ({ commit }, id) {
      commit('DELETE_TODO', id)
    }
  },
  modules: {
  }
})
