import React from "react";
import styled from "styled-components";
import {Route, Switch} from 'react-router-dom';

import Main from "./views/pages/Main";
import Header from "./views/components/common/Header";
import {GlobalStyle} from "./style/GlobalStyle";
import Search from "./views/pages/Search";

const App = () => {
  return (
    <Container>
      <GlobalStyle/>
      <Header/>
      <Switch>
        <Route exact path={'/'} component={Main}></Route>
        <Route exact path={'/search'} component={Search}></Route>
      </Switch>
    </Container>
  )
}

const Container = styled.div`

`;

export default App;