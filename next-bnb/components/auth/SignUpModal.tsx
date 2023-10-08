import React from "react";
import styled from "styled-components";
import CloseXIcon from "../../public/static/svg/modal/modal_colose_x_icon.svg";
import MailIcon from "../../public/static/svg/auth/mail.svg";
import PersonIcon from "../../public/static/svg/auth/person.svg";
import OpenedEyeIcon from "../../public/static/svg/auth/opened_eye.svg";
import palette from "../../styles/palette";

const Container = styled.form`
  width: 568px;
  padding: 32px;
  background-color: white;
  z-index: 11;
  .mordal-close-x-icon {
    cursor: pointer;
    display: block;
    margin: 0 0 40px auto;
  }
  .input-wrapper {
    // 자신의 원래 위치를 기준으로 상대적인 위치 조정이 가능합니다.
    position: relative;
    margin-bottom: 16px;
    input {
      position: relative;
      width: 100%;
      height: 46px;
      padding: 0 44px 0 11px;
      border-radius: 4px;
      font-size: 16px;
      outline: none;
      //Placeholder 텍스트는 입력 필드에 값을 입력하기 전에 표시되는 텍스트입니다.
      ::placeholder {
        color: ${palette.gray_76};
      }
    }
    svg {
      //요소의 위치를 부모 요소에 상대적이 아니라 가장 가까운 position 속성이 relative, absolute, fixed, 또는 sticky인 부모 요소에 대해 정확하게 지정합니다.
      position: absolute;
      right: 11px;
      top: 16px;
    }
  }
`;

const SignUpModal: React.FC = () => {
  return (
    <Container>
      <CloseXIcon className="mordal-close-x-icon" />
      <div className="input-wrapper">
        <input placeholder="이메일 주소" type="email" name="email" />
        <MailIcon />
      </div>
      <div className="input-wrapper">
        <input placeholder="이름(예:길동)" />
        <PersonIcon />
      </div>
      <div className="input-wrapper">
        <input placeholder="이름(예: 홍)" />
        <PersonIcon />
      </div>
      <div className="input-wrapper">
        <input placeholder="비밀번호 설정하기" type="password" />
        <OpenedEyeIcon />
      </div>
    </Container>
  );
};

export default SignUpModal;
