<template>
  <div id="app">
    <!-- <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column  fixed  prop="date"  label="日期"  width="150"></el-table-column>
    <el-table-column   prop="name"   label="姓名"   width="120"> </el-table-column>
    <el-table-column  prop="province"  label="省份"  width="120"></el-table-column>
    <el-table-column  prop="city"  label="市区"  width="120"></el-table-column>
    <el-table-column   prop="address"   label="地址"   width="300"> </el-table-column>
    <el-table-column   prop="zip"   label="邮编"   width="120"> </el-table-column>
    <el-table-column  fixed="right"  label="操作"  width="100">  
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table> -->

  <!-- <el-progress type="circle" :percentage="percentage"></el-progress> -->

  <el-tabs v-model="activeName" @tab-click="handleClick">

    <el-tab-pane v-for="tab in tabs" :key="tab.name" class="tab-pane" :label="tab.title" :name="tab.name">
      <keep-alive>
        <CompA v-if="tab.name === activeName && activeName === 'custom_form_workreportlog'" :ref="activeName"   />
        <CompB v-if=" tab.name === activeName && activeName === 'custom_form_coordinationlog'" :ref="activeName"   />
        <CompC v-if="tab.name === activeName && activeName === 'custom_form_trayrecord'" :ref="activeName"   />
      </keep-alive>
    </el-tab-pane>

    <!-- <el-tab-pane label="报工记录" name="custom_form_workreportlog">
      <CompA v-if="activeName === 'custom_form_workreportlog'" :ref="activeName"   />
    </el-tab-pane>
    <el-tab-pane label="外协记录" name="custom_form_coordinationlog">
      <CompB v-if="activeName === 'custom_form_coordinationlog'" :ref="activeName"   />
    </el-tab-pane>
    <el-tab-pane label="装箱打托" name="custom_form_trayrecord">
      <CompC v-if="activeName === 'custom_form_trayrecord'" :ref="activeName"   />
    </el-tab-pane> -->


  </el-tabs>

  </div>
</template>

<script>

 
import CompA from './components/compA.vue'
import CompB from './components/compB.vue'
import CompC from './components/compC.vue'

export default {
  name: "App",
  components: {
    CompA,
    CompB,
    CompC
  },

  data() {
    return {
      activeName: 'custom_form_workreportlog',

      tabs: [
        { title: '报工记录', name: 'custom_form_workreportlog', rule: '1060_0001' },
        { title: '外协记录', name: 'custom_form_coordinationlog', rule: '1060_0002' },
        { title: '装箱打托', name: 'custom_form_trayrecord', rule: '1060_0003' }

      ],
      

      percentage: 0, 
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }]
    };
  },
  computed: {
     
   
  },
  created() {
     
     
  },
  methods: {

    handleClick(tab, event) {
      console.log(tab, event);
    },
 
  },
};
</script>

<style scoped>
 .el-table__body-wrapper::-webkit-scrollbar {
  width: 30px;
  height: 30px;
  background: transparent;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}


 
 



</style>
