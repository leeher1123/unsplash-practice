import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import ScrollMenu from '../../ScrollMenu';

const TopicsLnb = ({ data }) => (
  <Container>
    <ScrollMenu menu={data}>
      {
        (item) => <MenuItem to={`/topics/${item.slug}`}>{item.title}</MenuItem>
      }
    </ScrollMenu>
  </Container>
);

const Container = styled.div`
  background-color: #fff;
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  height: 56px;
  font-size: 14px;
  font-weight: 500;
  color: #767676;
  padding: 0 12px;
  transition: .3s;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    color: #111;
  }
`;

export default TopicsLnb;
