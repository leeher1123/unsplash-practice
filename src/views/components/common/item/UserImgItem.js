import React from 'react';
import styled from 'styled-components';

const UserImgItem = ({ user }) => (
  <Container>
    <Thumb>
      <Inner>
        <Left>
          <img src={user.photos[0]?.urls.small} alt="사진" />
        </Left>
        <Mid>
          <img src={user.photos[1]?.urls.small} alt="사진" />
        </Mid>
        <Right>
          <img src={user.photos[2]?.urls.small} alt="사진" />
        </Right>
      </Inner>
    </Thumb>
  </Container>
);

const Container = styled.div`

`;

const Thumb = styled.div`
  position: relative;
  padding-top: 25%;
  margin: 15px 0;
`;

const Inner = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Left = styled.div`
  width: 33.3333%;
  margin-right: 8px;
`;

const Mid = styled.div`
  width: 33.3333%;
`;

const Right = styled.div`
  width: 33.3333%;
  margin-left: 8px;
`;

export default UserImgItem;
