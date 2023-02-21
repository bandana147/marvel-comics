import styled from 'styled-components';

export const PaginationContainer = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const PaginationItem = styled.li`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 16px;
  line-height: 1.43;
  font-size: 13px;
  min-width: 32px;
  background-color: #FFF;

  &.dots {
    background-color: transparent;
    cursor: default;
    color: #FFF;
    &:hover: {
      background-color: transparent;
      border: none;
      color: #FFF
    }
  }
  &:hover {
    border: 2px solid red;
    cursor: pointer;
    color: red;
  }

  &.selected {
    border: 2px solid red;
    color: red;
  }

  .arrow {
    &::before {
      position: relative;
      /* top: 3pt; Uncomment this to lower the icons as requested in comments*/
      content: '';
      /* By using an em scale, the arrows will size with the font */
      display: inline-block;
      width: 0.4em;
      height: 0.4em;
      border-right: 0.12em solid rgba(0, 0, 0, 0.87);
      border-top: 0.12em solid rgba(0, 0, 0, 0.87);
    }

    &.left {
      transform: rotate(-135deg) translate(-50%);
    }

    &.right {
      transform: rotate(45deg);
    }
  }

  &.disabled {
    pointer-events: none;

    .arrow::before {
      border-right: 0.12em solid rgba(0, 0, 0, 0.43);
      border-top: 0.12em solid rgba(0, 0, 0, 0.43);
    }

    &:hover {
      background-color: transparent;
      cursor: default;
    }
  }
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
  opacity: ${props=> props.selected ? '0.5' : '1'};;
`;

export const Arrow = styled.img`
  width: 20px;
  background: #FFF;
`



