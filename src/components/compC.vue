<template>
  <div><h1>compC</h1></div>
</template>

<script>
export default {
  name: 'CompC',
  data() {
    return {
      msg: 'Hello from compC'
    }
  },
  created() {
    console.log('compC created')
  },
  mounted() {
    console.log('compC mounted')
  },
  methods: {
    changeMsg() {
      this.msg = 'Hello from compC'
    }
  }
}
</script>