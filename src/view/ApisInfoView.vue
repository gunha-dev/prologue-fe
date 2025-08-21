<template>
  <template v-for="api in apis">
    <h2>Service: {{ api.service }}</h2>
    <table>
      <thead>
        <tr>
          <th>HTTP Method</th>
          <th>API Endpoint</th>
          <th>Test 해보기</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in api.items" :key="item.id">
          <td>{{ item.method }}</td>
          <td>{{ item.endpoint }}</td>
          <td>Test버튼</td>
        </tr>
      </tbody>
    </table>
  </template>
</template>

<script>
import data from "../data/data";

export default {
  name: "ApisInfoView",
  data() {
    return {
      apis: data.getApisData(),
    };
  },
};
</script>

<style scoped>
table {
  width: 500px;
  border-collapse: collapse;
  margin-bottom: 20px;
}
th,
td {
  border: 1px solid #eee;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f7f7f7;
}
</style>
