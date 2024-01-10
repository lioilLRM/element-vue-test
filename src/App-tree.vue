<template>
  <div id="app">
    <div style="color: blue">显示的值：{{internalLabel}}</div>
    <div>传给后台2：{{forest.selectedNodeIds}}</div>

    <div class="eltree">
        <el-tree
        :data="treeOptions"
        show-checkbox
        default-expand-all
        check-strictly
        node-key="id"
        ref="tree"
        highlight-current
        :props="defaultProps"
       
        @check="onTreeCheck"
      >
      <span slot-scope="{ node, data }" class="custom-tree-node span-ellipsis">
              <span :title="node.label" v-html="searchFormat(node.label)" />
              <span v-if="isShowLink && !node.isLeaf" :class="['linkText', data.isParentChildRelation?'treeLinkActive':'treeLinkDisactive']"
              @click.stop="onHandleTreeLink(node, data)"
              >+</span>
            </span>
      </el-tree>

    </div>

  </div>
</template>

<script>

import { deptments } from "./api/deptment.js";
const createMap = () => Object.create(null)
const getChildState = node => {
  let all = true;
  let none = true;
  let allWithoutDisable = true;
  for (let i = 0, j = node.length; i < j; i++) {
    const n = node[i];
    if (n.checked !== true || n.indeterminate) {
      all = false;
      if (!n.disabled) {
        allWithoutDisable = false;
      }
    }
    if (n.checked !== false || n.indeterminate) {
      none = false;
    }
  }

  return { all, none, allWithoutDisable, half: !all && !none };
}

const reInitChecked = function(node) {
  if (node.childNodes.length === 0 || node.loading) return;

  const {all, none, half} = getChildState(node.childNodes);
  if (all) {
    node.checked = true;
    node.indeterminate = false;
  } else if (half) {
    node.checked = false;
    node.indeterminate = true;
  } else if (none) {
    node.checked = false;
    node.indeterminate = false;
  }

  const parent = node.parent;
  if (!parent || parent.level === 0 || !parent.data.isParentChildRelation) return;

  if (node.data.isParentChildRelation) {
    reInitChecked(parent);
  }
}



export default {
  name: "App",

  data() {
    return {
      isShowLink: true,
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
        nodeMap: createMap(),
        selectedNodeMap: createMap(),
      }
    };
  },
  computed: {
    searchFormat() {
      const search = this.search
      return (nval) => {
        if (!search) return nval
        return nval.replace(search, `<span style="color:#326FFF;margin:0 4px;">${search}</span>`)
      }
    },
    internalValue() {
      let internalValue

      internalValue = this.forest.selectedNodeIds.filter(id => {
          const nodeData = this.getNode(id)
          let res = false
          res =  !this.isSelected(nodeData.parentNode)
          if(!res && !nodeData.parentNode.isParentChildRelation) {
            res = true
          }
          console.log("🚀 ~ file: App.vue:71 ~ internalValue ~ nodeData:",res, nodeData.label ,nodeData)
          return res
        })
      console.log("🚀 ~ file: App.vue:77 ~ internalValue ~ internalValue:", internalValue)

      return internalValue
    },
    internalLabel() {
      return this.internalValue.map(id => this.getNode(id).label).join(', ')
    },
   
  },
  created() {
    this.initTreeOptions()
    this.normalizeTreeData(null, this.treeOptions)
  },
  methods: {
    initTreeOptions() {
      this.treeOptions =   this.formatComing(deptments, 'depName', 'label')
      
    },
    normalizeTreeData(parentNode, nodes) {
      nodes.map((node) => {
        const {children } = node
        const isBranch = Array.isArray(children) || children === null
        const isLeaf = !isBranch
        node.isBranch = isBranch
        node.isLeaf = isLeaf
        node.parentNode = parentNode

        this.forest.nodeMap[node.id] = node
        if (isBranch) {
          this.normalizeTreeData(node, node.children)
        }
      })
    },
   
    formatComing(treeOptions, key, newKey) {
      treeOptions.forEach(node => {
        if (node[key]) {
          node[newKey] = node[key]
        }
       


        if (node['children'] && node['children'].length) {
          this.formatComing(node['children'], key, newKey)
        } else {
          delete node['children']
        }

      })
      return treeOptions
    },
    getNode(nodeId) {
      if (nodeId == null) return null

      return nodeId in this.forest.nodeMap
        ? this.forest.nodeMap[nodeId]
        : null
    },
    isSelected(node) {
      // whether a node is selected (single-select mode) or fully-checked (multi-select mode)
      return node && this.forest.selectedNodeMap[node.id] === true
    },
  
    getCheckedNodes() {
        return this.$refs.tree.getCheckedNodes()
      },
    getCheckedKeys() {
      return this.$refs.tree.getCheckedKeys()
    },
   
     
    
     
      // 通过keys设置节点的不确定状态
      setNodeIndeteminateByKeys(keys, checked) {
        keys.forEach(key => {
          let node = this.$refs.tree.getNode(key)
          node.indeterminate = checked
        })
      },
      // 通过keys设置节点的选择状态
      setNodeCheckedByKeys(keys, checked) {
        keys.forEach(key => {
          let node = this.$refs.tree.getNode(key)
          node.setChecked(checked)
        })
      },
      
      onTreeCheck(curNodeData, checkedObj) {
        let curNode =  this.$refs.tree.getNode(curNodeData.id)
        
        let isChecked = checkedObj.checkedKeys.includes(curNodeData.id)
        curNode.checked = isChecked
        console.log("🚀 ~ file: App.vue:220 ~ onTreeCheck ~ curNodeData:", curNodeData.id, checkedObj,isChecked, curNodeData, curNode)
        this.setTreeChecked({value: isChecked, deep: curNodeData.isParentChildRelation, node: curNode})

        this.addDataToForest(curNodeData, isChecked)

      },
      setTreeChecked(options) {
        let {value, deep, recursion, passValue, node} = options

        node.indeterminate = value === 'half';
        node.checked = value === true;

        if (!node.store.checkDescendants) {
          let { all, allWithoutDisable } = getChildState(node.childNodes);

          if (!node.isLeaf && (!all && allWithoutDisable)) {
            node.checked = false;
            value = false;
          }

          const handleDescendants = () => {
            if (deep) {
              const childNodes = node.childNodes;
              for (let i = 0, j = childNodes.length; i < j; i++) {
                const child = childNodes[i];
                console.log("🚀 ~ file: App.vue:389 ~ handleDescendants ~ child:", child)
                passValue = passValue || value !== false;
                const isCheck = child.disabled ? child.checked : passValue;
                deep = child.data.isParentChildRelation
                this.setTreeChecked({value: isCheck, deep: deep, recursion: true, passValue: passValue, node: child})
              }
              const { half, all } = getChildState(childNodes);
              if (!all) {
                node.checked = all;
                node.indeterminate = half;
              }
            }
          };

          handleDescendants();
        }

        const parent = node.parent;
        if (!parent || parent.level === 0 || !parent.data.isParentChildRelation) return;

        if (!recursion) {
          reInitChecked(parent);
        }
      },


      addDataToForest(curNodeData, checked) {
        
        console.log("🚀 ~ file: App.vue:418 ~ addDataToForest ~ allChildrendIds:",checked)

        this.forest.selectedNodeIds =  this.getCheckedKeys()
        this.forest.selectedNodes = this.getCheckedNodes()
        this.forest.selectedNodeIds.forEach(id => {
          if(checked) {
            this.forest.selectedNodeMap[id] = checked
          } 
        })

        Object.keys(this.forest.selectedNodeMap).forEach(id => {
          if(!this.forest.selectedNodeIds.includes(id)) {
            delete this.forest.selectedNodeMap[id]
          }
        })
      },
 

    onHandleTreeLink(node, data) {
      console.log('🚀 onHandleTreeLink ~ node, data:', node, data)
      data.isParentChildRelation = !data.isParentChildRelation
    },

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

.eltree{
  width: 400px;
}
.custom-tree-node{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.linkText{
  font-size: 26px;
}
.treeLinkActive{
  color:blue;
}
.treeLinkDisactive{
  color:gray;
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
