import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/client';
import Router from './Router';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
