import React from 'react';
import styled, { css } from 'styled-components';

import { useDispatch } from 'react-redux';

import { useHistory, useLocation } from 'react-router-dom';

import { useMediaMatch } from 'rooks';

import PhotoItem from '../item/PhotoItem';
import { Action } from '../../../../redux/popup/slice';
import { useRecomposePhotos } from '../../../../hooks/useRecomposePhotos';
import { media } from '../../../../lib/styled';
import { breakPoint } from '../../../../constants/breakPoint';

const PhotoList = ({ data = [] }) => {
  const newData = useRecomposePhotos(data);
  const dispatch = useDispatch();
  const history = useHistory();
  const isSm = useMediaMatch(`(max-width: ${breakPoint.SM}px)`);

  const onClickItem = (id) => {
    const photoPageUrl = `/photos/${id}`;
    if (isSm) {
      history.push(photoPageUrl);
    } else {
      dispatch(Action.Creators.openPhotoPopup(id));
      window.history.pushState({}, null, photoPageUrl);
    }
  };

  return (
    <Container>
      <Row>
        {
          newData.map((group) => (
            <Col>
              {
                group.map((item) => (
                  <ItemWrapper>
                    <PhotoItem
                      item={item}
                      onClick={() => onClickItem(item.id)}
                    />
                  </ItemWrapper>
                ))
              }
            </Col>
          ))
        }
      </Row>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 12px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;
  ${media.md(css`
    margin: 0 -8px;
  `)};
`;

const Col = styled.div`
  width: 33.33%;
  padding: 0 12px;
  position: relative;
  ${media.md(css`
    width: 50%;
    padding: 0 8px;
  `)};
  ${media.sm(css`
    width: 100%;
  `)}
`;

const ItemWrapper = styled.div`
  margin-bottom: 24px;
`;

export default PhotoList;
