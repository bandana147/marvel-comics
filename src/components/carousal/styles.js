import styled from 'styled-components';

export const FilterSection = styled.div`
  background-color: black;
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 0 60px;
  overflow-x: auto;
  pointer-events: ${props => props.disableCarousel ? 'none' : 'all'};
  opacity: ${props => props.disableCarousel ? '0.5' : '1'}
`;

export const IconWrapper = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  position relative;
`;
export const TickIcon = styled.img`
  position absolute;
  z-index: 1;
  width: 80px;
`;

export const CharactorImage = styled.img`
  height: 140px;
  width: 140px;
  border-radius: 50%;
  margin: 16px 8px;
  border: ${props=> props.selected ? '2px solid skyblue' : '0'};
  opacity: ${props=> props.selected ? '0.7' : '1'};;
`;

export const Arrow = styled.img`
  width: 20px;
  background: #FFF;
`




