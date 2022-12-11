import styled from '@emotion/styled';

export const Container = styled.section`
  box-sizing: border-box;
  border-color: white;
  width: 350px;
  margin: 20px auto;
  background-color: white;
  box-shadow: 0 0 15px 0 rgba(158, 154, 154, 0.4);
`;
export const StatTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  text-algin: center;
  margin: 0;
  padding: 20px;
  color: #a4a8a9;
`;
export const StatList = styled.ul`
  list-style: none;
  display: flex;
  text-align: center;
  margin: 0;
  padding: 0;
  color: black;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 5);
  padding: 15px 0;
  &:nth-of-type(1) {
    background-color: #49c7f7;
  }
  &:nth-of-type(2) {
    background-color: #a43cf3;
  }
  &:nth-of-type(3) {
    background-color: #e64c66;
  }
  &:nth-of-type(4) {
    background-color: #20b8c5;
  }
  &:nth-of-type(5) {
    background-color: #f06c38;
  }
`;
export const StatItemLabel = styled.span`
  font-size: 12px;
  margin-bottom: 7px;
`;

export const StatItemPercentage = styled.span`
  font-size: 16px;
`;
