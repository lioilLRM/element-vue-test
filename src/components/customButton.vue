<!--子组件-->
<template>
  <button class="custom-button">
      <slot></slot>
  </button>
</template>
<style>
.custom-button{
  color: #fff;
  background-color: #409eff;
  padding: 10px 20px;
  font-size: 14px;
  border-radius:6px;
  outline: none;
  border: 1px solid #dcdfe6;
}
</style>