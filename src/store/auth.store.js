import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLogin: false,
    loginMemberId: null,
    loginMemberNickname: null,
    loginMemberAuth: 1,
  }),

  actions: {
    setLoginStatus(resultDto) {
      this.isLogin = true;
      this.loginMemberId = resultDto.memberId;
      this.loginMemberNickname = resultDto.memberNickname;
      this.loginMemberAuth = resultDto.memberRole === "MEMBER" ? 2 : 1;
    },

    logout() {
      this.isLogin = false;
      this.loginMemberId = null;
      this.loginMemberAuth = 1;
    },
  },
});
