import React from 'react';
import styled from 'styled-components';

import { IconArrow, IconHeart, IconPlus } from '../../../icons';
import { DefaultButton } from '../common/Button/Button.Styled';

const PhotoHeader = ({ data }) => {
  const a = 1;
  return (
    <Container>
      <Contents>
        <img src={data.user.profile_image.small} alt="" />
        <Text>
          <h2>{data.user.name}</h2>
          <p>
            @
            {data.user.username}
          </p>
        </Text>
      </Contents>
      <Buttons>
        <Btn><IconHeart /></Btn>
        <Btn><IconPlus /></Btn>
        <Download>
          <span>Download</span>
          <ArrowBtn><IconArrow /></ArrowBtn>
        </Download>
      </Buttons>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 15px 0px;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
  img {
    color: #767676;
    width: 32px;
    height: 32px;
    border: 1px solid rgba(201, 204, 193, 0.22);
    border-radius: 50%;
  }
`;

const Text = styled.div`
  margin-left: 10px;
  h2 {
    font-size: 15px;
    font-weight: 500;
    color: #111;
    margin-bottom: 3px;
  }
  p {
    font-size: 11px;
    font-weight: 400;
    color: #767676;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Btn = styled(DefaultButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d1d1d1;
  width: 39px;
  height: 32px;
  margin: 4px;
  border-radius: 4px;
  & + & {
    margin-right: 8px;
  }
  svg {
    width: 15px;
    height: 15px;
    fill: #767676;
  }
`;

const Download = styled.div`
  display: flex;
  align-items: center;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 89px;
    height: 32px;
    color: #767676;
    border: 1px solid #d1d1d1;
    font-size: 14px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

const ArrowBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 32px;
  border: 1px solid #d1d1d1;
  border-left: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  svg {
    width: 32px;
    height: 24px;
    fill: #767676;
  }
`;

export default PhotoHeader;
