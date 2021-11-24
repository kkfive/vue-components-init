<template>
  <!-- 安装 -->
  <div class="example">
    {{ msg }}
    <div>{{ myData }}</div>
    <!-- <img src="./image/f778738c-e4f8-4870-b634-56703b4acafe.gif" /> -->
    <div>
      <el-button @click="change">哈哈哈</el-button>
    </div>
  </div>
</template>

<script>
// 注释
console.log(1)
export default {
  name: 'xk-head',
  props: ['msg'],
  data () {
    return {
      myData: 'hhhhh'
    }
  },
  methods: {
    change () {
      this.myData = '西欧i和手机壳'
      console.info('输出了！')
    }
  }
}
</script>

<style scoped lang='styl'>
/* 哈哈哈 */
@import './head.styl';
</style>