<template>
  <div class="background container">
    <p class="title">桐庐老干部局客服系统</p>

    <div class="row">
      <div class="col-6">
        <router-link class="nav-link" :to="{ name: 'visitor' }">
          <button class="button" @click="service" type="button">服务窗口</button>
        </router-link>
      </div>
      <div class="col-6">
        <button class="button" @click="login" type="button">人员注册</button>
      </div>
    </div>

    <NowTime class="time" />

  </div>
</template>

<script>
import NowTime from '@/components/NowTime.vue';

export default {
  name: 'HomeView',
  components: {
    NowTime,
  },
  setup() {

    const service = () => {
      console.log("点击服务窗口");
    };

    const login = () => {
      console.log("点击人员注册");
    };

    return {
      service,
      login,
    }
  }
}
</script>

<style scoped>
.title {
  color: #FFFFFFD9;
  font-size: 100px;
  font-style: normal;
  text-align: center;
  padding-top: 100px;
}

.background {
  width: 1920px;
  height: 1200px;
  background-image: url("../assets/background.png");
  background-repeat: no-repeat;
  background-size: contain;
}

.row {
  padding-top: 50px;
  text-align: center;
}

.button {
  width: 325px;
  height: 188px;
  background-color: #D8D8D8;
  border-radius: 8px;
  font-weight: bold;
  font-size: 40px;
}

.time {
  padding-top: 100px;
  text-align: right;
}
</style>