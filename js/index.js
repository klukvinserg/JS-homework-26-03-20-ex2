let windows = [
  {
    height: 200,
    wight: 100,
    title: "Figure №1",
    type: "Type 1"
  },
  {
    he: 30,
    wit: 10,
    w: 100,
    th: 130,
    tit: "Figure №2",
    type: "Type 2",
    t: "zvbkjbkjzxbv"
  },
  {
    ht: 25,
    wht: 40,
    wt: 40,
    ti: "Figure №3"
  }
];

for (let i = 0; i < windows.length; i++) {
  let tmp = windows[i];

  getResult();

  function getResult() {
    let arrNumber = [];
    let arrString = [];
    let arrResult = 0;

    for (key in tmp) {
      if (typeof tmp[key] === "number") {
        arrNumber.push(tmp[key]);
      } else {
        arrString.push(tmp[key]);
      }
    }
    for (let index = 0; index < arrString.length; index++) {
      document.write(`String ${index + 1}: ${arrString[index]} <br>`);
    }
    for (let index = 0; index < arrNumber.length; index++) {
      document.write(`Number ${index + 1}: ${arrNumber[index]} <br>`);
    }
    for (let index = 0; index < arrNumber.length; index++) {
      console.log(arrResult);
      arrResult += arrNumber[index];
    }
    document.write(`Amount: ${arrResult}<br>`);
  }
  document.write(`<br>`);
}
