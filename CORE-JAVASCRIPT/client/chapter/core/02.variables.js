/* --------------------------------------------------------------------- */
/* Variables                                                             */
/* --------------------------------------------------------------------- */

const BIRTHDAY = "25.11.1998"; // 적합
let age = someCode(BIRTHDAY); // 올해와 내년의 나이가 다르듯이 실행할 때마다 결과값이 바뀌므로 X

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
const productPrice = 500;

// - 구매 제품 가격의 총 합
let totalPrice = 35000;

// - 1년 기준 일(day)자 수
const daysOfYear = 365;

// - 구매 결제 여부
let isPaid = true;

// - 구매 결제 내역
let payList = ["아이폰", "맥북", "사줘"];

// - 브랜드 접두사
const brandPrefix = "노스페이스";

// - 오늘의 운세
let todayLucky;

// - 상품 정보
const productInfo = "이거최고";

/* variables ----------------------------------------------------------- */

/* constant variables -------------------------------------------------- */

// Redux

// panding 아무것도 안함
// loading 로딩중, 요청 대기
// fulfilled, resolved 응답 성공
// rejected 실패

const PANDING = "api/panding";
const LOADING = "api/loading";
const FULFILLED = "api/fulfilled";
const REJECTED = "api/rejected";

/* -------------------------------------------------------------------------- */
/* Lexical Environment                                                        */
/* -------------------------------------------------------------------------- */

var nickName = "tiger";

let nickName2 = "tiger"; // Temporal Dead Zone  (임시 사망 지역, 임시 사각 지역)
