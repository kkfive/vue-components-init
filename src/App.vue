<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue'
import XkHead from './components/head/head.vue'
let msg = ref('测试')
setTimeout(() => {
  msg.value += '123'
}, 1000)
</script>

<template>
  <div>
    <xk-head :msg="msg"></xk-head>
    <div>哈哈哈哈</div>
  </div>
</template>

<style >
</style>
