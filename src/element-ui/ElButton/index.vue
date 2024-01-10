<template>
  <button  type="button" 
      :class="['el-button', 
      `el-button--${type?type: 'default'}`,
        size&& `el-button--${size}`,
        {  'is-plain':plain, 
            'is-round':round, 
            'is-circle':circle,
            'is-disabled':disabled,
            'is-loading':loading
        }, 
      ]"
      :disabled="disabled || loading"
      :autofocus="autofocus"
      @click="$emit('click', $event)"
      >
      <i v-if="loading" class="el-icon-loading"></i>
      <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
    
  </button>
</template>

<script>
  export default {
    name: 'ElButton',
    props: {
      type: {
        type: String,
        default: ""
      },
      plain: {
        type: Boolean,
        default: false
      },
      round:{
        type: Boolean,
        default: false
      },
      circle:{
        type: Boolean,
        default: false
      },
      icon:{
        type: String,
        default: ""
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: ""
      },
      autofocus: {
        type: Boolean,
        default: false
      },

    },
    created() {
      console.log(this.$slots.default)
    },
  }
</script>