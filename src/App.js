import React from 'react';
import { Router } from '@reach/router'

import { GlobalStyle } from './App.styles'

import Signup from './components/signup'
import VotingPage from './components/votingPage'


function App() {
  return (
    <>
      <GlobalStyle />

      <Router>
        <Signup path='/' />

        <VotingPage path='/voting-page' />
      </Router>
    </>
  );
}

export default App;
