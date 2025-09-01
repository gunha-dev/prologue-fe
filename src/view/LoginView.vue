<template>
  <div class="box">
    <h2>로그인</h2>
    <form @submit.prevent="login">
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
        <el-button class="login-button" native-type="submit">로그인</el-button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { loginAlertMsg } from "../../utils/alert.util";
import { mapStores } from "pinia";
import { useAuthStore } from "@/store/auth.store";

export default {
  name: "LoginView",
  data() {
    return {
      inputId: "",
      inputPw: "",
    };
  },
  computed: {
    ...mapStores(useAuthStore),
  },
  methods: {
    async login() {
      // Only Dev, Deprecated
      if (this.inputId === "1" && this.inputPw === "1") {
        const feDevData = {
          memberId: "temp",
          memberNickname: "tempNick",
          memberRole: "MEMBER",
        };
        this.$router.push("/");
        this.authStore.setLoginStatus(feDevData);
        return;
      }

      if (!this.inputId || !this.inputPw) {
        loginAlertMsg("아이디 혹은 비밀번호를 입력해주세요", "로그인 실패");
        return;
      }

      try {
        const payload = {
          inputId: this.inputId,
          inputPassword: this.inputPw,
        };

        const resultDto = await axios.post("api/member/login", payload);

        this.authStore.setLoginStatus(resultDto.data);

        const navigateToApiInfo = () => this.$router.push("/");
        loginAlertMsg(
          "로그인에 성공 하셨습니다",
          "로그인 성공",
          navigateToApiInfo
        );
      } catch (error) {
        console.error("로그인 에러:", error);

        if (error.response) {
          const status = error.status;
          const errorMessage =
            error.response.data?.message || "알 수 없는 오류가 발생했습니다.";

          if (status === 401) {
            loginAlertMsg(errorMessage, "로그인 실패");
            return;
          }
          if (status === 404) {
            loginAlertMsg(errorMessage, "로그인 실패");
            return;
          }

          loginAlertMsg(
            "서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
            "오류"
          );
          return;
        }

        loginAlertMsg(
          "서버에 연결할 수 없습니다. 네트워크 상태를 확인해주세요.",
          "오류"
        );
        return;
      }
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
