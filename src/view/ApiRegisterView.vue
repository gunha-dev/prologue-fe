<template>
  <el-form :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="Http Method">
      <el-input v-model="form.httpMethod" />
    </el-form-item>
    <el-form-item label="API Endpoint">
      <el-input v-model="form.apiEndpoint" />
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "ApiRegisterView",
  data() {
    return {
      form: {
        httpMethod: "",
        apiEndpoint: "",
      },
    };
  },
};
</script>
