// style.jsx
import { Link } from 'react-router-dom';
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none; 
  &:visited {
    color: white;
  }
`;

export const BackImg=styled.div`
    height:100%;
    width:100%;
    position: relative;
    display: flex;
    flex-direction:column;
    align-items:center;
    &::after{
    content: "";
    background-image: url("/Start/시작배경.png");    
    background-size:100% 100%;
    height:100%;
    width:100%;
    // opacity:0.5;
    position:absolute;
    top:0px;
    left:0px;
    right:0px;
    bottom:0px;
    z-index:0;
  }
`

export const LogoImg=styled.img`
width:70%;
height:20%;
z-index:2;
margin-top:85px;
`


export const Title = styled.h1`
  color: #333;
  font-size: 36px;
  margin-top: 
  padding: 10px; /* 텍스트와 텍스트 배경 사이 간격 조절 */
  z-index: 2; /* 다른 요소보다 앞에 표시 */
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column; /* 요소들을 세로로 배치 */
  align-items: center; /* 세로 중앙 정렬 */
  gap: 20px;
  padding: 10px;
  z-index: 5;
  margin-top: 50px;
  width:100%;
  height:100%;
`;

export const ButtonSign = styled.button`
  border-radius: 11px;
  background: #bf3a3b;
  color: white;
  border: none;
  cursor: pointer;
  width: 60%;
  height: 10%;
  flex-shrink: 0;
  font-size:23px;
  font-family: 'SUITE';

`;

export const ButtonLogin = styled.button`
  border-radius: 11px;
  background: #1c5949;
  color: white;
  border: none;
  cursor: pointer;
  width: 60%;
  height: 10%;
  flex-shrink: 0;
  font-family: 'SUITE';
  font-size:23px;

`;
