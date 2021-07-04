<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
export default {
  props: ['msg'],
  data() {
    return {};
  }
};
</script>

<style>
.example {
  color: red;
}
</style>