<template>
  <div>
    <span>markdown의 본문: {{ markdownContent }}</span
    ><br />
    <span>html의 본문: {{ htmlContent }}</span>
  </div>
</template>
<script>
import emitter from "../mitt/emitter";

export default {
  data() {
    return {
      markdownContent: "",
      htmlContent: "",
    };
  },
  mounted() {
    emitter.on("markdownInput", (receivedContent) => {
      this.markdownContent = receivedContent;
    });
    emitter.on("htmlInput", (receivedContent) => {
      this.htmlContent = receivedContent;
    });
  },
};
</script>
