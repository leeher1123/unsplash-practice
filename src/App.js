import React from "react";
import styled from "styled-components";
import Main from "./views/pages/Main";
import {Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <Container>
      <Switch>
        <Route exact path={'/'} component={Main}></Route>
      </Switch>
    </Container>
  )
}

const Container = styled.div`

`;

export default App;