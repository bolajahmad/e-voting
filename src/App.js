import React from 'react';
import { Router } from '@reach/router'

import { GlobalStyle } from './App.styles'

import Home from './components/home'
import CreateSponsor from './components/sponsor'


function App() {
  return (
    <>
      <GlobalStyle />

      <Router>
        <Home path='/' />

        <CreateSponsor path='/sponsor' />
      </Router>
    </>
  );
}

export default App;
