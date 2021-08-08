import React from "react";
import styled from "styled-components";
import {Route, Switch} from 'react-router-dom';

import Main from "./views/pages/Main";
import Header from "./views/components/common/Header";

const App = () => {
  return (
    <Container>
      <Header/>
      <Switch>
        <Route exact path={'/'} component={Main}></Route>
      </Switch>
    </Container>
  )
}

const Container = styled.div`

`;

export default App;