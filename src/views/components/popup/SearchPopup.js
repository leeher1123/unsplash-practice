import React from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';

import { IconClose } from '../../../icons';
import { DefaultButton } from '../common/Button/Button.Styled';
import { Action } from '../../../redux/search/slice';

const SearchPopup = () => {
  const dispatch = useDispatch();
  const colors = ['white', 'black', 'yellow', 'orange', 'red', 'purple', 'magenta', 'green', 'teal', 'blue'];

  const onClose = () => {
    dispatch(Action.Creators.closePopup());
  };
  return (
    <Container>
      <CloseBtn onClick={onClose}><IconClose /></CloseBtn>
      <Contents>
        <Content>
          <Title>Sort by</Title>
          <p>Relevance</p>
          <p>Newest</p>
        </Content>
        <Content>
          <Title>Color</Title>
          <p>Any color</p>
          <p>Black and white</p>
          <p>Tones</p>
          <ColorBackground>
            {
              colors.map((item) => <ColorItem className={item} />)
            }
          </ColorBackground>
        </Content>
        <Content>
          <Title>Orientation</Title>
          <p>Any orientaion</p>
          <p>
            <Box className="landscape" />
            Landscape
          </p>
          <p>
            <Box className="portrait" />
            Portrait
          </p>
          <p>
            <Box className="square" />
            Square
          </p>
        </Content>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  background: rgba(0, 0, 0, 0.6);
  padding: 60px;
  font-size: 14px;
  font-weight: 400;
  color: #767676;
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 1002;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    fill: rgba(255, 255, 255, 0.8);
    transition: .2s;
  }

  &:hover {
    svg {
      fill: #fff;
    }
  }
`;

const Contents = styled.div`
  background: #fff;
  box-shadow: 0 8px 16px rgb(0 0 0 / 15%);
  border-radius: 4px;
`;

const Content = styled.div`
  padding: 8px 4px 16px;
  border-bottom: 1px solid rgba(209, 209, 209, 0.9);
  p {
    padding: 8px 16px;
    line-height: 1.6;
    cursor: pointer;
    margin: 0 16px;
    display: flex;
    align-items: center;
  }
`;

const Box = styled.div`
  background: #e4e4e4;
  border: 1px solid rgb(177, 177, 177);
  margin-right: 10px;

  &.landscape {
    width: 18px;
    height: 12px;
  }

  &.portrait {
    width: 12px;
    height: 18px;
  }

  &.square {
    width: 18px;
    height: 18px;
  }
`;

const Title = styled.div`
  padding: 8px 16px;
`;

const Button = styled(DefaultButton)`
  margin: 24px 190px 16px;
  background: #111;
  color: #fff;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

const ColorBackground = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 320px;
  border-radius: 50%;
  background: transparent;
  margin-bottom: 2px;
  transition: .2s;
  padding: 0 20px;
`;

const ColorItem = styled.div`
  width: 32px;
  height: 32px;
  background: #aaa;
  border-radius: 50%;
  margin: 8px;
  &.white {
    background: #fff;
    border: 1px solid rgba(221, 221, 221, 0.5);
  }

  &.black {
    background: #4d4d4d;
  }

  &.yellow {
    background: #fcdc00;
  }

  &.orange {
    background: #fe9200;
  }

  &.red {
    background: #f44e3b;
  }

  &.purple {
    background: #7b64ff;
  }

  &.magenta {
    background: #ab149e;
  }

  &.green {
    background: #a4dd00;
  }

  &.teal {
    background: #68ccca;
  }

  &.blue {
    background: #009ce0;
  }
`;

export default SearchPopup;
