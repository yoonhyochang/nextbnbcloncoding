import React from "react";
import styled from "styled-components";
import palette from "../../styles/palette";
//iconExist라는 prop을 받아와서 해당 prop의 값을 기반으로 동적으로 스타일을 설정합니다.
//iconExist라는 prop을 받을 것이며 그 prop은 boolean 형식의 값을 가진다는 것을 정의하고 있습니다.

const Container = styled.div<{ iconExist: boolean }>`
  input {
    position: relative;
    width: 100%;
    height: 46px;
    //iconExist prop이 true일 때: "0 44px 0 11px"로 padding을 설정합니다.
    //iconExist prop이 false일 때: "0 11px"로 padding을 설정합니다.
    padding: ${({ iconExist }) => (iconExist ? "0 44px 0 11px " : "0 11px")};
    border: 1px solid ${palette.gray_eb};
    border-radius: 4px;
    font-size: 16px;
    // 입력 필드에 포커스가 갔을 때 브라우저 기본의 포커스 스타일을 제거합니다.
    outline: none;
    //입력 필드의 placeholder(입력 힌트)에 대한 스타일을 설정합니다.
    & ::placeholder {
      color: ${palette.gray_76};
    }
    & :focus {
      //border-color 속성을 사용하여 입력 필드의 테두리 색상을
      // ${palette.dark_cyan} 값으로 설정합니다. 
      //이렇게 하면 입력 필드에 포커스가 갔을 때 테두리의 색상이 어두운 청록색으로 변경
      border-color: ${palette.dark_cyan} !important;
    }
  }
  .input-icon-wrapper {
    //가장 가까운 부모 요소 중 하나에 대해 위치가 지정됩니다. 
    position: absolute;
    top: 0;
    right: 11px;
    height: 46px;
    display: flex;
    align-items: center;
  }
`;

//React에서 제공하는 InputHTMLAttributes라는 인터페이스를 확장(extends)한다는 의미입니다.
// HTML 속성(예: value, placeholder, onChange 등)을 포함하는 인터페이스입니다.
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  //icon이라는 프로퍼티를 정의합니다.
  //JSX 요소(JSX.Element)를 받을 수 있는데,
  //주로 아이콘 또는 다른 리액트 컴포넌트를 전달하기 위해 사용될 것입니다.
  icon?: JSX.Element;
}

const Input: React.FC<IProps> = ({ icon, ...props }) => {
  return (
    //icon 프로퍼티가 존재하면 true로 설정하고, 그렇지 않으면
    //false로 설정하는 것을 나타냅니다.
    //이 프로퍼티는 스타일링에 활용됩니다.
    <Container iconExist={!!icon}>
      <input {...props} />
      <div className="input-icon-wrapper">{icon}</div>
    </Container>
  );
};

export default Input;
