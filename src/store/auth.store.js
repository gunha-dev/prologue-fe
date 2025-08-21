import { defineStore } from "pinia";
import data from "../data/data";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLogin: false,
    loginMemberId: null,
    loginMemberAuth: 1,
  }),

  actions: {
    login(inputId, inputPw) {
      // 차후 백엔드 사용
      const memberData = data.getMemberData();
      const findMember = memberData.find((member) => {
        return member.id === inputId && member.password === inputPw;
      });

      if (!findMember) {
        return false;
      }

      this.isLogin = true;
      this.loginMemberId = findMember.id;
      this.loginMemberAuth = findMember.auth;
      return true;
    },
  },
});
