// style.jsx
import styled from "styled-components";

export const Container = styled.div`
  height:100%;
    width:100%;
    position: relative;
    display: flex;
    flex-direction:column;
    align-items:center;

    &::after{
    content: "";
    background-image: url("/SignUp/로그인배경.png");
    
    background-size:100% 100%;
    height:100%;
    width:100%;
    opacity:0.5;
    position:absolute;
    top:0px;
    left:0px;
    right:0px;
    bottom:0px;
    z-index: -1;
}


`;

export const Title = styled.h1`
  color: #000;
  font-family: SUITE;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  z-index: 3; /* 다른 요소보다 앞에 표시 */
  text-align: center; /* 텍스트를 가운데 정렬 */
  // margin-top: -100%;
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
export const Input = styled.input`
  border: none; /* 테두리 제거 */
  border-bottom: 1px solid #9e8f70; /* 밑줄 스타일 설정 */
  padding: 10px; /* 입력 필드 주변 간격 조절 */
  font-size: 16px; /* 글꼴 크기 설정 */
  background: transparent; /* 입력 필드 배경 투명화 */
  outline: none; /* 포커스시 테두리 제거 */
`;
