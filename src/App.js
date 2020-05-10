import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Grid from "./library/components/ForumGrid/Grid";
import Row from "./library/components/ForumGrid/Row";

import Navigation from "./components/Navigation";
import PageTitle from "./components/PageTitle";
import Footer from "./components/Footer";

import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import EditThemePage from "./pages/EditThemePage";
import ChooseThemePage from "./pages/ChooseThemePage";
import CopyThemePage from "./pages/CopyThemePage";
import ProfilePage from "./pages/ProfilePage";

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
            <Route path="/copy-theme">
              <CopyThemePage />
            </Route>
            <Route path="/edit-theme">
              <EditThemePage />
            </Route>
            <Route path="/choose-theme">
              <ChooseThemePage />
            </Route>
            <Route path="/authentication">
              <AuthPage />
            </Route>
            <Route path="/profile">
              <ProfilePage />
            </Route>
            <Route path="/home">
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
