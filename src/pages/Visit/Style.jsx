// style.jsx
import styled from "styled-components";
export const BackGround = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 546px;
  max-height: 1181.6px;
`;

export const ButtonSigns = styled.button`
  position: absolute;
  top: 25px;
  right: 20px;
  background: none;
  border: none;
  color: #000;
  font-family: Inter;
  font-size: 14px;
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

export const ContainerPhoto = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    content: "";
    background-image: url("/Visit/sendphoto.png");
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

export const ContainerContents = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    content: "";
    background-image: url("/Visit/sendcontents.png");
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
  margin-top: 127px;
  z-index: 4;

  color: #000;
  font-family: SUITE;
  font-size: 35px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const Title2 = styled.h1`
  margin-left: auto;
  margin-right: auto;
  margin-top: 30%;
  z-index: 4;
  color: #000;
  font-family: SUITE;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 139.8%; /* 27.96px */
`;
export const Input = styled.input`
  align-items: center;
  width: 80%;
  border: none;
  border-bottom: 2px solid #9e8f70;
  font-size: 20px;
  background: transparent;
  outline: none;
  margin-left: 12%;
  margin-right: 12%;
  margin-top: 250px;
  padding-bottom: 5px;
  color: rgba(0, 0, 0);
  font-family: "SUITE";
  z-index: 4;
`;

export const SendSuccess = styled.h1`
  color: #000;
  font-family: SUITE;
  font-size: 22px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-top: 170px;
`;

export const SubTitle = styled.h1`
  color: #000;
  font-family: SUITE;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: -4px;
`;

export const SubScribe = styled.h1`
  color: #000;
  font-family: SUITE;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 15px;
`;

export const ButtonNext = styled.button`
  position: absolute;
  top: 21%;
  left: 50%;
  transform: translateX(-50%); /* 가운데 정렬을 위해 사용 */
  background: #1c5949;
  width: 60%;
  height: 8%;
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
  margin-top: 40%;
  background: #1C5949;
  width: 50%;
  height: 7%;
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
export const ButtonSend = styled.button`
  margin-top: 10px;
  margin-left: 377px;
  background: #bf3a3b;
  width: 25%;
  height: 7%;
  border: none;
  border-radius: 7px;
  color: #fff;
  font-family: SUITE;
  font-size: 15px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  z-index: 4;
  cursor: pointer;
  font-family: SUITE;

  a {
    text-decoration: none; /* 링크 텍스트의 밑줄 제거 */
    color: inherit; /* 링크의 색상을 상속 받음 */
  }
`;