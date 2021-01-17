<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" />
    </label>
    <span> <span>已完成2</span>/全部5 </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Footer',
  setup() {
    return {}
  },
}
</script>
<style lang="scss">
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
  & label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    & input {
      position: relative;
      top: -1px;
      vertical-align: middle;
      margin-right: 5px;
    }
  }
  & button {
  float: right;
  margin-top: 5px;
}
}
</style>
