import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  .modal-background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
  }
`;
// IProps: 컴포넌트의 props를 설명하는 역할
interface IProps {
  //children: 이 속성은 React.ReactNode 타입으로 정의
  children: React.ReactNode;
  //closePortal: 이 속성은 함수 타입으로 정의
  //모달이나 팝업과 같은 컴포넌트를 닫는 데 사용
  //() => void는 함수가 매개변수를 받지 않고 아무것도 반환하지 않는다는 것을 의미
  closePortal: () => void;
}
//ModalPortal이라는 함수형 컴포넌트를 정의하고 있습니다. 이 컴포넌트는 IProps 인터페이스로 정의된 props를 받아옵니다
//children은 모달 내부에 렌더링될 자식 요소이며, closePortal은 모달을 닫는 역할을 하는 함수
const ModalPortal: React.FC<IProps> = ({ children, closePortal }) => {
  //const ref = useRef<Element | null>();: 이 부분에서는 React의 useRef 훅을 사용하여 ref 객체 ref를 생성
  //이 ref 객체는 나중에 모달을 마운트할 DOM 요소에 연결됩니다.
  const ref = useRef<Element | null>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    //mounted 상태 변수를 true로 변경하여 모달이 마운트되었다고 표시합니다.
    setMounted(true);
    if (document) {
      //document 객체가 존재하는지 확인하고, 모달을 렌더링할 DOM 요소를 선택
      const dom = document.querySelector("#root-modal");
      ref.current = dom;
    }
  }, []);

  if (ref.current && mounted) {
    return createPortal(
      <Container>
        <div
          className="modal-background"
          role="presentation"
          onClick={closePortal}
        />
        {children}
      </Container>,
      ref.current
    );
  }
  return null;
};

export default ModalPortal;
