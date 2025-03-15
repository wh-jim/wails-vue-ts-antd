<template>
  <a-row>
    <a-col :span="24">
      <a-col :span="24">
        <a-typography>{{ data.resultText }}</a-typography>
      </a-col>
      <a-space style="display: flex; align-items: center; justify-content: center; margin: 10px;">
          <a-input v-model="data.name"></a-input>
          <a-button type="primary" @click="greet">Greet</a-button>
        </a-space>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="24">
    <a-space style="display: flex; align-items: center; justify-content: center; margin: 10px;">
      <a-typography style="margin: 0;">Counts: {{ counterStore.count }}</a-typography>
      <a-button type="primary" @click="counterStore.increment">Add</a-button>
      <a-button @click="counterStore.reset">Reset</a-button>
    </a-space>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { Greet } from '../../wailsjs/go/main/App'
import { counterStore } from '../stores'

const data = reactive({
  name: "",
  resultText: "Please enter your name below 👇",
})

function greet() {
  Greet(data.name).then(result => {
    data.resultText = result
  })
}

</script>

<style scoped>

</style>
