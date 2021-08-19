import React from "react";
import styled from "styled-components";
import {Route, Switch} from 'react-router-dom';

import Main from "./views/pages/Main";
import Header from "./views/components/common/Header";
import {GlobalStyle} from "./style/GlobalStyle";
import Search from "./views/pages/Search";
import HeaderContainer from "./views/containers/HeaderContainer";
import Topics from "./views/pages/Topics";

const App = () => {
  return (
    <Container>
      <GlobalStyle/>
      <HeaderContainer/>
      <Switch>
        <Route exact path={'/'} component={Main}></Route>
        <Route exact path={'/search/:category/:query'} component={Search}></Route>
        <Route exact path={'/topics/:slug'} component={Topics}></Route>
      </Switch>
    </Container>
  )
}

const Container = styled.div`

`;

export default App;