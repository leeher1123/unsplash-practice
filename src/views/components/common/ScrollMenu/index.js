import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import cn from 'classnames';

import { IconArrowLeft, IconArrowRight } from '../../../../icons';
import { DefaultButton } from '../Button/Button.Styled';

const ScrollMenu = ({ children, menu }) => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1);
  const trackRef = useRef(null);
  const onScroll = (e) => {
    setScrollLeft(e.target.scrollLeft);
    const { clientWidth, scrollWidth } = e.target;
    setMaxScroll(scrollWidth - clientWidth);
  };

  const onClickLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollLeft -= 300;
    }
  };

  const onClickRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollLeft += 300;
    }
  };

  const start = scrollLeft === 0;
  const end = scrollLeft === maxScroll;

  return (
    <Container>
      <Fog left className={cn({ isActive: !start })} />
      <ScrollLeft
        className={cn({ isActive: !start })}
        onClick={onClickLeft}
      >
        <IconArrowLeft />
      </ScrollLeft>
      <Track
        onScroll={onScroll}
        ref={trackRef}
      >
        {
          menu.map((item) => children(item))
        }
      </Track>
      <Fog right className={cn({ isActive: !end })} />
      <ScrollRight
        className={cn({ isActive: !end })}
        onClick={onClickRight}
      >
        <IconArrowRight />
      </ScrollRight>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Fog = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(270deg,hsla(0,0%,100%,0) 0,#fff 90%,#fff);
  pointer-events: none;
  z-index: 50;
  opacity: 0;
  transition: .3s;
  &.isActive {
    opacity: 1;
  }
  ${({ left }) => left && css`
    left: 0;
  `}
  ${({ right }) => right && css`
    right: 0;
    background: linear-gradient(90deg,hsla(0,0%,100%,0) 0,#fff 90%,#fff);
  `}
`;

const buttonStyle = css`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 50px;
  z-index: 100;
  opacity: 0;
  transition: .3s;
  svg {
    fill: #767676;
    transition: .3s;
  }
  &:hover {
    svg {
      fill: #111;
    }
  }
  &.isActive {
    opacity: 1;
  }
`;

const ScrollLeft = styled(DefaultButton)`
  ${buttonStyle};
  left: 0;
`;

const ScrollRight = styled(DefaultButton)`
  ${buttonStyle};
  right: 0;
  justify-content: flex-end;
`;

const Track = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default ScrollMenu;
