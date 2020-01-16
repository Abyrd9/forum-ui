import React from 'react';

import ForumUiProvider from './assets/ForumUiProvider';
import Grid from './library/ForumGrid/Grid';
import Row from './library/ForumGrid/Row';

import Navigation from './components/Navigation';
import PageTitle from './components/PageTitle';
import SectionTitle from './components/SectionTitle';
import ColorsSection from './components/ConfigureThemePage/Colors/ColorsSection';
import TypographySection from './components/ConfigureThemePage/Typography/TypographySection';
import SpacingSection from './components/ConfigureThemePage/Spacing/SpacingSection/SpacingSection';
import Footer from './components/Footer';
import { initializeFirebase } from './configs/Firebase';
import StoreProvider from './state';

initializeFirebase();

function App() {
  return (
    <ForumUiProvider>
      <StoreProvider>
        <>
          <Grid>
            <Row mdDownFill>
              <Navigation />
            </Row>
            <PageTitle
              title="ForumUi"
              subtitle="A simplified design system generator for React Developers."
            />
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
                  . The initial colors have a primary, secondary, and neutral color palette as well
                  as three accent colors for warning, error, or success notifications.
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
          </Grid>
          <Footer />
        </>
      </StoreProvider>
    </ForumUiProvider>
  );
}

export default App;
