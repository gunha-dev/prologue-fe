<template>
  <div class="write-wrapper">
    <BoardTitle :title="pageTitle" />
    <ToastEditor
      ref="toastEditor"
      :height="editorHeight"
      :initial-mode="initialEditType"
    />
    <div class="button-container">
      <BlueButton class="menu-btn" width="150px" @click="handleMenu"
        >메뉴 추가</BlueButton
      >
      <BlueButton class="post-btn" width="150px" @click="handlePost"
        >글 쓰기</BlueButton
      >
    </div>
    <BoardWriteContent />
  </div>
</template>

<script>
import "@toast-ui/editor/dist/toastui-editor.css";
import BoardWriteContent from "@/components/BoardWriteContent.vue";
import ToastEditor from "@/components/ToastEditor.vue";
import BlueButton from "@/components/BlueButton.vue";
import BoardTitle from "@/components/BoardTitle.vue";

export default {
  data() {
    return {
      pageTitle: "글 작성",
      editorHeight: "500px",
      initialEditType: "wysiwyg",
    };
  },

  components: {
    BoardTitle,
    BoardWriteContent,
    ToastEditor,
    BlueButton,
  },

  methods: {
    handleMenu() {
      const indexInfo = { groupIndex: 0, itemIndex: 1 };
      const item = {
        name: "id-btn-1",
        tooltip: "나만의 버튼",
        command: "bold",
        text: "A",
      };
      this.$refs.toastEditor.insertToolbarItem(indexInfo, item);
    },

    handlePost(e) {
      console.log(e);
      const editor = this.$refs.toastEditor.getEditor();
      console.log(editor.getMarkdown());

      if (!editor.getMarkdown()) {
        alert("내용을 입력해주세요.");
        return;
      }
      console.log("handlePost 클릭");
    },
  },
  beforeUnmount() {
    this.$refs.toastEditor.destroy();
  },
};
</script>

<style scoped>
.write-wrapper {
  padding: 0 20px;
}

.button-container {
  margin-top: 10px;
}
</style>
