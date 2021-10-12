import React from 'react';
import styled from 'styled-components';

import { IconUserPlus } from '../../../../icons';
import { DefaultButton } from '../Button/Button.Styled';
import UserImgItem from './UserImgItem';

const UserItem = ({ item }) => (
  <Container>
    <User>
      <img src={item.profile_image?.medium} alt="" />
      <Contents>
        <h2>{item.name}</h2>
        <p>
          @
          {item.username}
        </p>
      </Contents>
      <Btn>
        <PlusButton><IconUserPlus /></PlusButton>
      </Btn>
    </User>
    <UserImgItem user={item} />
    <Button>View profile</Button>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 24px;
  transition: .2s;
  &:hover {
    border-color: #767676;
  }
`;

const User = styled.div`
  display: flex;
  img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 15px;
  }
`;

const Contents = styled.div`
  flex: 2;
  padding: 10px 0;
  min-width: 70px;
  h2 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: auto;
    font-size: 18px;
    font-weight: 700;
    color: #111;
  }
  p {
    font-size: 15px;
    font-weight: 400;
    color: #767676;
    line-height: 1.8;
  }
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlusButton = styled(DefaultButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: #d1d1d1;
  border-radius: 4px;
  margin-left: 10px;
  width: 42px;
  height: 32px;
  transition: .2s;
  svg {
    fill: #767676;
    width: 18px;
    height: 18px;
    transition: .1s;
  }
  &:hover {
    border-color: #767676;
    svg {
      fill: #111;
    }
  }
`;

const Button = styled(DefaultButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  height: 32px;
  padding: 0 11px;
  font-size: 14px;
  border-color: #d1d1d1;
  border-radius: 4px;
  transition: .2s;
  &:hover {
    border-color: #767676;
    color: #111;
  }
`;

export default UserItem;
