import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: red;
  border-bottom: 1px solid #ededed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 40px;
`;

export const StyledBody = styled.section`
  height: calc(100vh - 82px - 120px);
  background-color: black;
  opacity: 0.8;
`;

export const Logo = styled.img`
  width: 100px;
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 28px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BodyWrapper = styled.div`
  background: #303030;
  height: calc(100vh - 172px - 58px);
  color: #FFF;
  padding: 20px 230px;
  overflow-y: auto;
`;



