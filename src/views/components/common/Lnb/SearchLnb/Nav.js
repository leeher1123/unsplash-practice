import React from 'react';
import styled, { css } from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

import { getSearchMenus } from '../../../../../lib/search';
import { media } from '../../../../../lib/styled';

const Nav = ({ totalNum }) => {
  const { query, category } = useParams();

  const searchMenus = getSearchMenus(query, category, { totalNum });
  return (
    <Container>
      {
        searchMenus.map(({
          name, to, isActive, icon, num,
        }) => (
          <NavItem
            key={name}
            to={to}
            className={cn({ isActive })}
          >
            {icon}
            {name}
            {' '}
            <Num>
              {
                num >= 1000 ? parseFloat((num / 1000).toFixed(1)) : num
              }
              {
                num >= 1000 ? <span>k</span> : null
              }
            </Num>
          </NavItem>
        ))
      }
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  height: 56px;
  font-size: 14px;
  font-weight: 500;
  color: #767676;
  cursor: pointer;
  transition: .2s;
  text-transform: capitalize;
  border-bottom: 2px solid transparent;

  svg {
    width: 18px;
    height: 18px;
    fill: #d1d1d1;
    margin-right: 8px;
    transition: .2s;
    ${media.sm(css`
      display: none;
    `)}
  }

  &.isActive,
  &:hover {
    color: #111;

    svg {
      fill: #111;
    }
  }

  &.isActive {
    border-bottom-color: #111;
  }

  & + & {
    margin-left: 32px;
  }
`;

const Num = styled.div`
  display: flex;
  ${media.sm(css`
    display: none;
  `)}
`;

export default Nav;
