<template>
  <div class="write-wrapper">
    <BoardTitle :title="pageTitle" />
    <ToastEditor
      ref="toastEditor"
      :height="editorHeight"
      :initial-mode="initialEditType"
    />
    <div class="button-container">
      <BlueButton class="post-btn" width="500px" @click="handlePost">글 쓰기</BlueButton>
      <BlueButton class="menu-btn" @click="handleMenu">메뉴 추가</BlueButton>
    </div>
    <BoardWriteContent />
  </div>
</template>

<script>
import "@toast-ui/editor/dist/toastui-editor.css";
import BoardWriteContent from "@/components/BoardWriteContent.vue";
import ToastEditor from "@/components/ToastEditor.vue";
import BlueButton from "@/components/BlueButton.vue";
import BoardTitle from "@/components/BoardTitle.vue"

export default {
  data() {
    return {
      pageTitle: "글 작성",
      editorHeight: "500px",
      initialEditType: "markdowm",
    };
  },

  components: {
    BoardTitle,
    BoardWriteContent,
    ToastEditor,
    BlueButton,
  },

  methods: {
    addMenu() {
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
      console.log("handlePost 클릭");
    },

    handleMenu(e) {
      console.log(e);
      console.log("handleMenu 클릭");
    }
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
</style>
