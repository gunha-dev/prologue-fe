<template>
  <div class="title-container">
    <span class="main-title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.main-title {
  /* font-size: var(--el-font-size-extra-large); */
  font-size: 40px;
}
.title-container {
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
