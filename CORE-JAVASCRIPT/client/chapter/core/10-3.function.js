/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */

let arr = [1, 2, 3, 4];

// function test(...args) {
//   let total = 0;
//   args.forEach(function (item, index) {
//     total += item;
//   });
//   return;
// }

// * sum(1,2,3,4,)
// * rest parameter
const calculateTotal = (...args) => {
  let total = 0;

  // * forEach
  args.forEach((item) => {
    total += item;
  });

  // * reduce
  // args.reduce((acc, item) => acc + item);

  return total;
};

// let resultX = calculateTotal(10000, 8900, 1360, 2100);
// let resultY = calculateTotal(21500, 3200, 9800, 4700);
// let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...args) => {
  let total = 0;
  args.forEach((item) => (total += item));
  return total;
};

// console.log(calcAllMoney(1000, 8900, 1360));

// 화살표 함수와 this
function normalFunction() {
  console.log("일반함수 : ", this);
}

const arrowFunction = () => {
  console.log("화살표함수 : ", this);
};

// normalFunction();
// arrowFunction();

// 객체의 메서드로 함수를 실행할 경우는 일반함수로 실행해야 this가 객체를 찾습니다.
// 메서드 안에서의 함수는 this 를 찾기 위해서는 arrowFunction 이 오히려 좋아

const user = {
  name: "ukss",
  age: 25,
  address: "부산시 남구 수영로",
  grades: [80, 90, 100],
  totalGrades: function () {
    let total = 0;
    // ! 일반 함수 => 나, 화살표 함수 => 내 위의 부모 (즉, 전역인 window 나옴)
    // * 객체 안에서 함수 메서드는 일반 함수가 낫다
    // this.grades.forEach(function (item) {
    //   total += item;
    // });
    // return total;

    function foo() {
      console.log("foo : ", this);
    }
    const bar = () => {
      console.log("bar : ", this);
    };

    foo.call(user); // User
    bar(); // User Object
  },
};

// console.log(user.totalGrades());

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// TODO) pow(numeric: number, powerCount: number): number;
// * 1.
let pow = function (num, sqr = 0) {
  let result = 1;
  for (let i = 0; i < sqr; i++) {
    result *= num;
  }
  return console.log(result > 9007199254740991 ? BigInt(result) : result);
};

pow(2, 52); // 9007199254740992 (2**53, 반복문으로 만들어볼 것)

// * 2
let pow2 = (num, sqr = 0) => {
  let result = 1;
  for (let i = 0; i < sqr; i++) {
    result *= num;
  }
  return console.log(result > 9007199254740991 ? BigInt(result) : result);
};

pow2(3, 54);

// * 범쌤 풀이 1
let pow3 = (numeric, powerCount) => {
  let result = 1;
  for (let i = 0; i < powerCount; i++) {
    result *= numeric;
  }

  return result;
};

pow3(2, 53);

// * 범썜 풀이 2
let pow4 = (numeric, powerCount) => {
  Array(powerCount)
    .fill(null)
    .reduce((acc) => acc * numeric, 1);
};

pow4(2, 53);

// TODO) repeat(text: string, repeatCount: number): string;
// * 1.
let repeat = function (str, time = 1) {
  let result = "";
  for (let i = 0; i < time; i++) {
    result += str;
  }
  return console.log(result);
};

repeat("Hello", 3); // 'hellohellohello'

// * 2
let repeat2 = (str, time = 1) => {
  let result = "";
  for (let i = 0; i < time; i++) {
    result += str;
  }
  return console.log(result);
};

repeat2("Hello", 4);

// * 범쌤 풀이 1
let repeat3 = (text, repeatCount) => {
  let result = "";
  for (let i = 0; i < repeatCount; i++) {
    result += text;
  }
  return result;
};

repeat3("Hello", 3);

// * 범쌤 풀이 2
let repeat4 = (text, repeatCount) =>
  Array(repeatCount)
    .fill(null)
    .reduce((acc) => acc + text, "");
