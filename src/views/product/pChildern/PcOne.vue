<template>
  <div style="width:100%;margin-left:5%">
    <el-table
    :data="tableData"
    style="width: 90%" max-height="100%">
    <el-table-column fixed prop="proId" label="序列" width="120">  
      </el-table-column>
      <el-table-column prop="proName" label="名称" width="120"> </el-table-column>
      <el-table-column prop="proPrice" label="价格" width="120"> </el-table-column>
      <el-table-column prop="proKids" label="类别" width="120"> </el-table-column>
      <el-table-column prop="addTime" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="produce" label="备注" width="120"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="220">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, tableData)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index+1, tableData)">删除</el-button>
        </template>
      </el-table-column>
  </el-table>
  </div>
 
</template>

<script>
import axios from 'axios';
var localhost="http://localhost:3000/api/sysuser"
export default {
  data() {
    return {
      tableData: []
    };
  },
  mounted(){
   this.getProInfo()
  },
methods:{
        getProInfo(){
          axios.get(localhost+'/proInfo','').then((response)=>{
            //console.log(response);
            this.tableData=response.data
          })
        },
        handleDelete(index, row){
          //this.$emit('handleDelete')
          row.splice(index,1) 
          let params={keynum:row[index-1].keynum}
          console.log(params);
           axios.get(localhost+'/deleteInfo',{params:params}).then((response)=>{
             console.log(response);
             if(response.status==200){
              this.$message({
          message: '删除成功',
          type: 'success'
        });
             }
          
           })

        },
        handleEdit(index, row){
          //this.$emit('handleEdit')
        }
      },

};
</script>

<style>
</style>