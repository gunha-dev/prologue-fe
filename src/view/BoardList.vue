<template>
  <div class="write-wrapper">
    <BoardTitle :title="pageTitle" />
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <DataTable
        :columns="OASColumns"
        :items="OASItems"
        @row-clicked="goToToastView"
      />
      <Pagination
        :paginationConfig="paginationConfig"
        @page-change="fetchOASItems"
      />
    </div>
  </div>
</template>

<script>
import BoardTitle from "@/components/BoardTitle.vue";
import DataTable from "@/components/DataTable.vue";
import Pagination from "@/components/Pagination.vue";
import axios from "axios";

export default {
  data() {
    return {
      pageTitle: "Open Api Specification",
      OASColumns: [
        { prop: "postId", label: "게시글 번호", width: "100" },
        { prop: "postTitle", label: "게시글 제목", width: "500" },
        { prop: "memberEmail", label: "작성자", width: "150" },
        { prop: "createdAt", label: "작성일", width: "150" },
      ],
      OASItems: [],
      paginationConfig: {
        pageSize: 10,
        pagerCount: 11,
        total: 0,
      },
      isLoading: true,
    };
  },
  created() {
    this.fetchOASItems(0);
  },
  components: {
    BoardTitle,
    DataTable,
    Pagination,
  },
  methods: {
    goToToastView(row) {
      this.$router.push(`/${row.boardName}/${row.id}`);
    },
    async fetchOASItems(pageNumber) {
      this.isLoading = true;
      try {
        const response = await axios.get(`/api/v1/boards/oas`, {
          params: {
            page: pageNumber - 1,
          },
        });

        const resData = response.data;
        
        const parsedData = resData.content.map(item => {
          item.createdAt = item.createdAt.split("T1")[0];
          return item;
        })

        this.OASItems = parsedData;
        this.paginationConfig.total = resData.page.totalElements;

      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.write-wrapper {
  padding: 0 20px;
}
</style>
