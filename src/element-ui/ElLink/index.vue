<template>
  <a 
   :class="[
    `el-link`,
    `el-link--${type}`,
    underline && !disabled && `is-underline`,
    disabled && `is-disabled`
  ]"
  :href="disabled? null : href" 
  
  v-bind="$attrs"
  @click="handleClick"
  >
      <i v-if="icon" :class="icon"></i>
      <span v-if="$slots.default" class="el-link--inner">
        <slot></slot>
      </span>

      <template v-if="$slots.icon">
        <slot v-if="$slots.icon" name="icon"></slot>
      </template>


    </a>

</template>

<script>
export default {
  
  name: 'ElLink',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: String,
    // 对象的形式会在将属性渲染在组件的根元素上
    // href: {
    //   type: String,
    //   default: ''
    // },
    icon: {
      type: String,
      default: ''
    }
  },

  created() {
    console.log('ElLink created', this.$attrs);
  },
  methods: {
    handleClick(evt) {
     if(!this.disabled) {
      if(!this.href) {
        // evt.preventDefault();
        console.log('1212', evt);
        this.$emit('click', evt);
      }
     }
    }
  }
}
</script>

<style>

</style>

