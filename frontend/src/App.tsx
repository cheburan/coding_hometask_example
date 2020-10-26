import { Container, CssBaseline } from "@material-ui/core";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Navigation } from "./Navigation";
import { NotesPage } from "./NotesPage";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { NotePage } from "./NotePage";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

export const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <CssBaseline />
        <Navigation />
        <Container maxWidth="lg">
          <Switch>
            <Route path="/notes/:noteId" component={NotePage} />
            <Route path="/notes">
              <NotesPage />
            </Route>
            <Route path="/">
              <Redirect to={"/notes"} />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ApolloProvider>
  );
};
