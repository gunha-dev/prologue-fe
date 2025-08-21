<template>
  <the-header />

  <el-menu mode="horizontal" :default-active="$route.path" router>
    <el-menu-item
      v-for="route in getOrderedMenuRoutes"
      :key="route.path"
      :index="route.path"
    >
      {{ route.meta.navName }}
    </el-menu-item>
  </el-menu>
  <router-view />
</template>

<script>
// import data from "./data/data";
import router from "./router";
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
  },
  data() {
    return {};
  },
  computed: {
    getOrderedMenuRoutes() {
      const routers = router.getRoutes();
      const orderedMenuRouters = routers
        .filter((router) => {
          return router.meta.menuOrder !== -1;
        })
        .sort((a, b) => a.meta.menuOrder - b.meta.menuOrder);
      return orderedMenuRouters;
    },
  },
};
</script>

<style></style>
