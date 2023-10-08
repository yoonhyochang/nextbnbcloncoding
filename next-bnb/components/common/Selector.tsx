//특정 부분의 들여쓰기 검사를 비활성화하도록 지시하는 주석
/* eslint-disable indent */
import React from "react";
import styled from "styled-components";
import palette from "../../styles/palette";

const Container = styled.div`
  width: 100%;
  height: 46px;

  select {
    width: 100%;
    height: 100%;
    background-color: white;
    border: 1px solid ${palette.gray_eb};
    font-size: 16px;
    padding: 0 11px;
    border-radius: 4px;
    outline: none;
    //-webkit-appearance: none;: 이 스타일 규칙은 웹 브라우저에
    //기본적으로 적용되는 스타일을 무시하고 해당 요소의 스타일링을 개발자가 직접 지정하도록 합니다
    -webkit-appearance: none;
    //배경에 이미지를 삽입하고, url() 함수를 사용하여 이미지 파일의 경로를 지정합니다
    background-image: url("../static/svg/common/selector/selector_down_arrow.svg");
    background-position: right 11px center;
    background-repeat: no-repeat;
    &:focus {
      border-color: ${palette.dark_cyan};
    }
  }
`;

//기존 Select확장하여 옵션관 값을 props를 받도록 함
interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[];
  disabledOptions?: string[];
  value?: string;
}
//옵션 값에 (값이 없을경우)에러가 나지 않게 기본 값에 options = [] 줌
const Selector: React.FC<IProps> = ({
  options = [],
  disabledOptions = [],
  ...props
}) => {
  return (
    // <Container>
    //   <select {...props}>
    //     {options.map((option, index) => (
    //       <option key={index} value={option}>
    //         {option}
    //       </option>
    //     ))}
    //   </select>
    // </Container>

    <Container>
      <select {...props}>
        {disabledOptions.map((option, index) => (
          <option key={index} value={option} disabled>
            {option}
          </option>
        ))}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Selector;
