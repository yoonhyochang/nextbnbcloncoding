# 회원가입과 로그인 8(회원가입 api) access_token 생성하기 오류 발생
1. next-bnb\pages\api\auth\signup.ts  res 헤더에 Set-Cookie를 설정
2. yarn add axios 라이브러리 설치
3. next-bnb\.env.local baseURL 설정
4. next-bnb\lib\api\index.ts baseURL 설정
5. next-bnb\lib\api\auth.ts 회원가입 api를 사용하는 함수 만들기
