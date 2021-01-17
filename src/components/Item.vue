<template>
  <li>
    <label>
      <input type="checkbox" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger">删除</button>
  </li>
</template>

<script lang="ts">
import { Todo } from '../type/type'

export default {
  name: 'Item',
  props: {
    todo: Object as () => Todo,
  },
}
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
    /* display: none; */
    margin-top: 3px;
  }
  &:before {
    content: initial;
  }
  &:last-child {
    border-bottom: none;
  }
}
</style>
