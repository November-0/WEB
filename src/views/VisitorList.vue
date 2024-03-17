<template>
  <div class="background container">
    <div class="row">
      <div class="col-6">
        <div class="title">桐庐老干部服务中心 · 访客列表</div>
      </div>
      <div class="col-6 back">
        <router-link class="nav-link" :to="{ name: 'home' }">
          <button class="button" type="button">返回</button>
        </router-link>
      </div>
    </div>

    <div class="row">
      <div class="col-3 usercard">

        <div class="headImg"></div>

        <ul class="list">
          <li class="list-username-item itemLabel">姓名</li>
          <li class="list-username descLabel">{{ user.username }}</li>
          <li class="list-identity-item itemLabel">身份</li>
          <li class="list-identity descLabel">{{ user.identity }}</li>
          <li class="list-landscape-item itemLabel">政治面貌</li>
          <li class="list-landscape descLabel">{{ user.landscape }}</li>
          <li class="list-signdate-item itemLabel">签到日期</li>
          <li class="list-signdate descLabel">{{ user.signdate }}</li>
          <li class="list-signtime-item itemLabel">签到时间</li>
          <li class="list-signtime descLabel">{{ user.signtime }}</li>
        </ul>

      </div>

      <div class="col-9 tabledetail">

        <table id="infotable">
          <tr>
            <th>签到时间</th>
            <th>姓名</th>
            <th>联系电话</th>
            <th>来访明细</th>
            <th>评价</th>
          </tr>
          <tr>
            <td>{{ user.signdate }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.telephone }}</td>
            <td>{{ user.visitingdetails }}</td>
            <td>{{ user.evaluate }}</td>
          </tr>
        </table>

        <div class="row">
          <div class="col-6 blankcard">
          </div>
          <div class="col-3">
            <button class="evaluatecard" @click="openEvaluation">服务评价</button>
          </div>
          <div class="col-3">
            <button class="servicecard" @click="openSelection">选择服务</button>
          </div>
        </div>

        <PoPView class="pop" :isOpen="isEvaluationOpen" @update:isOpen="isEvaluationOpen">
          <ServiceEvaluation />
          <button @click="closeEvaluation">关闭</button>
        </PoPView>

        <PoPView class="pop" :isOpen="isSelectionOpen" @update:isOpen="isSelectionOpen = $event">
          <ServiceSelection />
          <button @click="closeSelection">关闭</button>
        </PoPView>

      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { reactive } from 'vue';
import ServiceEvaluation from '@/components/ServiceEvaluation.vue';
import ServiceSelection from '@/components/ServiceSelection.vue';
import PoPView from '@/components/PoPView.vue';

export default {
  name: 'VisitorList',
  components: {
    ServiceEvaluation,
    ServiceSelection,
    PoPView,
  },
  setup() {

    const user = reactive({
      username: "张汗蒸",
      identity: "退休干部",
      landscape: "共产党员",
      signdate: "2021-01-05",
      signtime: "08:53:04",
      telephone: "18989496664",
      visitingdetails: "参观",
      evaluate: "未评价",
    });

    const isEvaluationOpen = ref(false);

    const openEvaluation = () => {
      isEvaluationOpen.value = true;
    };

    const closeEvaluation = () => {
      isEvaluationOpen.value = false;
    };

    const isSelectionOpen = ref(false);

    const openSelection = () => {
      isSelectionOpen.value = true;
    };

    const closeSelection = () => {
      isSelectionOpen.value = false;
    };

    return {
      user,
      isEvaluationOpen, openEvaluation, closeEvaluation,
      isSelectionOpen, openSelection, closeSelection,
    }

  }
}
</script>

<style scoped>
.pop {
  width: 1030px;
  height: 539px;
  background: #E4E4E4;
  box-shadow: 3px 5px 11px 0px rgba(0, 0, 0, 0.5);
  border-radius: 21px;
  margin-left: auto;
  margin-right: auto;
}

.itemLabel {
  color: #918D8DD9;
  font-weight: 400;
  font-size: 40px;
  text-align: left;
}

.descLabel {
  color: #000000D9;
  font-weight: 400;
  font-size: 40px;
  text-align: left;
}

.blankcard {
  background-color: #F5F5F5FF;
}

.evaluatecard {
  background-color: #EFAE8AFF;
  font-weight: 500;
  font-size: 40px;
  color: #FFFFFFD9;
}

.servicecard {
  background-color: #77B3E1FF;
  font-weight: 500;
  font-size: 40px;
  color: #FFFFFFD9;
}

.background {
  width: 1920px;
  height: 1200px;
  background-color: #7DB7DFFF;
}

.headImg {
  background-color: #D8D8D8FF;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid #979797;
}

.title {
  color: #FFFFFFD9;
  font-size: 45px;
  font-weight: bold;
}

.back {
  text-align: right;
}

.button {
  width: 200px;
  height: 84px;
  background-color: #FFFFFFFF;
  border-radius: 21px;
  font-weight: bold;
  font-size: 40px;
  color: #74B2E3FF;
}

.usercard {
  background-color: #F5F5F5FF;
}

.tabledetail {
  background-color: #FFFFFFFF;
}

/*设置表格总体样式*/
#infotable {
  width: 100%;
  border-collapse: collapse;
  /* 为表格设置合并边框模型： */
  text-align: center;
}

/*设置标题单元格样式*/
#infotable th {
  background-color: #D8D8D8FF;
  color: #000000D9;
}

ul li {
  list-style: none;
}
</style>