<template>
  <el-menu mode="horizontal" :default-active="$route.path" router>
    <el-menu-item
      v-for="route in getOrderedMenuRoutes"
      :key="route.path"
      :index="route.path"
    >
      {{ route.meta.navName }}
    </el-menu-item>
  </el-menu>
</template>

<script>
import { useAuthStore } from "@/store/auth.store";
import { mapState, mapActions } from "pinia";
import router from "../router";

export default {
  name: "TheHeader",
  computed: {
    ...mapState(useAuthStore, ["isLogin", "loginMemberAuth"]),

    getOrderedMenuRoutes() {
      const routers = router.getRoutes();
      const orderedMenuRouters = routers
        .filter((router) => {
          return router.meta.menuOrder !== -1 && router.meta.requiredAuth === this.loginMemberAuth;
        })
        .sort((a, b) => a.meta.menuOrder - b.meta.menuOrder);

      return orderedMenuRouters;
    },
  },
};
</script>

<style scoped></style>
