import { createRouter, createWebHistory } from "vue-router";
import routers from "./routers";
import { useAuthStore } from "@/store/auth.store";
import { loginAlertMsg } from "../../utils/alert.util";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routers,
});

router.beforeEach((to, _, next) => {
  const authStore = useAuthStore();
  const curMemberAuth = authStore.loginMemberAuth;
  const visibleTo = to.meta.visibleTo;

  if (visibleTo && !visibleTo.includes(curMemberAuth)) {
    const navigateLogin = () => next("/login");
    loginAlertMsg("권한이 필요합니다", "로그인 페이지로 이동", navigateLogin);
    return;
  }

  next();
});

export default router;
