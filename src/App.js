import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Main from './views/pages/Main';
import { GlobalStyle } from './style/GlobalStyle';
import Search from './views/pages/Search';
import HeaderContainer from './views/containers/HeaderContainer';
import Topics from './views/pages/Topics';

const App = () => (
  <Container>
    <GlobalStyle />
    <HeaderContainer />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/search/:category/:query" component={Search} />
      <Route exact path="/topics/:slug" component={Topics} />
    </Switch>
  </Container>
);

const Container = styled.div`

`;

export default App;
