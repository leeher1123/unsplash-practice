import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import { Route } from 'react-router-dom';

import Header from '../components/common/Header';
import TopicsLnb from '../components/common/Lnb/TopicsLnb';
import { Action } from '../../redux/topics/slice';

const HeaderContainer = () => {
  const topicsList = useSelector((state) => state.topics.list);
  const dispatch = useDispatch();

  const getTopics = () => {
    dispatch(Action.Creators.getTopics({
      per_page: 20,
    }));
  };

  useEffect(() => {
    getTopics();
  }, []);

  return (
    <Container>
      <Header />
      <Route exact path={['/', '/topics/:slug']}>
        <TopicsLnb data={topicsList} />
      </Route>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export default HeaderContainer;
