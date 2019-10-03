import React from 'react';

import ForumUiProvider from './assets/ForumUiProvider';
import Grid from './library/ForumGrid/Grid';
import Row from './library/ForumGrid/Row';

import NavBar from './components/NavBar';
import PageTitle from './components/PageTitle';
import BlockTitle from './components/BlockTitle';
import ConfigureColorSection from './components/ConfigureColorSection';

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
        <BlockTitle
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
        <BlockTitle
          title="Typography"
          description="A ForumUi Typography system has eight levels of font sizing."
        />
        <h1 style={{ marginBottom: '50px', maxWidth: '600px' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text ever since the 1500s.
        </h1>
        <h2 style={{ marginBottom: '50px', maxWidth: '600px' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text ever since the 1500s.
        </h2>
        <h3 style={{ marginBottom: '50px', maxWidth: '600px' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text ever since the 1500s.
        </h3>
        <h4 style={{ marginBottom: '50px', maxWidth: '600px' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text ever since the 1500s.
        </h4>
        <h5 style={{ marginBottom: '50px', maxWidth: '600px' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard
          dummy text ever since the 1500s.
        </h5>
        <p style={{ marginBottom: '50px', maxWidth: '600px' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard
          dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since
          the 1500s.
        </p>
      </Grid>
    </ForumUiProvider>
  );
}

export default App;
