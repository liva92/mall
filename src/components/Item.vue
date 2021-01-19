<template>
  <li>
    <label>
      <input type="checkbox" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="delTodo">
      删除
    </button>
  </li>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
// 引入接口
import { Todo } from '../types/todo'
export default defineComponent({
  name: 'Item',
  props: {
    todo: {
      type: Object as () => Todo, // 函数返回的是Todo类型
      required: true,
    },
    deleteTodo: {
      type: Function,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    // 删除数据的方法
    const delTodo = () => {
      // 提示
      if (window.confirm('确定要删除吗?')) {
        props.deleteTodo(props.index)
      }
    }

    return {
      delTodo,
    }
  },
})
</script>
<style lang="scss">
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
  label {
    float: left;
    cursor: pointer;
    input {
      vertical-align: middle;
      margin-right: 6px;
      position: relative;
      top: -1px;
    }
  }
  button {
    float: right;
    display: none;
    margin-top: 8px;
    color: #fff;
    background: red;
    border: none;
  }
  &:before {
    content: initial;
  }
  &:last-child {
    border-bottom: none;
  }
  &:hover,
  &:active {
    background: pink;
    button {
      display: inline-block;
    }
  }
}
</style>
