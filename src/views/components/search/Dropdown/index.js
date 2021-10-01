import React, { useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import { IconChecked } from '../../../../icons';

const Dropdown = ({ isVisible, items, onClickItem }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const onClick = (index) => {
    setCurrentIndex(index);
    onClickItem();
  };
  return (
    <Container className={cn({ isVisible })}>
      {
        items.map((item, index) => (
          <ItemWrapper
            onClick={() => onClick(index)}
            className={cn({ isActive: currentIndex === index })}
          >
            <ActiveIcon>
              <IconChecked />
            </ActiveIcon>
            {item}
          </ItemWrapper>
        ))
      }
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 35px;
  right: 0;
  padding: 8px 0;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 8px 16px rgb(0 0 0 / 16%);
  transform-origin: 80% 20%;
  transform: scale(0);
  transition: transform .2s, opacity .1s;
  opacity: 0;
  &.isVisible {
    transform: scale(1);
    transition: .2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity .1s;
    opacity: 1;
  }
`;

const ItemWrapper = styled.div`
  position: relative;
`;

const ActiveIcon = styled.div`
  position: absolute;
  display: none;
  align-items: center;
  left: 5px;
  top: 0;
  bottom: 0;
  .isActive & {
    display: flex;
  }
  svg {
    width: 16px;
    height: 16px;
    fill: #767676;
  }
`;

export default Dropdown;
