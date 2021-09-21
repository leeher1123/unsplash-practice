import React from 'react';
import styled from 'styled-components';

const UserImgItem = ({ user }) => {
  if (!user.photos[0]) return null;
  return (
    <Container>
      <Thumb>
        <Inner>
          <Left>
            <ImageBox>
              {
                user.photos[0]
                && <img src={user.photos[0]?.urls.small} alt="사진" />
              }
            </ImageBox>
          </Left>
          <Mid>
            <ImageBox>
              {
                user.photos[1]
                && <img src={user.photos[1]?.urls.small} alt="사진" />
              }
            </ImageBox>
          </Mid>
          <Right>
            <ImageBox>
              {
                user.photos[2]
                && <img src={user.photos[2]?.urls.small} alt="사진" />
              }
            </ImageBox>
          </Right>
        </Inner>
      </Thumb>
    </Container>
  );
};

const Container = styled.div`

`;

const Thumb = styled.div`
  position: relative;
  padding-top: 25%;
  margin-top: 15px;
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

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  background: #ddd;
`;

export default UserImgItem;
