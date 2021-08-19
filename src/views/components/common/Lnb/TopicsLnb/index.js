import React from "react";
import styled from "styled-components";
import ScrollMenu from "../../ScrollMenu";
import {Link} from "react-router-dom";

const TopicsLnb = ({data}) => {

  const renderItem = (item) => <MenuItem to={`/topics/${item.slug}`}>{item.title}</MenuItem>

  return (
    <Container>
      <ScrollMenu menu={data}
                  renderItem={renderItem}/>
    </Container>
  )
}

const Container = styled.div`

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