<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo" />
      <Footer
        :todos="todos"
        :checkAll="checkAll"
        :clearAllCompletedTodos="clearAllCompletedTodos"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from 'vue'
// 引入直接的子级组件
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
import { Todo } from './type/type'
import { readTodos, saveTodos } from './until/localStorageUtilsts'

export default defineComponent({
  name: 'App',
  // 注册组件
  components: {
    Header,
    List,
    Footer,
  },
  setup() {
    const state = reactive<{ todos: Todo[] }>({
      todos: [],
    })
    onMounted(() => {
      setTimeout(() => {
        state.todos = readTodos()
      }, 1000)
    })
    const addTodo = (todo: Todo) => {
      state.todos.unshift(todo)
    }
    const deleteTodo = (index: number) => {
      state.todos.splice(index, 1)
    }
    const updateTodo = (todo: Todo, isCompleted: boolean) => {
      todo.isCompleted = isCompleted
      console.log(isCompleted)
    }
    const checkAll = (isCompleted: boolean) => {
      state.todos.forEach((todo) => {
        todo.isCompleted = isCompleted
      })
    }
    const clearAllCompletedTodos = () => {
      state.todos = state.todos.filter((todo) => !todo.isCompleted)
    }
    watch(() => state.todos, saveTodos, { deep: true })
    return {
      ...toRefs(state),
      addTodo,
      deleteTodo,
      updateTodo,
      checkAll,
      clearAllCompletedTodos,
    }
  },
})
</script>

<style lang="scss">
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
  // border: 1px solid #ddd;
  & .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
}
</style>
