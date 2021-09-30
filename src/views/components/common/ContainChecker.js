import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ContainChecker = ({ children, check }) => {
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (ref.current) {
        const isContain = ref.current.contains(e.target);
        check(isContain);
      }
    };
    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  return (
    <Container ref={ref}>
      {children}
    </Container>
  );
};

const Container = styled.div`

`;

export default ContainChecker;
