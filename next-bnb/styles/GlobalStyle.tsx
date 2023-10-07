//styled-reset : 기본 HTML 스타일을 초기화하여 브라우저 간 일관된 스타일을
//유지하는 데 도움을 줍니다.
import reset from "styled-reset";
import { createGlobalStyle, css } from "styled-components";
import palette from "./palette";

const globalStyle = css`
  ${reset};
  * {
    //모든 요소의 box-sizing을 border-box로 설정하여 박스 모델을 관리합니다.
    box-sizing: border-box;
  }
  body {
    font-family: Noto Sans, Noto Sans KR;
    color: ${palette.black};
  }
`;
//createGlobalStyle 함수를 사용하여 전역 스타일을 적용하는 컴포넌트를 생성합니다
const GlobalStyle = createGlobalStyle`
${globalStyle};
`;

export default GlobalStyle;
