<template>
  <div class="main">
    <a-space class="logo-container">
      <img class="logo" alt="Wails logo" src="./assets/images/logo-universal.png"/>
      <img class="logo" alt="Vue logo" src="./assets/images/logo-vue.png"/>
      <img class="logo" alt="Antd logo" src="./assets/images/logo-antd.svg"/>
    </a-space>
    <HelloWorld/>
  </div>
</template>

<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<style>

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.logo-container {
  margin: 30px;
}

.logo {
  display: block;
  width: 15vw;
  height: 15vw;
  margin: auto;
  padding: 10% 0 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-origin: content-box;
}
</style>
