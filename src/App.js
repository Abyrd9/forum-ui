import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Grid from './library/ForumGrid/Grid';
import Row from './library/ForumGrid/Row';

import Navigation from './components/Shared/Navigation';
import PageTitle from './components/Shared/PageTitle';
import Footer from './components/Shared/Footer';

import OutputCodeSection from './components/Pages/ThemePage/OutputCodeSection/OutputCodeSection';
import AuthSection from './components/Pages/AuthPage/AuthSection/AuthSection';
import { StoreContext } from './assets/StoreProvider';
// import useDebounce from './hooks/useDebounce';
// import { FirebaseContext } from './assets/FirebaseProvider';
import Loading from './components/Utilities/Loading';
// import useDeepCompareEffect from './hooks/useDeepCompareEffect';
import ConfigurationPage from './components/Pages/ConfigurePage';

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 200px;
`;

function App() {
  const { store } = useContext(StoreContext);
  // const { user, database } = useContext(FirebaseContext);

  // useDebounce(() => {
  //   if (user && database && store && store.themeId) {
  //     const ref = database
  //       .collection('users')
  //       .doc(user.uid)
  //       .collection('themes');
  //     const colors = Object.entries(store.colors).reduce((acc, [key, value]) => {
  //       if (key !== 'creator') {
  //         acc[key] = value;
  //       }
  //       return acc;
  //     }, {});
  //     const payload = Object.entries(store).reduce((acc, [key, value]) => {
  //       if (key === 'colors') {
  //         acc[key] = colors;
  //       } else {
  //         acc[key] = value;
  //       }
  //       return acc;
  //     }, {});
  //     ref
  //       .doc(store.themeId)
  //       .set(payload)
  //       .then(() => {
  //         console.log('Data succesfully saved.');
  //       });
  //   }
  // }, 1000);


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
            <Route path="/theme-code">{store.themeId ? <OutputCodeSection /> : <Loading />}</Route>
            <Route path="/theme-configuration">
              {store.themeId ? <ConfigurationPage /> : <Loading />}
            </Route>
            <Route path="/">
              <AuthSection />
            </Route>
          </Switch>
        </Router>
      </Grid>
      <Footer />
    </AppContainer>
  );
}

export default App;
