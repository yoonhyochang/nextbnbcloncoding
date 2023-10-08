import React from "react";
import styled, { css } from "styled-components";
import palette from "../../styles/palette";

const Container = styled.button`
  width: 100%;
  height: 48px;
  padding: 0 15px;
  border: 0;
  border-radius: 4px;
  background-color: ${palette.bittersweet};
  color: white;
  font-size: 18px;
  //글꼴 굵기를 지정하는 데 사용됩니다.
  font-weight: 800;
  outline: none;
  //해당 요소 위에 마우스 커서가 위치했을 때 커서의 형태를 변경하는 역할을 합니다.
  cursor: pointer;
`;

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<IProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Button;
