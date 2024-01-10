<template>
  <div>
    <div>
      <slot name="user" v-bind:userInfo="userInfo" 
      v-bind:address="address" >{{ userInfo.name }}</slot>

    </div>
    <div>
      <!-- 具有名字的插槽address -->
      <slot name="address">
        <!-- <span>{{address.province}}</span>
        <span>{{address.city}}</span> -->
      </slot>
    </div>
  </div>
</template>

<script>
export default{
  name: 'customUser',
  data(){
      return{
          userInfo:{
              name:'erdong',
              sex:'boy',
              age:'26'
          },
          address: {
              province: '浙江',
              city: '杭州'
          }
      }
  }
}
</script>