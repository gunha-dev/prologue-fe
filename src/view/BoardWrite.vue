<template>
  <div class="write-wrapper">
    <h2>글쓰기</h2>
    <div class="editor" id="editor"></div>
    <div class="">
      <el-button type="primary" :plain="true" id="submit"
        >글 등록하기</el-button
      >
      <el-button
        type="primary"
        :plain="true"
        id="add"
        @click="addMenu"
        style="margin: 30px"
        >메뉴 추가하기
      </el-button>
      <el-button type="primary" :plain="true" id="add" @click="postBoard"
        >글 쓰기
      </el-button>
    </div>
    <BoardWriteContent />
  </div>
</template>

<script>
import "@toast-ui/editor/dist/toastui-editor.css";
import Editor from "@toast-ui/editor";
import emitter from "../mitt/emitter";
import BoardWriteContent from "@/components/BoardWriteContent.vue";

export default {
  components: {
    BoardWriteContent,
  },
  data() {
    return {
      editor: null,
    };
  },

  mounted() {
    new Editor({
      el: document.querySelector("#editor"),
      initialEditType: "markdown",
      previewStyle: "vertical",
      height: "400px",

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
    addMenu() {
      const indexInfo = { groupIndex: 0, itemIndex: 1 };
      const item = {
        name: "id-btn-1",
        tooltip: "나만의 버튼",
        command: "bold",
        text: "추가된버튼",
      };

      this.editor.insertToolbarItem(indexInfo, item);
    },
  },

  beforeUnmount() {
    this.editor.destroy();
  },
};
</script>

<style scoped>
.editor {
  overflow: hidden;
}
.write-wrapper {
  padding: 0 20px;
}
.el-button {
  width: 250px;
}
</style>
