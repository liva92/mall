<template>
  <ul class="todo-main">
    <Item
      v-for="(todo, index) in todos"
      :key="todo.id"
      :todo="todo"
      :index="index"
      :deleteTodo="deleteTodo"
    />
  </ul>
</template>

<script lang="ts">
import Item from './Item.vue'
export default {
  name: 'List',
  components: {
    Item,
  },
  props: ['todos','deleteTodo'],
}
</script>
<style lang="scss">
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
