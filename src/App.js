import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Grid from './library/ForumGrid/Grid';
import Row from './library/ForumGrid/Row';

import Navigation from './components/common/Navigation';
import PageTitle from './components/common/PageTitle';
import Footer from './components/common/Footer';

import AuthPage from './components/pages/AuthPage';
import ThemePicker from './components/common/ThemePicker';

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
          <ThemePicker />
          <Switch>
            {/* <Route path="/">
              <SectionTitle
                title="Colors"
                description={
                  <span>
                    A ForumUi color palette is loosely based on the guidelines given from{' '}
                    <a
                      href="https://refactoringui.com/previews/building-your-color-palette/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      RefactoringUi
                    </a>
                    . The initial colors have a primary, secondary, and neutral color palette as
                    well as three accent colors for warning, error, or success notifications.
                  </span>
                }
              />
            </Route> */}
            {/* <Route path="/theme-code">{store.themeId ? <OutputCodeSection /> : <Loading />}</Route>
            <Route path="/theme-configuration">
              {store.themeId ? <ConfigurationPage /> : <Loading />}
            </Route> */}
            <Route path="/">
              <AuthPage />
            </Route>
          </Switch>
        </Router>
      </Grid>
      <Footer />
    </AppContainer>
  );
}

export default App;
