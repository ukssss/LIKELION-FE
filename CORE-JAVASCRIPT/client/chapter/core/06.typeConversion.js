/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */
// * number
const YEAR = 2022;
console.log(typeof String(YEAR), String(YEAR)); // ? string '2022'

// * undefined
console.log(typeof String(undefined), String(undefined)); // ? string 'undefined'

// * null
let days = null;
console.log(typeof String(days), String(days)); // ? string 'null'

// * boolean
let isKind = true;
console.log(typeof String(isKind), String(isKind)); // ? string 'true'

// * 의도하지 않은 String 변환
console.log(typeof (isKind + ""), isKind + ""); // ? string 'true'

/* 데이터 → 숫자 ----------------------------------------------------------- */
// * undeinfed
console.log(typeof Number(undefined), Number(undefined)); // ? number NaN

// * null
let money = null;
console.log(typeof Number(money), Number(money)); // ? number 0

// * boolean
let cutie = true; /* (true = 1, false = 0) */
console.log(typeof (cutie * 1), cutie * 1); // ? number 1
console.log(typeof (cutie / 1), cutie / 1); // ? number 1
console.log(typeof +cutie, +cutie); // ? number 1

// * string
let num = "123";
console.log(typeof (num / 1), num / 1); // ? number 123, 공백을 제거하고 숫자로 생성 !

// * numeric string
let width = "320px";
console.log(typeof (width * 1), width * 1); // ? number NaN, 숫자랑 문자열이 섞여서 NaN 처리
console.log(typeof parseInt(width, 10), parseInt(width, 10)); // ? number 320

/* 데이터 → 불리언 ---------------------------------------------------------- */

// * null, undefined, 0, NaN, '' => false
// 위에 나열한 것 이외의 것들

console.log(Boolean(null)); // ? false
console.log(Boolean(NaN)); // ? false
console.log(Boolean(undefined)); // ? false
console.log(Boolean(0)); // ? false
console.log(Boolean("")); // ? false
console.log(Boolean(" ")); // ? true
console.log(Boolean(!null)); // ? true
console.log(Boolean(!!null)); // ? false
