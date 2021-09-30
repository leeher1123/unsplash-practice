import React from 'react';
import styled from 'styled-components';
import qs from 'qs';
import { Link, useLocation, useParams } from 'react-router-dom';

const FilterLink = ({ children, options }) => {
  const { query } = useParams();
  const location = useLocation();
  const qsParams = qs.parse(location.search, { ignoreQueryPrefix: true });
  return (
    <Container to={`/search/photos/${query}?${qs.stringify({
      ...qsParams,
      ...options,
    })}`}
    >
      {children}
    </Container>
  );
};

const Container = styled(Link)`
  display: flex;
`;

export default FilterLink;
