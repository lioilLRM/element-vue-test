<template>
  <div id="app">
    <!-- <div class="row">
      <el-button @click="handleClick">默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div>
    <div class="row">
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </div>

    <div class="row">
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>

    </div>

    <div class="row">
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" loading icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>

    </div>

    <div class="row">
      <el-button disabled>默认按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="success" disabled>成功按钮</el-button>
      <el-button type="info" disabled>信息按钮</el-button>
      <el-button type="warning" disabled>警告按钮</el-button>
      <el-button type="danger" disabled>危险按钮</el-button>
    </div>

    <div class="row">
      <el-button plain disabled>朴素按钮</el-button>
  <el-button type="primary" plain disabled>主要按钮</el-button>
  <el-button type="success" plain disabled>成功按钮</el-button>
  <el-button type="info" plain disabled>信息按钮</el-button>
  <el-button type="warning" plain disabled>警告按钮</el-button>
  <el-button type="danger" plain disabled>危险按钮</el-button>
    </div>

    <div class="row">
      <el-button type="text">文字按钮</el-button>
      <el-button type="text" disabled>文字按钮</el-button>

    </div>

    <div class="row">
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    </div>

    <div class="row">
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
        &nbsp;
      <el-button-group>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
    </el-button-group>

    </div>

    <div class="row">
      <el-button type="primary" :loading="true">加载中</el-button>

    </div>

    <el-row  class="row">
      <el-button>默认按钮</el-button>
      <el-button size="medium">中等按钮</el-button>
      <el-button size="small">小型按钮</el-button>
      <el-button size="mini">超小按钮</el-button>
    </el-row>
    <el-row>
      <el-button round>默认按钮</el-button>
      <el-button size="medium" round>中等按钮</el-button>
      <el-button size="small" round>小型按钮</el-button>
      <el-button size="mini" round autofocus>超小按钮</el-button>
    </el-row>

    <div  class="row">
      <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
      <el-link type="primary">1主要链接</el-link>
      <el-link type="success">成功链接</el-link>
      <el-link type="warning">警告链接</el-link>
      <el-link type="danger">危险链接</el-link>
      <el-link type="info" icon="el-icon-edit">信息链接2</el-link>
    </div>

    <div  class="row">
      <el-link disabled>默认链接</el-link>
      <el-link type="primary" disabled>主要链接 </el-link>
      <el-link type="success" disabled>成功链接 </el-link>
      <el-link type="warning" disabled>警告链接 </el-link>
      <el-link type="danger" disabled>危险链接 </el-link>
      <el-link type="info" disabled>信息链接 </el-link>
    </div>

    <div class="row">
      <el-link :underline="false">无下划线</el-link>
      <el-link>有下划线1</el-link>
    </div>

    <div class="row">
      <el-link icon="el-icon-edit">编辑</el-link>
      <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
      

    </div>

    <div class="row">
      <el-link>
        <template slot="icon">
          测试
        </template>

      </el-link>

    </div> -->

    <!-- <h2>el-radio</h2>
    <div class="row">
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>

      <el-radio v-model="radio" label="38">
      </el-radio>
    </div> -->
    <div>选择的值：{{elTreeValue}}</div>
    <el-tree
      :data="data"
      show-checkbox
      default-expand-all
      node-key="id"
      ref="tree"
      highlight-current
      :props="defaultProps"
      @check-change="handleCheckChange"
    >
    </el-tree>

    <div class="buttons">
      <el-button @click="getCheckedNodes">通过 node 获取</el-button>
      <el-button @click="getCheckedKeys">通过 key 获取</el-button>
      <el-button @click="setCheckedNodes">通过 node 设置</el-button>
      <el-button @click="setCheckedKeys">通过 key 设置</el-button>
      <el-button @click="resetChecked">清空</el-button>
    </div>

    <h1>tree select</h1>
    <div>{{ treeValue }}</div>
    <treeselect v-model="treeValue" :multiple="true" :options="treeOptions" />
  </div>
</template>

<script>
// import the component
import Treeselect from '@riophae/vue-treeselect'
  // import the styles
  import '@riophae/vue-treeselect/dist/vue-treeselect.css'
const Mock = require("mockjs");
import { deptments } from "./api/deptment.js";
export default {
  name: "App",
  components: {Treeselect},
  data() {
    return {
      list: null,
      listLoading: false,
      buttonText: "保存",
      num: 1,
      radio: "2",
      elTreeValue: [],

      data: deptments ,
      treeValue: [],
      treeOptions: [],
      defaultProps: {"children":"children","label":"depName","width":224,"height":300},
      forest: {
        selectedNodeIds: [],
        selectedNodes: [],
        nodeMap: {},
      }
    };
  },
  computed: {
    
   
  },
  created() {
    // this.fetchList();
    this.initTreeOptions()
  },
  methods: {
    initTreeOptions() {
    this.treeOptions =   this.formatComing(deptments, 'depName', 'label')
    },
    formatComing(treeOptions, key, newKey) {
      treeOptions.forEach(option => {
        if (option[key]) {
          option[newKey] = option[key]
        }
        if (option['children'] && option['children'].length) {
          this.formatComing(option['children'], key, newKey)
        } else {
          delete option['children']
        }

      })
      return treeOptions
    },
    fetchList() {
      // this.list = Array(20).fill({ })
      const data = Mock.mock({
        "items|30": [
          {
            id: "@id",
            title: "@sentence(10, 20)",
            "status|1": ["published", "draft", "deleted"],
            author: "name",
            display_time: "@datetime",
            pageviews: "@integer(300, 5000)",
          },
        ],
      });
      console.log(`data:`, this.$refs.table);

      this.list = data.items;
    },
    handleClick(event) {
      console.log(event);
    },

    handleChange(value) {
      console.log(value);
    },

    getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
        return this.$refs.tree.getCheckedNodes()
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
        return this.$refs.tree.getCheckedKeys()
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      },
      handleCheckChange(data, checked, indeterminate) {
        console.log('handleCheckChange：',data, checked, indeterminate);
        this.forest.selectedNodeIds =  this.getCheckedKeys()
        this.forest.selectedNodes = this.getCheckedNodes()
        this.elTreeValue = this.getCheckedKeys()
      }
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.table-container {
  display: flex;
  flex-direction: row;
}

.flex-container {
  display: flex;
}

.flex-item {
  flex: 1;
  padding: 20px;
  background-color: #e5e5e5;
}
.bg-pink {
  background-color: pink;
}

.flex-none {
  /* flex: none; */
  background-color: #9b4dca;
  color: white;
  width: 100px;
  /* max-width: 400px; */
}

.text-limit1 {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.label {
  width: 120px;
}

.table-wrap {
  flex: 1;
}

.table-wrap > .el-table {
  width: 100%;
}

.table-wrap > .el-table__header-wrapper + table,
.table-wrap > .el-table__body-wrapper + table {
  width: 100% !important;
}

/* .table-wrap>.el-table__body,   .table-wrap>.el-table__footer,   .table-wrap>.el-table__header{
  table-layout: auto;
} */
.el-table__body,
.el-table__footer,
.el-table__header {
  table-layout: auto;
}

.row {
  margin-bottom: 20px;
}

.el-row {
  margin-bottom: 20px;
}
</style>
