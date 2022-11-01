import { Container, CssBaseline } from "@material-ui/core";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Navigation } from "./Navigation";
import { NotesPage } from "./NotesPage";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NotePage } from "./NotePage";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

export const App: React.FC = () => {

  return (
    <ApolloProvider client={client}>
      <Router>
        <CssBaseline />
        <Navigation />
        <Container maxWidth="lg">
          <Routes>
            <Route path="/notes/:noteId" element={<NotePage/>} />
            <Route path="/notes" element={<NotesPage/>} />
            <Route path="/" element={<Navigate replace to="/notes"/>} />
          </Routes>
        </Container>
      </Router>
    </ApolloProvider>
  );
};
