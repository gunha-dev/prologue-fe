import LoginView from "@/view/LoginView.vue";
import ApisInfoView from "@/view/ApisInfoView.vue";
import ApiRegisterView from "@/view/ApiRegisterView.vue";

const routers = [
  {
    path: "/login",
    name: "LoginView",
    meta: {
      menuOrder: 0,
      navName: "로그인",
      requiredAuth: 1,
    },
    component: LoginView,
  },
  {
    path: "/apis/register",
    name: "ApiRegisterView",
    meta: {
      menuOrder: 1,
      navName: "API등록",
      requiredAuth: 2,
    },
    component: ApiRegisterView,
  },
  {
    path: "/apis/info",
    name: "ApiInfoView",
    meta: {
      menuOrder: 2,
      navName: "API정보확인",
      requiredAuth: 2,
    },
    component: ApisInfoView,
  },
  {
    path: "/logout",
    name: "Logout_Redirect",
    redirect: "/login",
    meta: {
      menuOrder: 3,
      navName: "로그아웃",
      requiredAuth: 2,
    },
    component: LoginView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Redirect",
    redirect: "/login",
    meta: {
      menuOrder: -1,
      navName: "리다이렉트",
      requiredAuth: 1,
    },
  },
];

export default routers;
