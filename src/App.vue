<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo" />
      <Footer :todos="todos"/>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
// 引入直接的子级组件
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
import { Todo } from './type/type'

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
      todos: [
        { id: 1, title: '奔驰', isCompleted: false },
        { id: 2, title: '宝马', isCompleted: true },
        { id: 3, title: '特斯拉', isCompleted: false },
      ],
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
    return {
      ...toRefs(state),
      addTodo,
      deleteTodo,
      updateTodo,
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
