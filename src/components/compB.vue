<template>
  <div><h1>compB</h1></div>
</template>

<script>
export default {
  name: 'CompB',
  data() {
    return {
      msg: 'Hello from compB'
    }
  },
  created() {
    console.log('compB created')
  },
  mounted() {
    console.log('compB mounted')
  },
  methods: {
    changeMsg() {
      this.msg = 'Hello from compB'
    }
  }
}
</script>