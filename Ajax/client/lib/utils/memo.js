export const memo = (() => {
  const cache = {};

  return (key, callback) => {
    if (!callback) return cache[key];

    if (cache[key]) {
      console.warn(`${key} 값은 이미 캐시된 값이 존재합니다.`);
      return;
    }

    cache[key] = callback();
    console.log(cache);
  };
})();

// console.log(memo("name", () => "tiger"));

// memo("name");

// memo("cube", () => document.querySelector("#cube"));
// console.log(memo("cube"));
