<template>
  <div class="souye">
    <div class="TopPart">
      <header class="header">
        <div class="item" style="background: #ed6013">
          <span>总销售额</span>
          <div style="border-bottom: #fff 2px solid; width: 100%; height: 42%">
            <h3 style="margin-top: 12%; margin-right: 70%; color: #fff">
              6033
            </h3>
          </div>
          <h6>今日销售额：</h6>
        </div>
        <div class="item" style="background: #136aed">
          <span>总访问量</span>
          <div style="border-bottom: #fff 2px solid; width: 100%; height: 42%">
            <h3 style="margin-top: 12%; margin-right: 70%; color: #fff">
              2222
            </h3>
          </div>
          <h6>今日访问量：</h6>
        </div>
        <div class="item" style="background: #ac07a4">
          <span>总收藏量</span>
          <div style="border-bottom: #fff 2px solid; width: 100%; height: 42%">
            <h3 style="margin-top: 12%; margin-right: 70%; color: #fff">
              2222222
            </h3>
          </div>
          <h6>今日收藏量：</h6>
        </div>
        <div class="item" style="background: #0582a4">
          <span>总支付量</span>
          <div style="border-bottom: #fff 2px solid; width: 100%; height: 42%">
            <h3 style="margin-top: 12%; margin-right: 70%; color: #fff">
              111111
            </h3>
          </div>
          <h6>今日支付量：</h6>
        </div>
      </header>
    </div>
    <div class="centerPart">
      <div class="partOne"><h5 style="margin: 5px 0 0 5px">月销售额</h5></div>
      <div class="partTwo">
        <h5 style="margin: 5px 0 0 5px">产品销售比例</h5>
      </div>
    </div>
    <div class="centerPartTwo">
      <div class="orderTable">
        <h5 style="margin: 10px 0 0 10px">今日订单</h5>
        <div
          style="
            width: 100%;
            height: 2px;
            background: #f5f5f5;
            margin-top: 10px;
          "
        ></div>
        <div class="orderDetils">
          <h6>今日订单数</h6>
          <h6>汇总确认订单</h6>
          <h6>累计金额</h6>
        </div>
      </div>
      <div class="orderTable">
        <h5 style="margin: 10px 0 0 10px">本月订单</h5>
        <div
          style="
            width: 100%;
            height: 2px;
            background: #f5f5f5;
            margin-top: 10px;
          "
        ></div>
        <div class="orderDetils">
          <h6>本月订单数</h6>
          <h6>汇总确认订单</h6>
          <h6>累计金额</h6>
        </div>
      </div>
      <div class="orderTable">
        <h5 style="margin: 10px 0 0 10px">快捷入口</h5>
        <div
          style="
            width: 100%;
            height: 2px;
            background: #f5f5f5;
            margin-top: 10px;
          "
        ></div>
        <div class="orderDetils">
          <h6>产品管理</h6>
          <h6>消息管理</h6>
          <h6>内容管理</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{

    }
  },
  created(){
    this.getlist()
  },
  methods:{
   async getlist() {
        // let params = {
        //   keyword: this.keyword,
        //   pageIndex: this.pageIndex,
        //   pageSize: this.pageSize
        // }
        // 这里使用http://localhost:3000是因为配置地方监听的3000端口
        // /api/sysuser 这一部分也是在index.js中引入配置的
        // /getlist 是在api接口里面的方法
        // 整个三部分组合成立通常使用的接口
        // 其中 前面地址部分可以自己全局去定义，同样$http(axios)也可以封装
        let params=""
        axios.get('http://localhost:3000/api/sysuser/get', { params: params })
          .then(response => {
            console.log(response);
            if (response.status == 200) {
              let datas = response.data
              this.tableData = datas.data
              this.total = datas.total
            } else {
              console.log(response)
            }
          })
          .catch(error => {
            console.log(error)
          })
      },
  }
};
</script> 

<style lang="less" scoped>
.souye {
  position: relative;
  .TopPart {
    width: 100%;
    position: relative;
    .header {
      display: flex;
      justify-content: center;
      align-items: center;
      .item {
        height: 120px;
        text-align: center;
        flex: 1;
        margin: 10px 20px 0 20px;
        border-radius: 15px;
      }
      .item span {
        color: #fff;
        float: left;
        padding: 6px 0 0 10px;
      }
      .item h6 {
        margin-top: 10px;
        float: left;
        margin-left: 10px;
        color: #fff;
      }
    }
  }
  .centerPart {
    margin-top: 20px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    .partOne {
      margin: 0 20px 0 20px;
      height: 300px;
      flex: 2;
      background: #fff;
    }
    .partTwo {
      height: 300px;
      margin: 0 20px 0 0;
      flex: 1;
      background: #fff;
    }
  }
  .centerPartTwo {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    .orderTable {
      height: 100px;
      background: #fff;
      margin: 0 20px 0 20px;
      flex: 1;
    }
    .orderDetils {
      display: flex;
      justify-content: center;
      align-items: center;
      h6 {
        margin-top: 10px;
        text-align: center;
        flex: 1;
      }
    }
  }
  .centerPartTwo :nth-child(3) .orderDetils {
    width: 80%;
    margin-left: 10%;
    padding: 0 5px 0 5px;
  }
  .centerPartTwo :nth-child(3) .orderDetils h6 {
    height: 25px;
    padding-top: 10px;
    margin: 10px 5px 0 5px;
    border: 1px solid #f5f5f5;
    cursor: pointer;
  }
  .centerPartTwo :nth-child(3) .orderDetils :nth-child(1) {
    height: 25px;
    background: #2296ef;
    text-align: center;
    color: #fff;
    padding-top: 10px;
  }
}
</style>