<template>
  <div><h1>compA</h1></div>
</template>

<script>
export default {
  name: 'CompA',
  data() {
    return {
      msg: 'Hello from compA'
    }
  },
  created() {
    console.log('compA created')
    this.getData()
  },
  mounted() {
    console.log('compA mounted')
  },
  methods: {
    changeMsg() {
      this.msg = 'Hello from compA'
    },
    getData() {
      console.log(`发送请求`, )
    }
  }
}
</script>