import { StrictMode } from 'react';

// React v17 <- Internet Explorer 지원해야 할 경우 사용
// React v18 <- 우리는 이걸로 사용
import { createRoot } from 'react-dom/client';

// Webpack 모듈 번들러
// 스크립트 확장자 생략(.js, .jsx, .ts, .tsx, .json, .wasm)

// Block__Element--Modifier

import './styles/global.css';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
