// style.jsx
import styled from "styled-components";
export const BackGround = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 768px;
  max-height: 1024px;
`;
export const ButtonSigns = styled.button`
  position: absolute;
  top: 10px; /* 원하는 위치로 조절 (상단 여백) */
  right: 10px; /* 원하는 위치로 조절 (우측 여백) */
  background: none; /* 배경 없음 */
  border: none; /* 테두리 없음 */
  color: #000;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  font-family: "SUITE";
  z-index: 4;
  cursor: pointer;
  font-family: SUITE;

  a {
    text-decoration: none;
    color: inherit;
  }
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
    background-image: url("/Home/홈배경.png");
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
  margin-top: 15%;
  z-index: 4;

  color: #000;
  font-family: SUITE;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const SubTitle = styled.h1`
  color: #000;
  font-family: SUITE;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: -1%;
`;
export const ButtonNext = styled.button`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%); /* 가운데 정렬을 위해 사용 */
  background: #1c5949;
  width: 60%;
  height: 9%;
  border: none;
  border-radius: 11px;
  color: white;
  font-size: 20px;
  font-family: "SUITE";
  font-weight: 600;
  z-index: 4;
  cursor: pointer;
  font-family: SUITE;

  a {
    text-decoration: none; /* 링크 텍스트의 밑줄 제거 */
    color: inherit; /* 링크의 색상을 상속 받음 */
  }
`;

export const ButtonSelect = styled.button`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%); /* 가운데 정렬을 위해 사용 */
  background: #bf3a3b;
  width: 60%;
  height: 9%;
  border: none;
  border-radius: 11px;
  color: white;
  font-size: 20px;
  font-family: "SUITE";
  font-weight: 600;
  z-index: 4;
  cursor: pointer;
  font-family: SUITE;

  a {
    text-decoration: none; /* 링크 텍스트의 밑줄 제거 */
    color: inherit; /* 링크의 색상을 상속 받음 */
  }
`;
