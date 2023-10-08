import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import AirbnbLogoIcon from "../public/static/svg/logo/logo.svg";
import AirbnbLogoTextIcon from "../public/static/svg/logo/logo_text.svg";
import palette from "../styles/palette";

const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  z-index: 10;
  .header-logo-wrapper {
    display: flex;
    align-items: center;
    .header-logo {
      margin-right: 6px;
    }
  }
  // 헤더 로그인 회원가입
  .header-auth-buttons {
    .header-sign-up-button {
      height: 42px;
      margin-right: 8px;
      padding: 0 16px;
      border: 0;
      // 모서리를 둥글게 만드는 역할을 합니다
      border-radius: 21px;
      background-color: white;
      cursor: pointer;
      outline: none;
      font-weight: 600;
      &:hover {
        background-color: ${palette.gray_f7};
      }
    }
    .header-login-button {
      height: 42px;
      padding: 0 16px;
      border: 0;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
      border-radius: 21px;
      background-color: white;
      cursor: pointer;
      outline: none;
      font-weight: 600;
      &:hover {
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
      }
    }
  }
  .modal-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    //요소들이 가로 방향으로 가운데에 위치하도록 만듭니다.
    justify-content: center;
    // 플렉스 박스 컨테이너 내부의 자식 요소들을 수직으로 가운데 정렬할 때 사용됩니다.
    align-items: center;
    //가장자리(top)를 0으로 설정
    top: 0;
    left: 0;
    .modal-background {
      // 요소는 다른 요소의 영향을 받지 않고 화면에 고정됩니다.
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.75);
    }
    .modal-contents {
      width: 400px;
      height: 400px;
      background-color: white;
      z-index: 11;
    }
  }
`;

const Header: React.FC = () => {
  //* 모달을 열고 닫을 boolean값
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <Container>
      <Link href="/" passHref legacyBehavior>
        <a className="header-logo-wrapper">
          <AirbnbLogoIcon className="header-logo" />
          <AirbnbLogoTextIcon />
        </a>
      </Link>
      <div className="header-auth-buttons">
        <button
          type="button"
          className="header-sign-up-button"
          onClick={() => setModalOpened(true)}
        >
          회원가입
        </button>
        <button type="button" className="header-login-button">
          로그인
        </button>
      </div>
      {modalOpened && (
        <div className="modal-wrapper">
          <div
            className="modal-background"
            //모달 배경을 클릭하면 모달을 닫는 동작만 필요하므로, 다른 의미나 역할을 갖지 않도록 role="presentation"이 지정
            role="presentation"
            onClick={() => setModalOpened(false)}
          />
          <div className="modal-contents" />
        </div>
      )}
    </Container>
  );
};

export default Header;
