import React from 'react';
import styled from 'styled-components';

import { Link, useParams } from 'react-router-dom';

import ScrollMenu from '../common/ScrollMenu';

const RelatedSearchesMenu = ({ menu, initializeView }) => {
  const { query } = useParams();

  return (
    <Container>
      <h1>{query}</h1>
      <ScrollMenu menu={menu}>
        {
          (item) => <MenuItem to={`/search/photos/${item.title}`} onClick={initializeView}>{item.title}</MenuItem>
        }
      </ScrollMenu>
    </Container>
  );
};

const Container = styled.div`
  padding: 60px 12px 72px;
  h1 {
    width: 100%;
    height: 55px;
    margin-bottom: 16px;
    font-size: 46px;
    font-weight: bold;
    color: #111;
    text-transform: capitalize;
  }
`;

const MenuItem = styled(Link)`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 143px;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
  color: #767676;
  padding: 0 8px;
  border: 1px solid #d1d1d1;
  transition: .3s;
  cursor: pointer;
  & + & {
    margin-left: 8px;
  }
  
  &:hover {
    color: #111;
    border-color: #111;
  }
`;

export default RelatedSearchesMenu;
