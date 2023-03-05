<template>
  <div class="souye">
    <div class="TopPart">
      <header class="header">
        <div class="item" style="background: #ed6013">
          <span>总销售额</span>
          <div style="border-bottom: #fff 2px solid; width: 100%; height: 42%">
            <h3 style="margin-top: 12%; margin-right: 70%; color: #fff">
              {{ list.saleToal | num }}
            </h3>
          </div>
          <h6>今日销售额：{{ list.sale | num }}</h6>
        </div>
        <div class="item" style="background: #136aed">
          <span>总访问量</span>
          <div style="border-bottom: #fff 2px solid; width: 100%; height: 42%">
            <h3 style="margin-top: 12%; margin-right: 70%; color: #fff">
              {{ list.viewsToal | num }}
            </h3>
          </div>
          <h6>今日访问量：{{ list.view | num }}</h6>
        </div>
        <div class="item" style="background: #ac07a4">
          <span>总收藏量</span>
          <div style="border-bottom: #fff 2px solid; width: 100%; height: 42%">
            <h3 style="margin-top: 12%; margin-right: 70%; color: #fff">
              {{ list.collectToal | num }}
            </h3>
          </div>
          <h6>今日收藏量：{{ list.collect | num }}</h6>
        </div>
        <div class="item" style="background: #0582a4">
          <span>总支付量</span>
          <div style="border-bottom: #fff 2px solid; width: 100%; height: 42%">
            <h3 style="margin-top: 12%; margin-right: 70%; color: #fff">
              {{ list.payToal | num }}
            </h3>
          </div>
          <h6>今日支付量：{{ list.pay | num }}</h6>
        </div>
      </header>
    </div>
    <div class="centerPart">
      <div class="partOne"><h5 style="margin: 5px 0 0 5px">月销售额</h5>
      <div id="charts" style="height:100%;width:80%;margin-left: 10%;"></div>
      </div>
      <div class="partTwo">
        <h5 style="margin: 5px 0 0 5px">产品销售比例</h5>
        <div id="charts2" style="height:100%;width:80%;margin-left: 10%;"></div>
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
          <h6>今日订单数
            <div>{{ list.sale }}</div>
          </h6>
         
          <h6>汇总确认订单
            <div>{{ list.saleToal }}</div>
          </h6>
          <h6>累计金额
            <div>{{ list.payToal }}</div>
          </h6>
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
          <h6>本月订单数
            <div>{{ list.viewsToal }}</div>
          </h6>
          <h6>汇总确认订单
            <div>{{ list.viewsToal }}</div>
          </h6>
          <h6>累计金额
            <div>{{ list.payToal }}</div>
          </h6>
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
import axios from "axios";
import * as echarts from 'echarts';
var localhost="http://localhost:3000/api/sysuser"
export default {
  data() {
    return {
      list: {},
    };
  },
  created() {
  
  },
  mounted(){
    this.getlist();
    this.getOrderInfo()
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('charts'));
var myChart2 = echarts.init(document.getElementById('charts2'));
window.addEventListener('resize',() => { myChart.resize(); });
window.addEventListener('resize',() => { myChart2.resize(); });

// 绘制图表
myChart.setOption({
  tooltip: {},
  legend: {
  },
  xAxis: {
    data: ['肉类', '水产', '蔬菜', '冷饮食品', '水果', ]
  },
  yAxis: {},
  series: [
    {
      name: '销售额',
      type: 'line',
      data: [15, 25, 46,15, 15],
      smooth:true
    },
    {
      name: '销售量',
      type: 'bar',
      data: [10, 20, 36, 10, 10]
    }
  ]
});
// var option;

myChart2.setOption({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: '审议' },
        { value: 735, name: '淘宝' },
        { value: 580, name: '京东' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
});

// option && myChart2.setOption(option);

  },
  methods: {
   
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
      let params = { num: 20181420103 };
      axios
        .get(localhost+"/get", { params: params })
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            let datas = response.data;
            console.log(datas[0].usernum);
            this.list = datas[0];
          } else {
            console.log(response);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getOrderInfo(){
      axios.get(localhost+"/orderInfo","").then((response)=>{
        console.log(response);
      })
    }
  },
  filters: {
    num(value) {
      if (!value) return;
      return value.toLocaleString();
    },
  },
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