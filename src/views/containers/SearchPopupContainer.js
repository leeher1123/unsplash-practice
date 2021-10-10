import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import SearchPopup from '../components/popup/SearchPopup';

const SearchPopupContainer = () => {
  const { openPopup } = useSelector((state) => state.search);

  if (!openPopup) return null;
  return (
    <Container>
      {
        ReactDOM.createPortal(
          <SearchPopup />,
          document.getElementById('popup'),
        )
      }
    </Container>
  );
};

const Container = styled.div`

`;

export default SearchPopupContainer;
