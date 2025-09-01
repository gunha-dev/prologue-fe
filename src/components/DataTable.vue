<template>
  <div class="table-container">
    <el-table class="table-item" :data="items" @row-click="onRowClick" border stripe>
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
  emits: ["row-clicked"],
  methods: {
    onRowClick(row) {
      this.$emit("row-clicked", row);
    }
  }
};
</script>

<style scoped>
.table-container {
  margin-top: 50px;
}

.table-item {
  width: 100%;
  cursor: pointer;
}
</style>
