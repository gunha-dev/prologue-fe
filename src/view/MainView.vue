<template>
    <h1>MAIN</h1>
    <span v-if="isLogin">{{ loginMemberId }} 님 환영합니다</span>
    <span v-else>로그인이 필요합니다</span>
</template>

<script>
import { useAuthStore } from '@/store/auth.store';
import { mapState } from 'pinia';

export default {
  name: "MainView",
  computed: {
    ...mapState(useAuthStore, ["isLogin", "loginMemberId"])
  }
};
</script>

<style scoped>

</style>
