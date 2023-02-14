// 아래 마크업을 JavaScript + DOM API 를 사용해 동적으로 렌더링 한다.
// DOM API : 동적으로 마크업 (React가 하는일)
// - [ ] innerHTML, insertAdjacentHTML 사용하면 안됨
// - [x] document.createElement API

// DOM 스크립트 (바닐라 스크립트)
// DOM API (접근, 탐색, 조작, 이벤트 핸들링)
// querySelector, querySelectorAll
// addEventListener, classList, setAttribute, dataset, ...

const rootElement = document.getElementById('root');

// 아래와 같이 작성하지 말 것
function renderVanillaApp() {
  rootElement.innerHTML = /* html */ `
  <div class="container container--md">
    <h1>웹브라우저 환경에서 React 라이브러리 시작하기</h1>
    <p>React 라이브러리 코드가 웹 브라우저 환경에서 어떻게 해석되고 작동하는 지 살펴봅니다.</p>
    <ul>
      <li>React 및 ReactDOM API 활용</li>
      <li>가상(Virtual) 노드 vs 실제(Actual) DOM 노드</li>
    </ul>
  </div>
  `;
}

// 다음과 같이 작성하기
function render() {
  // <div></div>
  const container = document.createElement('div');
  container.classList.add('container', 'container--md');

  // <h1></h1>
  const containerHeadline = document.createElement('h1');
  containerHeadline.textContent = '웹브라우저 환경에서 React 라이브러리 시작하기';

  // <p></p>
  const containerDescription = document.createElement('p');
  containerDescription.textContent = 'React 라이브러리 코드가 웹 브라우저 환경에서 어떻게 해석되고 작동되는 지 살펴봅니다.';

  // data -> rendering
  const learningSubjects = ['React 및 ReactDOM API 활용', '가상(Virtual) 노드 vs 실제(Actual) DOM 노드'];

  const subjectList = document.createElement('ul');

  // loop (for문, forEach or Map 메서드)
  learningSubjects.forEach((subject) => {
    const listItem = document.createElement('li');
    listItem.textContent = subject;
    subjectList.append(listItem);
  });

  container.append(containerHeadline);
  container.append(containerDescription);
  container.append(subjectList);

  rootElement.append(container);
}

render();
