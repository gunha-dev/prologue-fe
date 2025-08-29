<template>
  <div class="editor" id="editor"></div>
</template>
<script>
import Editor from "@toast-ui/editor";
import emitter from "@/mitt/emitter";

export default {
  name: "toastEditor",

  props: {
    height: {
      type: String,
      default: "400px",
    },
    initialMode: {
      type: String,
      default: "markdown",
    },
  },

  data() {
    return {
      editor: null,
    };
  },

  mounted() {
    new Editor({
      el: document.querySelector("#editor"),
      initialEditType: this.initialMode,
      previewStyle: "vertical",
      height: this.height,

      events: {
        load: (editorInstance) => {
          this.editor = editorInstance;
        },
        change: () => {
          if (!this.editor.isWysiwygMode()) {
            const markdownContent = this.editor.getMarkdown();
            emitter.emit("markdownInput", markdownContent);
            return;
          }

          if (this.editor.isWysiwygMode()) {
            const htmlContent = this.editor.getHTML();
            emitter.emit("htmlInput", htmlContent);
            return;
          }
        },
        beforePreviewRender: () => {
          //   alert("beforePreviewRender");
        },
      },
    });
  },

  methods: {
    getEditor() {
        return this.editor;
    },
    insertToolbarItem(indexInfo, item) {
      if (this.editor) {
        this.editor.insertToolbarItem(indexInfo, item);
      }
    },
    destroy() {
      console.log("삭제 완료");
      this.editor.destroy();
    },
  },
};
</script>
