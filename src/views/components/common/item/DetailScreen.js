import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import { IconDownload, IconHeart, IconPlus } from '../../../../icons';

const DetailScreen = ({ item }) => (
  <Container>
    <TopButtons>
      <Button><IconHeart /></Button>
      <Button><IconPlus /></Button>
    </TopButtons>
    <UserInfo>
      <User>
        <img src={item.user.profile_image.small} alt="" />
        <Contents>
          <h3>{item.user.first_name}</h3>
          {
            item.sponsorship ? <p>{item.sponsorship?.tagline}</p> : null
          }
        </Contents>
      </User>
      <Button><IconDownload /></Button>
    </UserInfo>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  opacity: 0;
  transition: .2s;
  padding: 20px;
  &:hover {
    opacity: 1;
    cursor: zoom-in;
    box-shadow: inset  0 -50px 40px rgba(0, 0, 0, 0.22), inset  0 50px 40px rgba(0, 0, 0, 0.22);
  }
`;

const TopButtons = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 300px;
`;

const Button = styled.button`
  height: 32px;
  padding: 0 11px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid transparent;
  svg {
    fill: #767676;
    width: 15px;
    height: 30px;
  }
  &:first-child {
    margin-right: 10px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 32px;
`;

const User = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

const Contents = styled.div`
  margin-left: 10px;
  color: #fff;
  opacity: .8;
  line-height: 1.35;
  h3 {
    font-size: 15px;
  }
  p {
    font-size: 11px;
  }
  &:hover {
    opacity: 1;
  }
`;

export default DetailScreen;
