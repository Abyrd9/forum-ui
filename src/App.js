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
        <PageTitle title="ForumUi" subtitle="A design system cookbook for React Developers." />
        <BlockTitle
          title="Colors"
          description="A ForumUi color palette has a primary, secondary, tertiary, and neutral color value, each spread into eight shade/tints. While also adding a black and white flat color value."
        />
        <ConfigureColorSection />
      </Grid>
    </ForumUiProvider>
  );
}

export default App;
