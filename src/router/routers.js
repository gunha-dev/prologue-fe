import LoginView from "@/view/LoginView.vue";
import ApisInfoView from "@/view/ApisInfoView.vue";
import ApiRegisterView from "@/view/ApiRegisterView.vue";
import MainView from "@/view/MainView.vue";

const routers = [
  {
    path: "/",
    name: "MainView",
    meta: {
      menuOrder: 0,
      navName: "메인",
      visibleTo: [1, 2],
    },
    component: MainView,
  },
  {
    path: "/login",
    name: "LoginView",
    meta: {
      menuOrder: 1,
      navName: "로그인",
      visibleTo: [1],
    },
    component: LoginView,
  },
  {
    path: "/apis/register",
    name: "ApiRegisterView",
    meta: {
      menuOrder: 2,
      navName: "API등록",
      visibleTo: [2],
    },
    component: ApiRegisterView,
  },
  {
    path: "/apis/info",
    name: "ApiInfoView",
    meta: {
      menuOrder: 3,
      navName: "API정보확인",
      visibleTo: [2],
    },
    component: ApisInfoView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Redirect",
    redirect: "/login",
    meta: {
      menuOrder: -1,
      navName: "리다이렉트",
      visibleTo: null,
    },
  },
];

export default routers;
