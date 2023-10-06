import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    //ctx는 DocumentContext 객체의 인자로 전달
    // DocumentContext는 Next.js에서 페이지가 서버 측에서 렌더링될 때 사용되는 컨텍스트 객체
    const originalRenderPage = ctx.renderPage;

    try {
      //ctx.renderPage = () => : ctx.renderPage 함수를 재정의
      ctx.renderPage = () =>
        // 원래 renderPage 함수를 호출하고, enhanceApp 옵션을 설정
        //enhanceApp 옵션은 페이지 렌더링 시 애플리케이션을 향상시키는 데 사용됩니다.
        originalRenderPage({
          //첫 번째 화살표 함수는 App 컴포넌트를 받아서 두 번째 화살표 함수를 반환합니다.
          //이 두 번째 화살표 함수는 props를 받아서 sheet.collectStyles(<App {...props} />)를 반환
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });

      //Document: 전체 페이지의 HTML 구조를 커스터마이징
      // 1. getInitialProps: Document 컴포넌트에는 getInitialProps 메서드가 정의되어 있습니다.
      // 2. 서버 측 렌더링(SSR) 시에 호출되며, 페이지를 렌더링하기 전에 초기 데이터를 가져오는 데 사용됩니다.
      // 3. ctx 매개변수가 전달됩니다.
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        // 1. styles: (...): styles라는 새로운 속성을 추가합니다.
        // 2. 초기 스타일 정보를 변경하거나 추가하기 위해 사용
        styles: (
          <>
            {/* initialProps.styles는 이미 존재하는 초기 스타일 정보를 나타냅니다.
           이 정보는 서버 측에서 생성된 스타일 시트 */}
            {initialProps.styles}
            {/* sheet 객체의 getStyleElement() 메서드를 호출하여 
            서버 측에서 수집한 스타일 정보를 가져옵니다 */}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      // sheet.seal();는 서버 측에서 스타일 정보 수집을 마무리하는 메서드 호출을 나타냅니다
      sheet.seal();
    }
  }
}
