// style.jsx
import styled from "styled-components";
export const BackGround = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 768px;
  max-height: 1024px;
`;
export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    content: "";
    background-image: url("/Main/어두운홈배경.png");
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: -1;
  }
`;

export const Title = styled.h1`
  margin-left: auto;
  margin-right: auto;
  margin-top: 30%;
  z-index: 4;

  color: #fff;
  font-family: SUITE;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
export const Img = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-top: 30%;
  z-index: 4;

  width: 297px;
  height: 314px;
  flex-shrink: 0;

  transition: transform 2s; // transform 속성에 대한 애니메이션 지속 시간 설정 (예: 1초)
`;
