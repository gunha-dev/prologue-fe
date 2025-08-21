<template>
  <el-menu mode="horizontal">
    <el-menu-item
      v-for="menu in menus"
      :key="menu.index"
      @select="handleSelect"
    >
    {{ menu.menuName }}
  </el-menu-item>
  </el-menu>
</template>

<script>
import data from "./data/data";

export default {
  name: "App",
  data() {
    return {
      menus: data.getMenuData(),
      curMenu: 0,
    };
  },
  methods: {
    handleSelect() {
    },
  },
};
</script>
<style></style>
