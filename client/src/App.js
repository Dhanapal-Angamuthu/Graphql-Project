import BookList from './components/BookList';

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

import AuthorList from './components/AddBook';

// Apollo client setup
const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000/graphql"}), //https://flyby-router-demo.herokuapp.com/" }),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h1 className='custom-h1-style'>React App example for GraphQL Demo</h1>
        </header>
          <div style={{ marginBottom: 20 }}>
          <BookList />
        </div>
        <div style={{ marginBottom: 20 }}>
          <AuthorList />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;

/*
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        */