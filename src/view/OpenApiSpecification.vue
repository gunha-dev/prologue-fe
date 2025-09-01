<template>
  <div class="write-wrapper">
    <BoardTitle :title="pageTitle" />

    <!-- board는 게시글번호/ 글 제목/ 작성 일/ 작성자/  -->
    <!-- 글 내용에는 Swagger 문서 등 API 문서가 올라온다 -->
    <DataTable :columns="OASColumns" :items="OASItems" />
    <Pagination :paginationConfig="paginationConfig"/>
  </div>
</template>

<script>
import BoardTitle from "@/components/BoardTitle.vue";
import DataTable from "@/components/DataTable.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  data() {
    return {
      pageTitle: "Open Api Specification",
      OASColumns: [
        { prop: "id", label: "게시글 번호", width: "100" },
        { prop: "boardTitle", label: "게시글 제목", width: "500" },
        { prop: "memberNick", label: "작성자", width: "150" },
        { prop: "createdDate", label: "작성일", width: "150" },
      ],
      OASItems: [
        {
          id: 1,
          boardTitle: "인사팀: 사용자 프로필 관리 API v2",
          memberNick: "인사팀_API_담당",
          createdDate: "2025-08-25",
        },
        {
          id: 2,
          boardTitle: "영업팀: 연도별 판매 실적 조회 API",
          memberNick: "영업_데이터_분석팀",
          createdDate: "2025-08-24",
        },
        {
          id: 3,
          boardTitle: "개발팀: 프로젝트 진행 상태 업데이트 API",
          memberNick: "개발1팀_PM",
          createdDate: "2025-08-23",
        },
        {
          id: 4,
          boardTitle: "재무팀: 월별 지출 내역 API",
          memberNick: "재무_데이터_관리자",
          createdDate: "2025-08-22",
        },
        {
          id: 5,
          boardTitle: "고객지원팀: 고객 문의 티켓 생성/관리 API",
          memberNick: "CS_시스템_관리자",
          createdDate: "2025-08-21",
        },
        {
          id: 6,
          boardTitle: "생산팀: 재고 수량 관리 API",
          memberNick: "생산관리팀_장비",
          createdDate: "2025-08-20",
        },
        {
          id: 7,
          boardTitle: "마케팅팀: 캠페인 등록 API",
          memberNick: "마케팅_PM",
          createdDate: "2025-08-19",
        },
        {
          id: 8,
          boardTitle: "인사팀: 신규 입사자 온보딩 상태 조회 API",
          memberNick: "인사팀_리더",
          createdDate: "2025-08-18",
        },
        {
          id: 9,
          boardTitle: "경영지원팀: 사용자 구독 정보 조회 API",
          memberNick: "경영_데이터_분석",
          createdDate: "2025-08-17",
        },
        {
          id: 10,
          boardTitle: "IT팀: 사내 장비 모니터링 API",
          memberNick: "IT_시스템_관리자",
          createdDate: "2025-08-16",
        },
      ],
      paginationConfig: {
        pageSize: 10,
        pagerCount: 11,
        total: 1000,
      },
    };
  },
  components: {
    BoardTitle,
    DataTable,
    Pagination,
  },
};
</script>

<style scoped>
.write-wrapper {
  padding: 0 20px;
}
</style>
