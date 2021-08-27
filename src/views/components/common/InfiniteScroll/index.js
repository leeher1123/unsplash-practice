import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { useIntersection } from '../../../../hooks/useIntersection';

const InfiniteScroll = ({ children, length, next }) => {
  const sentinelRef = useRef(null);
  const isInView = useIntersection(sentinelRef, { rootMargin: '500px' });

  useEffect(() => {
    if (length > 0 && isInView) {
      next();
    }
  }, [isInView]);
  return (
    <>
      {children}
      <Sentinel ref={sentinelRef} />
    </>
  );
};

const Sentinel = styled.div`
  height: 10px;
  pointer-events: none;
`;

export default InfiniteScroll;
