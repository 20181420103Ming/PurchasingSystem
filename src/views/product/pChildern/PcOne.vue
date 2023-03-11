<template>
  <div style="width: 100%; margin-left: 2%">
    <div class="header">
      <div class="form">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="产品名称">
            <el-input
              v-model="formInline.name"
              size="small"
              placeholder="产品名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="添加时间">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="formInline.data"
              size="small"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="small" @click="onSubmit"
              >查询</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div class="group">
        <el-button type="warning" size="small" icon="el-icon-plus"
          >添加商品</el-button
        >
        <el-button type="danger" size="small" icon="el-icon-delete"
          >批量删除</el-button
        >
      </div>
    </div>
    <div class="content">
      <el-table :data="tableData" max-height="100%">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column fixed prop="proId" label="序列" width="120">
        </el-table-column>
        <el-table-column prop="proName" label="名称" width="120">
        </el-table-column>
        <el-table-column prop="proPrice" label="价格" width="120">
        </el-table-column>
        <el-table-column prop="proKids" label="类别" width="120">
        </el-table-column>
        <el-table-column prop="addTime" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="produce" label="备注" width="150">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="240">
          <template slot-scope="scope">
            <el-button
              size="mini"
              icon="el-icon-edit"
              type="primary"
              @click="handleEdit(scope.$index, tableData)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="handleDelete(scope.$index + 1, tableData)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <Pagination :total="total" @CurrentChange="CurrentChange"></Pagination>
    </div>
  </div>
</template>

<script>
import Pagination from "@/componets/pagination/Pagination.vue";
import axios from "axios";
var localhost = "http://localhost:3000/api/sysuser";
export default {
  components: { Pagination },
  data() {
    return {
      tableData: [],
      formInline: {
        name: "",
        region: "",
        data: "",
      },
      total: 11,
    };
  },
  mounted() {
    this.getProInfo(1);
    this.getAllProInfo();
  },
  methods: {
    onSubmit() {
      if(this.formInline.name==""){
        this.$message({
              message: "请输入商品名称",
              type: "warning",
            });
      }else{this.search(this.formInline.name)}
      
    },
    //获取产品所有信息
    getAllProInfo() {
      axios.get(localhost + "/allproInfo", "").then((response) => {
        this.total = response.data.length;
        console.log(this.total);
      });
    },
    //获取产品分页信息
    getProInfo(val) {
      const params = { page: val };
      axios.get(localhost + "/proInfo", { params: params }).then((response) => {
        //console.log(response);
        this.tableData = response.data;
      });
    },
    //搜索
    async search(search){
      const params={search:search}
      console.log(params);
      await axios.get(localhost+'/search',{params:params}).then((response)=>{
        console.log(response);
        if(response.data.length<=0){
          this.$message({
          message: '暂无数据',
          type: 'error'
        });
        this.tableData=[]
        }if(response.data.length>0){
          this.$message({
          message: '查询成功',
          type: 'success'
        });
        this.tableData=response.data
        }
      })
    },
    //删除产品数据
    async handleDelete(index, row) {
      //this.$emit('handleDelete')

      let params = { keynum: row[index - 1].keynum };
      console.log(params);
      await axios
        .get(localhost + "/deleteInfo", { params: params })
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            this.$message({
              message: "删除成功",
              type: "success",
            });
          }
        });
      row.splice(index - 1, 1);
    },
    handleEdit(index, row) {
      //this.$emit('handleEdit')
    },
    CurrentChange(val) {
      this.getProInfo(val);
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  margin-top: 10px;
  width: 96%;
  .el-form-item {
    margin-bottom: 10px;
  }
}
.content {
  margin-top: 10px;
  width: 96%;
}
</style>