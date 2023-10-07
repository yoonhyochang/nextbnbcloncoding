//AppProps: 컴포넌트에 전달되는 속성(props)을 정의
import { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";

// app 함수형 컴포넌트를 정의합니다.
//이 컴포넌트는 AppProps 타입의 속성 Component와 pageProps를 받아와 사용합니다.
const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      {/* <Component {...pageProps} />: 현재 페이지 컴포넌트(Component)를 렌더링합니다. 
      pageProps 속성은 페이지 컴포넌트에 전달되는 속성으로, 
      페이지 컴포넌트가 필요한 데이터를 받을 수 있도록 합니다. */}
      <Component {...pageProps} />
    </>
  );
};

export default app;
