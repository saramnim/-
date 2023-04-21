console.clear();

//김분식씨네 메뉴를 객체로 설정함.
const menu = [
  { name: "떡볶이", cookingTime: 1 },
  { name: "튀김", cookingTime: 2 },
  { name: "순대", cookingTime: 3 }
];

// 멘트 지연출력을 위해 딜레이 함수 설정.
function delay(ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 가장 빠르게 준비되는 메뉴를 출력하기 위한 getTime 함수를 설정.
const getTime = async (menu) => {
  const order = [];
  console.log("뭐가 제일 빨리 나와요?");

  //order 배열에 랜덤으로 추출된 메뉴 10개를 푸쉬함.
  for (let i = 1; i <= 10; i++) {
    order.push(menu[Math.floor(Math.random() * menu.length)].name);
  }

  // 랜덤으로 추출된 메뉴가 담긴 order 배열에서 
  // 메뉴별 총조리시간을 알기 위해 filter 메소드를 활용함.
  const dduck_sum =
    order.filter((v) => v === "떡볶이").length * menu[0].cookingTime;
  const sun_sum =
    order.filter((v) => v === "순대").length * menu[1].cookingTime;
  const tui_sum =
    order.filter((v) => v === "튀김").length * menu[2].cookingTime;
  
  //메뉴별 총 조리시간을 나타내는 orderlist 배열을 생성함.
    const orderList = [dduck_sum, sun_sum, tui_sum];
  // 손님에게 가장 빨리 준비되는 메뉴를 알려주기 위해 findIndex 메소드를 이용함
  // findIndex: 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환.
  // 00을 구하기 위한 menu의 인덱스
   const minTime = orderList.findIndex((num) => num === Math.min(...orderList));

   // async , await 사용을 위해 프로미스에서 then의 역할을 하는 
   // try와 catch를 합니다. 
  try {
    await delay(2000);
    console.log(
      `${menu[0].name}이(가) ${dduck_sum}분, ${menu[1].name}이(가) ${sun_sum}분, ${menu[2].name}이(가) ${tui_sum}분이니까`
    );
    await delay(2000);
    console.log(`${menu[minTime].name}이(가) 제일 조금 걸리네~!`);
    await delay(1000);
    console.log(`그럼 ${menu[minTime].name}주세요!`);

////////////////////////////////////////////////////////////////////

//메뉴가 나오고 있음을 콘솔창에 출력.
//자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출하여 반환값이 true 인 첫번째 요소를 반환한다.
    for (let i = 0; i < order.length; i++) {
      const item = menu.find((menuItem) => menuItem.name === order[i]);
      await new Promise((resolve) =>
        setTimeout(() => {
          console.log(`${item.name} 나왔습니다`);
          resolve();
        }, item.cookingTime * 1000)
      );
    }

    await delay(menu[minTime].cookingTime * 1000);
    console.log(`당근씨! ${menu[minTime].name} 받아가세요!`);
  } catch (err) {
    console.error(err);
  }
};

getTime(menu);
