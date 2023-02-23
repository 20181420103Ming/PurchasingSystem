<template>
  <div class="souye">
    <div class="TopPart">
      <header class="header">
        <div class="item" style="background: #ed6013">
          <span>总销售额</span>
          <div
            style="border-bottom: #fff 2px solid; width: 100%; height: 70%"
          ></div>
          <h6>今日销售额：</h6>
        </div>
        <div class="item" style="background: #136aed">
          <span>总访问量</span>
          <div
            style="border-bottom: #fff 2px solid; width: 100%; height: 70%"
          ></div>
          <h6>今日访问量：</h6>
        </div>
        <div class="item" style="background: #ac07a4">
          <span>总收藏量</span>
          <div
            style="border-bottom: #fff 2px solid; width: 100%; height: 70%"
          ></div>
          <h6>今日收藏量：</h6>
        </div>
        <div class="item" style="background: #0582a4">
          <span>总支付量</span>
          <div
            style="border-bottom: #fff 2px solid; width: 100%; height: 70%"
          ></div>
          <h6>今日支付量：</h6>
        </div>
      </header>
    </div>
    <div class="centerPart">
      <div class="partOne"><h5 style="margin:5px 0 0 5px">月销售额</h5></div>
      <div class="partTwo"><h5 style="margin:5px 0 0 5px">产品销售比例</h5></div>
    </div>
    <div class="centerPartTwo">
      <div class="orderTable">111</div>
      <div class="orderTable">222</div>
      <div class="orderTable">333</div>
    </div>
  </div>
</template>

<script>
export default {};
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
  .centerPart{
    margin-top: 20px;
    display: flex;
    width: 100%;
    justify-content: center;
   align-items: center;
.partOne{
  margin: 0 20px 0  20px;
  height: 300px;
flex: 2;
background: #fff;
}
.partTwo{
  height: 300px;
  margin: 0 20px 0 0;
  flex: 1;
  background: #fff;
}
  }
  .centerPartTwo{
    margin-top:20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    .orderTable{
      height: 100px;
      background: #fff;
      margin: 0 20px 0 20px;
      flex: 1;
    }
  }
}
</style>