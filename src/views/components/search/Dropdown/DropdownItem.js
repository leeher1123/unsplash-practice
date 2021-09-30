import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

const DropdownItem = ({ children, to, className }) => {
  const { query } = useParams();
  const colors = ['white', 'black', 'yellow', 'orange', 'red', 'purple', 'magenta', 'green', 'teal', 'blue'];
  return (
    <Container to={to} className={className}>
      {children}
      <Tones>
        Tones
        <ColorItems>
          {
            colors.map((item) => <ColorItem className={item} to={`/search/photos/${query}?color=red`} />)
          }
        </ColorItems>
      </Tones>
    </Container>
  );
};

const Container = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 16px 8px 26px;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 400;
  transition: .2s;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
  &.mb {
    margin-bottom: 94px;
  }
`;

const Tones = styled.div`
  position: absolute;
  z-index: 10;
  top: 45px;
  display: none;
  .mb & {
    display: flex;
    flex-direction: column;
  }
`;

const ColorItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 13px;
  width: 126px;
`;

const ColorItem = styled(Link)`
  z-index: 1;
  width: 16px;
  height: 16px;
  background: #aaa;
  border-radius: 50%;
  margin: 4px;
  &:hover {
    background: #f5f5f5;
  }
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
export default DropdownItem;
