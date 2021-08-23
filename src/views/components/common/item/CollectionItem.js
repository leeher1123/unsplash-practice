import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Tags from '../Tags';

const CollectionItem = ({ item }) => (
  <Container>
    <Thumb to="/">
      <Screen />
      <Inner>
        <Left>
          <ImageBox><img src={item.preview_photos[0].urls.regular} alt="" /></ImageBox>
        </Left>
        <Right>
          <Top>
            <ImageBox><img src={item.preview_photos[1].urls.regular} alt="" /></ImageBox>
          </Top>
          <Bottom>
            <ImageBox><img src={item.preview_photos[2].urls.regular} alt="" /></ImageBox>
          </Bottom>
        </Right>
      </Inner>
    </Thumb>
    <Desc>
      <h3>{item.title}</h3>
      <p>
        {item.total_photos}
        {' '}
        photos · Curated by
        {' '}
        {item.user.username}
      </p>
    </Desc>
    <Tags tags={item.tags} />
  </Container>
);

const Container = styled.div`
  
`;

const Thumb = styled(Link)`
  display: block;
  padding-top: 70%;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
`;

const Screen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(255, 255, 255, 0.2);
  opacity: 0;
  transition: .3s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const Inner = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Left = styled.div`
  width: 70%;
  padding-right: 2px;
`;

const Right = styled.div`
  width: 30%;
`;

const Top = styled.div`
  height: 50%;
  padding-bottom: 1px;
`;

const Bottom = styled.div`
  height: 50%;
  padding-top: 1px;
`;

const ImageBox = styled.div`
  background: #eee;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  padding: 15px 15px 15px 0;
  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #111;
    text-transform: capitalize;
    margin-bottom: 8px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: #767676;
  }
`;

export default CollectionItem;
