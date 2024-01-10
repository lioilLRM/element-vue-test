<template>
  <label :class="[
    'el-radio',

  ]">

  <span class="el-radio__input"
  :class="[
      {
        'is-disabled': disabled,
        'is-checked': model === label}
    ]"
  >
      <span class="el-radio__inner">
      </span>
      <!--   -->
      <input type="radio" class="el-radio__original" 
        :value="label"
         v-model="model"
        @change="handleChange"
      >
  </span>
  <span class="el-radio__label"
    :class="[
      {
        'is-disabled': disabled,
        'is-checked': model === label}
    ]"
  >
    <slot></slot>
    <template v-if="!$slots.default">{{ label }}</template>
  </span>

  </label>
</template>

<script>

export default {
  name: 'ELRadio',
  props: {
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    disabled: Boolean,
    name: String
  
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);

        this.$refs.radio &&(this.$refs.radio.checked = this.model === this.label)
      }
    }
  },
  methods: {
    handleChange(event) {
      this.$nextTick(()=> {
        console.log(event, event.target.value);
        this.$emit('change', this.model);
      })
    }
  }
}
</script>

<style>

</style>