const data = {
  getMenuData: () => {
    const menu = [
      {
        index: 0,
        menuName: "로그인",
      },
      {
        index: 1,
        menuName: "API 등록",
      },
      {
        index: 2,
        menuName: "API 정보확인",
      },
      {
        index: 3,
        menuName: "버튼",
      },
    ];
    return menu;
  },
  getMemberData: () => {
    const member = [
      {
        id: "test1",
        password: "test1",
        auth: 2,
      },
      {
        id: "test2",
        password: "test2",
        auth: 2,
      },
    ];
    return member;
  },
};

export default data;
