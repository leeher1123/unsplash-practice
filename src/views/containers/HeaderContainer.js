import React, {useEffect} from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import TopicsLnb from "../components/common/Lnb/TopicsLnb";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/topics/slice";
import {Route} from "react-router-dom";

const HeaderContainer = () => {

  const topicsList = useSelector(state => state.topics.list)
  const dispatch = useDispatch();

  const getTopics = () => {
    dispatch(Action.Creators.getTopics({
      per_page: 20
    }))
  }

  useEffect(() => {
    getTopics();
  }, [])

  return (
    <Container>
      <Header/>
      <Route exact path={['/', '/topics/:slug']}>
        <TopicsLnb data={topicsList}/>
      </Route>
    </Container>
  )
}

const Container = styled.div`

`;

export default HeaderContainer;