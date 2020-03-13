import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { ApolloProvider } from '@apollo/react-hooks'
import { HttpLink } from 'apollo-link-http';
import { BrowserRouter as Router } from "react-router-dom";  

const client = new ApolloClient({
    link: new HttpLink({  
        uri: `http://localhost:1337/graphql`
      }),
    cache: new InMemoryCache()
  });

ReactDOM.render(
    <Router>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    </Router>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
