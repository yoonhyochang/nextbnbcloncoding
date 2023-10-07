# 프로젝트 설정 및 스타일링 설정 (README)

1.넥스트 프로젝트 필요 라이브러리 설치
1.1 yarn add next react react-dom
1.2 yarn add -D typescript @types/react @types/react-dom

2.package.json 셋팅
2.1  동작 추가
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },

3. .gitignore 셋팅
3.1 .eslintrc.js 셋팅

4. 스타일링 설정
4.1styled-components와 그와 관련된 Babel 플러그인인 babel-plugin-styled-components를 Yarn을 통해 설치
4.1.1 yarn add styled-components babel-plugin-styled-components

4.2 styled-components 라이브러리에 대한 TypeScript 타입 정의
// @types/styled-components: 이 부분은 설치할 패키지의 이름
//styled-components 라이브러리에 대한 TypeScript 타입 정의
//styled-components 라이브러리에 대한 TypeScript 타입 정의

yarn add @types/styled-components -D

5._document.tsx로 스타일링을 위한 스타일 컴포넌트 구성하기


 push --set-upstream origin master

