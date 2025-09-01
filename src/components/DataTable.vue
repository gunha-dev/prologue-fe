<template>
  <div class="table-container">
    <!-- <el-table :data="data" border stripe style="width: 100%">
      <el-table-column prop="id" label="게시글 번호" width="100" />
      <el-table-column prop="boardTitle" label="게시글 제목" width="500" />
      <el-table-column prop="memberNick" label="작성자" width="150" />
      <el-table-column prop="createdDate" label="작성일" width="150" />
    </el-table> -->
    <el-table :data="items" border stripe style="width: 100%">
      <el-table-column
        v-for="column in columns"
        :key="column.prop"
        :prop="column.prop"
        :label="column.label"
        :width="column.width"
      />
    </el-table>
  </div>
</template>

<script>
export default {
  name: "DataTable",
  props: {
    columns: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.table-container {
  margin-top: 50px;
}
</style>
