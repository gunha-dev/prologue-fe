import LoginView from "@/view/LoginView.vue";

const routers = [
  {
    path: "/login",
    name: "LoginView",
    meta: {
      menuOrder: 0,
      navName: "로그인",
      auth: 1,
    },
    component: LoginView,
  },
  {
    path: "/apis/register",
    name: "ApiRegisterView",
    meta: {
      menuOrder: 1,
      navName: "API등록",
      auth: 2,
    },
    component: LoginView,
  },
  {
    path: "/apis/info",
    name: "ApiInfoView",
    meta: {
      menuOrder: 2,
      navName: "API정보확인",
      auth: 2,
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
      auth: 1,
    },
  },
];

export default routers;
