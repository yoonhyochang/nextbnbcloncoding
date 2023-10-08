# 회원가입과 로그인 4(회원가입 api)
1. 공통 버튼 컴포넌튼
1.1 Button.tsx 파일 수정
1.2 SignUpModal.tsx 모달에 추가
------------------------------------------------------------------------------
# 회원가입과 로그인 3(회원가입 버튼)
1. 공통 버튼 컴포넌튼
1.1 Button.tsx 파일 수정
1.2 SignUpModal.tsx 모달에 추가
------------------------------------------------------------------------------
# 회원가입과 로그인 3(회원가입 셀렉터) 생년월일 정보
1. 공통셀렉터 컴포넌트
1.1 Selector.txt 파일 수정
1.2 staticData.ts 파일 월데이터 입력
1.4 SignUpModal.tsx 파일수정(MonthList 전달하여 사용)
1.5 Selector.txt 파일수정 disabled 추가
1.6 staticData.ts 일 년 데이터 추가
1.7 SignUpModal.tsx 파일수정(DayList ,YeerList 전달하여 사용)
------------------------------------------------------------------------------
# 회원가입과 로그인 2(회원가입 인풋)
1. SignUpModal.tsx 파일 회원가입 폼의 스타일링 마무리
2. common폴더에 공통 컴포넌트Input.tsx파일수정(회원가입에 인풋)
3. SignUpModal.tsx 파일에 공통 인풋 컴포넌트를 회원가입 모달에 적용
4. SignUpModal.tsx 파일에 useState를 사용해 인풋 컴포넌트 값 변경 가능 하게 하기
------------------------------------------------------------------------------
# 회원가입과 로그인
1. SignUpModal.tsx 파일 회원가입 폼의 스타일링 마무리

------------------------------------------------------------------------------
# 공통 헤더 만들기(모달 컴포넌트 만들기3)
(ModalPortal에 props로 함수전달 번거롭기에 기존은 훅스변경)
1.모달 훅스 만들기
1.1. useModal.tsx 파일
1.2. Header.tsx 파일 모달 수정
------------------------------------------------------------------------------
# 공통 헤더 만들기(모달 컴포넌트 만들기2)
1.모달 다른방법 리액트 포털 방법(DOM계층 다른 외부에 있는 DOM노드로 자식을 렌더링 하는방법)
1.1 _app.tsx 수정
1.2 ModalPortal.tsx 파일 수정
1.3 SignUpModal.tsx 파일 수정
1.4 Header.tsx 수정 
1.5 Header.tsx 수정 (모달 닫기)
1.6 ModalPortal.tsx (onClick={closePortal} 추가)

------------------------------------------------------------------------------

# 공통 헤더 만들기2(공통헤더 스타일링 하기)
1.헤더 로그인,회원가입 스타일링
1.1 Header.tsx 파일에 스티일링 설정
1.2 index 파일 수정
------------------------------------------------------------------------------
# 공통 헤더 만들기(공통헤더 스타일링 하기)
1.헤더 로그인,회원가입 스타일링
1.1 logo 파일에 svg 저장
1.2 Header.tsx 파일에 스티일링 설정
1.3 Header.tsx 파일에 라우팅 설정

------------------------------------------------------------------------------
# 폰트 적용하기

1. _document.tsx 파일 Notosans와 NotoSansKR 폰트 CDN으로 연결 하여 사용

2. GlobalStyle.tsx 파일에서글로벌 스타일의 폰트패밀리 설정

------------------------------------------------------------------------------

# 글로벌 스타일 설정 

1. palette.ts 넥스트 비앤비 색상 값 지정
2. GlobalStyle.tsx 파일 글로벌 스타일 만들기
2.1 yarn add styled-reset 추가 설치
3. _app.tsx 파일에 글로벌 스타일 적용
------------------------------------------------------------------------------
# 스타일링 설정 2(README)

1. .babelrc 설정

2. svg import 하여 설정
2.1  yarn add babel-plugin-inline-react-svg 설치
//image.d.ts 파일은 TypeScript 프로젝트에서 사용되는 타입 정의 파일
2.2 image.d.ts 파일에 설정

3.index.tsx 파일 스타일 설정
------------------------------------------------------------------------------


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

