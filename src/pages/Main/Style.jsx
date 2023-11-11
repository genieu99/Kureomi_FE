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

  transition: transform 1s; // transform 속성에 대한 애니메이션 지속 시간 설정 (예: 1초)
`;

export const OpenBoxImg=styled.div`
width:90%;
height:75%;
z-index:4;
background-image: url("/Main/openBox.png");
background-size: 100% 100%;
display:flex;
flex-direction:column;
align-items:center;
`
export const ImgBoxx=styled.div`
  width:100%;
  height:100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const ImgBox=styled.div`
  width:33%;
  height:50%;
  object-fit: cover;
`


export const TextBox=styled.div`
width:67%;
height:32%;
z-index:4;
position:relative;
top:3%;
left:1%;
font-family: 'SUITE';
overflow:scroll;

`
export const Letter=styled.p`
padding-left:10px;
font-family: 'SUITE';
font-size:18px;
line-height:150%;
`