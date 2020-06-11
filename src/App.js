/* eslint-disable react/no-array-index-key */
import React, { useContext, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from "styled-components";
import isEmpty from "lodash.isempty";
import Grid from "./library/components/ForumGrid/Grid";
import Row from "./library/components/ForumGrid/Row";

import Navigation from "./components/Navigation";
import PageTitle from "./components/PageTitle";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import { FirebaseContext } from "./assets/FirebaseProvider";
import { StoreContext, ACTION_TYPES } from "./assets/StoreProvider";
import Notification from "./library/components/Notification";
import Loading from "./components/Utilities/Loading";

const AuthPage = React.lazy(() => import("./pages/AuthPage"));
const ProfilePage = React.lazy(() => import("./pages/ProfilePage"));
const EditThemePage = React.lazy(() => import("./pages/EditThemePage"));
const ChooseThemePage = React.lazy(() => import("./pages/ChooseThemePage"));

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 200px;
`;

const App = () => {
  const { userData = {} } = useContext(FirebaseContext);
  const { store = {}, dispatch } = useContext(StoreContext);
  const { notifications = [] } = store;

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
            <Route exact path="/edit-theme">
              <Suspense fallback={<Loading />}>
                <EditThemePage />
              </Suspense>
            </Route>
            <Route exact path="/choose-theme">
              <Suspense fallback={<Loading />}>
                <ChooseThemePage />
              </Suspense>
            </Route>
            <Route exact path="/register">
              <Suspense fallback={<Loading />}>
                {isEmpty(userData) ? <AuthPage /> : <Redirect to="/" />}
              </Suspense>
            </Route>
            <Route exact path="/profile">
              <Suspense fallback={<Loading />}>
                <ProfilePage />
              </Suspense>
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </Grid>
      <Footer />
      {notifications.length > 0 &&
        notifications.map((message, index) => {
          const key =
            typeof message === "string"
              ? message
                  .toLowerCase()
                  .split(" ")
                  .join("-")
              : `popup-${index}`;
          return (
            <Notification
              key={key}
              duration={5000}
              handleRemoveNotification={() => {
                dispatch({ type: ACTION_TYPES.REMOVE_NOTIFICATION, index });
              }}
            >
              <p>{message}</p>
            </Notification>
          );
        })}
    </AppContainer>
  );
};

export default App;
