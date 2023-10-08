import React from "react";
import styled from "styled-components";

const Container = styled.form`
  width: 568px;
  //모달 창의 내부 여백을 32px로 설정합니다.
  padding: 32px;
  background-color: white;
  //모달 창의 층위(z-index)를 11로 설정합니다. 이 값은 다른 HTML 요소와 겹칠 때 요소의 위에 표시되는 순서를 결정합니다.
  z-index: 11;
`;

const SignUpModal: React.FC = () => {
  return <Container>Sing Up</Container>;
};

export default SignUpModal;
