// style.jsx
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    background-image: url("/SignUp/로그인배경.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.5;
  }
`;

export const Title = styled.h1`
  color: #000;
  font-family: SUITE;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  z-index: 1; /* 다른 요소보다 앞에 표시 */
  text-align: center; /* 텍스트를 가운데 정렬 */
  margin-top: -100%;
`;
export const SubTitle = styled.h1`
  color: #000;
  font-family: SUITE;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  z-index: 1;
`;
export const ButtonNext = styled.button`
  border-radius: 11px;
  background: #bf3a3b;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 201px;
  height: 59px;
  flex-shrink: 0;
  text-decoration: none; /* 버튼 텍스트에 밑줄 제거 */
`;

export const h1 = styled.h1`
  color: #fff;
  font-family: SUITE;
  font-size: 25px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  /* text-decoration: none; 밑줄 제거를 제거하세요 */
`;
