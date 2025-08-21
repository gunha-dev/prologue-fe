<template>
  <el-header class="header-container">
    <el-menu
      mode="horizontal"
      class="main-menu"
      :default-active="$route.path"
      router
    >
      <el-menu-item
        v-for="route in getOrderedMenuRoutes"
        :key="route.path"
        :index="route.path"
      >
        {{ route.meta.navName }}
      </el-menu-item>
      <el-menu-item v-show="isLogin" @click="handleLogout">
        로그아웃
      </el-menu-item>
    </el-menu>
  </el-header>
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
          if (router.meta.menuOrder === -1) {
            return false;
          }
          return router.meta.visibleTo.includes(this.loginMemberAuth);
        })
        .sort((a, b) => a.meta.menuOrder - b.meta.menuOrder);

      return orderedMenuRouters;
    },
  },

  methods: {
    handleLogout() {
      const authStore = useAuthStore();
      authStore.logout();
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.header-container {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 0 20px;
}
.main-menu {
  border-bottom: none;
  flex-grow: 1;
}
</style>
