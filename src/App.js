import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Grid from './library/ForumGrid/Grid';
import Row from './library/ForumGrid/Row';

import Navigation from './components/Shared/Navigation';
import PageTitle from './components/Shared/PageTitle';
import SectionTitle from './components/Shared/SectionTitle';
import Footer from './components/Shared/Footer';

import ColorsSection from './components/Pages/ConfigurePage/Colors/ColorsSection';
import TypographySection from './components/Pages/ConfigurePage/Typography/TypographySection';
import SpacingSection from './components/Pages/ConfigurePage/Spacing/SpacingSection/SpacingSection';
import OutputCodeSection from './components/Pages/ThemePage/OutputCodeSection/OutputCodeSection';

function App() {
  return (
    <>
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
            <Route path="/theme-code">
              <OutputCodeSection />
            </Route>
            <Route path="/">
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
              <ColorsSection />
              <SectionTitle
                title="Typography"
                description="A ForumUi Typography system has eight levels of font sizing. Currently we only support the use of the top 100 most popular google fonts."
              />
              <TypographySection />
              <SectionTitle
                title="Spacing"
                description="A ForumUi spacing system has eight levels to space out elements on the page."
              />
              <SpacingSection />
            </Route>
          </Switch>
        </Router>
      </Grid>
      <div id="modal-root" />
      <Footer />
    </>
  );
}

export default App;
