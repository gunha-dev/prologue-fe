<template>
  <div id="viewer"></div>
</template>

<script>
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

export default {
  mounted() {
    const content =
      "- ~~밥먹기~~ \n- 잠자기 \n - 숨쉬기 \n- ~~양치질하기~~";

    new Viewer({
      el: document.querySelector("#viewer"),
      initialValue: content,
    });
  },
};
</script>