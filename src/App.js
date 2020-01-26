import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

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
import AuthSection from './components/Pages/AuthPage/AuthSection/AuthSection';
import { StoreContext } from './state';
import useDebounce from './hooks/useDebounce';
import { FirebaseContext } from './firebase/FirebaseProvider';
import ACTION_TYPES from './state/actionTypes';
import Loading from './components/Utilities/Loading';
import useDeepCompareEffect from './hooks/useDeepCompareEffect';

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 200px;
`;

function App() {
  const { store, dispatch } = useContext(StoreContext);
  const { user, database } = useContext(FirebaseContext);

  useDeepCompareEffect(() => {
    if (user && database) {
      const ref = database
        .collection('users')
        .doc(user.uid)
        .collection('themes');
      ref.get().then(snapshot => {
        if (snapshot.docs.length > 0) {
          dispatch({
            type: ACTION_TYPES.SET_INITIAL_THEME,
            themeId: snapshot.docs[0].id,
            theme: snapshot.docs[0].data(),
          });
        } else {
          dispatch({ type: ACTION_TYPES.SET_INITIAL_THEME, themeId: user.uid });
        }
      });
    }
  }, [user]);

  useDebounce(() => {
    if (user && database && store && store.themeId) {
      const ref = database
        .collection('users')
        .doc(user.uid)
        .collection('themes');
      const colors = Object.entries(store.colors).reduce((acc, [key, value]) => {
        if (key !== 'creator') {
          acc[key] = value;
        }
        return acc;
      }, {});
      const payload = Object.entries(store).reduce((acc, [key, value]) => {
        if (key === 'colors') {
          acc[key] = colors;
        } else {
          acc[key] = value;
        }
        return acc;
      }, {});
      ref
        .doc(store.themeId)
        .set(payload)
        .then(() => {
          console.log('Data succesfully saved.');
        });
    }
  }, 1000);

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
            <Route path="/theme-code">
              <OutputCodeSection />
            </Route>
            <Route path="/theme-configuration">
              {store.themeId ? (
                <>
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
                </>
              ) : (
                <Loading />
              )}
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
