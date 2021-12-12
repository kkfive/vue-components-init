<template>
  <!-- 安装 -->
  <div class="example">
    <div>当前props:{{ props.msg }}</div>
    <div>{{ test }}</div>

    <br />
    <div>当前：{{ randNum }}</div>

    <button @click="changeNum">点击修改ranNum的值</button>
    <!-- <img src="./image/f778738c-e4f8-4870-b634-56703b4acafe.gif" /> -->
    aaa
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  msg: String
})
const test = ref('这是测试数据')
test.value = '修改test的值'
const randNum = ref(0)
const changeNum = () => {
  randNum.value = Math.random()
  console.log(randNum.value)
}
setTimeout(() => {
  randNum.value = 12
}, 1000)
</script>

<style scoped>
/* 哈哈哈 */

/* @import './head.styl'; */
</style>
