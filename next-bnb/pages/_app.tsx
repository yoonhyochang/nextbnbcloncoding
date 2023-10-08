//AppProps: 컴포넌트에 전달되는 속성(props)을 정의
import { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import Headers from "../components/Header";

// app 함수형 컴포넌트를 정의합니다.
//이 컴포넌트는 AppProps 타입의 속성 Component와 pageProps를 받아와 사용합니다.
const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Headers />
      <Component {...pageProps} />
      <div id="root-modal" />
    </>
  );
};

export default app;
