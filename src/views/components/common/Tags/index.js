import React from 'react';
import styled from 'styled-components';

const Tags = ({ tags }) => (
  <Container>
    {
      tags.map((item) => <Tag key={item.title}>{item.title}</Tag>)
    }
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  height: 26px;
  font-size: 14px;
  font-weight: 400;
  color: #767676;
  padding: 0 8px;
  background: #eee;
  border-radius: 2px;
  margin-right: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: .3s;
  &:hover {
    color: #111;
    background: #e1e1e1;
  }
`;

export default Tags;
