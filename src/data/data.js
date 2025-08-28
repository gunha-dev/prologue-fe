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
      {
        index: 4,
        menuName: "글쓰기"
      }
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
  getApisData: () => {
    const apis = [
      {
        service: "service1",
        items: [
          {
            endpoint: "localhost:7777/member",
            id: "1",
            method: "GET",
          },
          {
            endpoint: "localhost:7777/team",
            id: "2",
            method: "GET",
          },
        ],
      },
      {
        service: "service2",
        items: [
          {
            endpoint: "localhost:7778/friend",
            id: "3",
            method: "POST",
          },
          {
            endpoint: "localhost:7778/friend/{name}",
            id: "4",
            method: "GET",
          },
        ],
      },
    ];

    return apis;
  },
};

export default data;
