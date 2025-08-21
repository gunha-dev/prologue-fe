<template>
  <el-form :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="Service 선택">
      <el-select
        v-model="form.region"
        placeholder="API를 등록할 서비스를 선택해주세요"
      >
        <el-option
          v-for="api in apis"
          :label="api.service"
          :value="api.service"
          :key="api.service"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="Http Method">
      <el-input v-model="form.httpMethod" />
    </el-form-item>
    <el-form-item label="API Endpoint">
      <el-input v-model="form.apiEndpoint" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">등록 하기</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import data from "../data/data";

export default {
  name: "ApiRegisterView",
  data() {
    return {
      apis: data.getApisData(),
      form: {
        httpMethod: "",
        apiEndpoint: "",
      },
    };
  },
};
</script>
