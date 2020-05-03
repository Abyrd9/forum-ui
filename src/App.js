import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Grid from "./library/components/ForumGrid/Grid";
import Row from "./library/components/ForumGrid/Row";

import Navigation from "./components/common/Navigation";
import PageTitle from "./components/common/PageTitle";
import Footer from "./components/common/Footer";

import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";
import ThemesPage from "./pages/ThemesPage";

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 200px;
`;

function App() {
  return (
    <AppContainer>
      <Grid>
        <Router>
          <Row mdDownFill>
            <Navigation />
          </Row>
          <PageTitle
            title="ForumUi"
            subtitle="A simplified design system generator for React Developers."
          />
          <Switch>
            <Route path="/choose-theme">
              <ThemesPage />
            </Route>
            <Route path="/edit-theme">
              <EditPage />
            </Route>
            <Route path="/authentication">
              <AuthPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </Grid>
      <Footer />
    </AppContainer>
  );
}

export default App;
