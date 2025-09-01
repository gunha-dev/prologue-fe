<template>
  <div class="pagination-container">
    <el-pagination
      :page-size="paginationConfig.pageSize"
      :pager-count="paginationConfig.pagerCount"
      :total="paginationConfig.total"
      layout="prev, pager, next"
    />
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    paginationConfig: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.pagination-container {
  margin-top: 10px;
}
</style>
