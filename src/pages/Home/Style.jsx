import styled, { keyframes } from "styled-components";

export const Text = styled.p`
  font-size: 20px;
  z-index: 3;
  margin-top: -16px;
  margin-bottom: 40px;
`;
//이름
export const LinkBox = styled.div`
  z-index: 3;
  width: 100%;
  height: 60%;
  padding-left: 180px;
  padding-right: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid black;
  border-radius: 10px 0 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 90%;
  color: rgba(0, 0, 0, 0.5);
  overflow-x: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scroll-snap-align: start;
  scrollLeft: -10;
`;

export const CopyBtn = styled.button`
  z-index: 3;
  background-color: rgb(28, 89, 73);
  width: 26%;
  height: 67%;
  color: white;
  font-size: 110%;
  border: none;
  border: 1px solid black;
  text-align: center;
  border-radius: 0 10px 10px 0;
  font-family: "SUITE";
`;

const zoomAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

export const ClickBox = styled.div`
  z-index: 3;
  background-image: url("/Img/clickPresent.png");
  background-size: 100% 100%;
  width: 32%;
  height: 47%;
  position: relative;
  margin-top: 58px;
  margin-left: 96px;
  padding: 13%;
  animation: ${zoomAnimation} 1s ease-in-out 2;
`;

export const PresentComponent = styled.div`
  z-index: 3;
  width: 20%;
  height: 28%;
  background-image: url("/Img/present.png");
  background-size: 100% 100%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 13%;
`;

export const FlexBox = styled.div`
  z-index: 4;
  width: 80%;
  height: ${(props) => props.height};
  display: flex;
  justify-content: ${(props) => props.flag};
  background-color: ${(props) => props.color};
  margin: -8px;
  margin-bottom: 50px;
`;

export const PresentBox = styled.div`
  z-index: 3;
  width: 100%;
  height: 50%;
  overflow: scroll;
  display: inline-block;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;