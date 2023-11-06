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
    background-image: url("/Start/시작배경.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute; /* 절대 위치로 설정 */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* 다른 요소보다 뒤에 표시 */
  }
`;

export const Title = styled.h1`
  color: #333;
  font-size: 36px;
  margin-top: -100%;
  padding: 10px; /* 텍스트와 텍스트 배경 사이 간격 조절 */
  z-index: 1; /* 다른 요소보다 앞에 표시 */
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column; /* 요소들을 세로로 배치 */
  align-items: center; /* 세로 중앙 정렬 */
  gap: 20px;
  padding: 10px;
  z-index: 1;
  margin-top: -10%;
`;

export const ButtonSign = styled.button`
  border-radius: 11px;
  background: #bf3a3b;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 201px;
  height: 59px;
  flex-shrink: 0;
`;

export const ButtonLogin = styled.button`
  border-radius: 11px;
  background: #1c5949;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 201px;
  height: 59px;
  flex-shrink: 0;
`;
