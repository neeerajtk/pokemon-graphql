import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Pokemons } from "./containers/Pokemons";

function App() {
  const client: any = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app",
  });
  return (
    <ApolloProvider client={client}>
      <main>
        <Pokemons />
      </main>
    </ApolloProvider>
  );
}

export default App;
