<template>
  <el-button :class="class" type="primary" :plain="true" :style="buttonWidth">
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: "BlueButton",
  props: {
    class: {
      type: String,
      required: false,
      default: "default-button",
    },
    width: {
      type: String,
      default: "250px",
    },
  },
  computed: {
    buttonWidth() {
      return {
        width: this.width,
      };
    },
  },
};
</script>
