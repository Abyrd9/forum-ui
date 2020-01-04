import React from 'react';

import ForumUiProvider from './assets/ForumUiProvider';
import Grid from './library/ForumGrid/Grid';
import Row from './library/ForumGrid/Row';

import NavBar from './components/NavBar';
import PageTitle from './components/PageTitle';
import SectionTitle from './components/SectionTitle';
import ConfigureColorSection from './components/ConfigureThemePage/Colors/ConfigureColorSection';
import ConfigureTypographySection from './components/ConfigureTypographySection';

function App() {
  return (
    <ForumUiProvider>
      <Grid>
        <Row mdDownFill>
          <NavBar />
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
              . The initial colors have a primary, secondary, and neutral color palette as well as
              three accent colors for warning, error, or success.
            </span>
          }
        />
        <ConfigureColorSection />
        <SectionTitle
          title="Typography"
          description="A ForumUi Typography system has eight levels of font sizing. Currently we only support the use of the top 100 most popular google fonts."
        />
        <ConfigureTypographySection />
      </Grid>
    </ForumUiProvider>
  );
}

export default App;
