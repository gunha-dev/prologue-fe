<template>
  <div class="box">
    <div class="input-box">
      <el-input class="input" v-model="inputId" placeholder="id" />
    </div>
    <div class="input-box">
      <el-input
        class="input"
        v-model="inputPw"
        placeholder="pw"
        type="password"
        show-password
      />
    </div>
    <div class="input-box">
      <el-button class="login-button" @click="login">로그인</el-button>
    </div>
  </div>
</template>

<script>
import { loginAlertMsg } from "../../utils/alert.util";
import { useAuthStore } from "@/store/auth.store";

export default {
  data() {
    return {
      inputId: "",
      inputPw: "",
    };
  },
  methods: {
    login() {
      // boolean으로 반환받아 이후 로직 진행
      const authStore = useAuthStore();
      const isSuccess = authStore.login(this.inputId, this.inputPw);

      if (!isSuccess) {
        loginAlertMsg("로그인에 실패 하였습니다", "로그인 실패");
        return;
      }
      const navigateToApiInfo = () => this.$router.push("/apis/info");
      loginAlertMsg(
        "로그인에 성공 하셨습니다",
        "로그인 성공",
        navigateToApiInfo
      );
    },
  },
};
</script>

<style scoped>
.box {
  margin: 20px;
}

.input-box {
  margin-top: 10px;
}
.input {
  width: 200px;
  height: 40px;
}
.login-button {
  margin-top: 5px;
  width: 200px;
}
</style>
