import React from "react";
import styled from "styled-components";
import ScrollMenu from "../common/ScrollMenu";
import {Link} from "react-router-dom";

const RelatedSearchesMenu = ({menu}) => {

  const renderMenuItem = (item) => <MenuItem to={`/search/photos/${item.title}`}>{item.title}</MenuItem>

    return (
        <Container>
          <ScrollMenu menu={menu}
                      renderItem={renderMenuItem}/>
        </Container>
    )
}

const Container = styled.div`

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