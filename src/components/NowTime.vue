<template>
  <div class="container">
    <div class="timeLabel"><span v-html="datetime.nowDate"></span></div>
    <div class="timeLabel"><span v-html="datetime.nowTime"></span></div>
  </div>
</template>

<script setup lang="js">
import { reactive } from 'vue';

const datetime = reactive({
  nowDate: '',
  nowTime: '',
})

const getTime = () => {
  var myDate = new Date();
  var myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
  var myMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
  var myToday = myDate.getDate(); //获取当前日(1-31)
  var myHour = myDate.getHours(); //获取当前小时数(0-23)
  var myMinute = myDate.getMinutes(); //获取当前分钟数(0-59)
  var mySecond = myDate.getSeconds(); //获取当前秒数(0-59)

  datetime.nowDate = myYear + '-' + fillZero(myMonth) + '-' + fillZero(myToday);
  datetime.nowTime = fillZero(myHour) + ':' + fillZero(myMinute) + ':' + fillZero(mySecond);
};
const fillZero = (str) => {
  var realNum;
  if (str < 10) {
    realNum = '0' + str;
  } else {
    realNum = str;
  }
  return realNum;
}
// 初始化时间
getTime();
//大屏
setInterval(getTime, 1000);
</script>

<style>
.timeLabel {
  color: #FFFFFFD9;
  font-size: 50px;
  font-style: normal;
  text-align: center;
}
</style>