import React from 'react';
import classnames from 'classnames';
import {
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';

import { getStyles } from './App.styles';
import PlacesForm from '../Components/PlacesForm';
import { GetStarted } from '../Components/GetStarted';

/**
 * This Component acts as our application container. In order to show how to use the PlacesForm component and Table
 * Inside other components. Making it modular
 * @returns App Container
 */
function App() {
  const history = useHistory();
  const classes = getStyles();
  const language = process.env.REACT_APP_ENV_LANG || document.documentElement.lang;
  const onStart = () => {
    history.push('/register');
  };
  const onSubmit = () => {
    history.push('/');
  };
  return (
    <div className={classnames(classes.root)}>
      <div className={classnames(classes.container)}>
        <div className={classnames(classes.formContainer)}>
          <Switch>
            <Route path="/register">
              <PlacesForm
                language={language}
                googleAPIKey={process.env.REACT_APP_ENV_GOOGLE_API_KEY}
                apiUrl={process.env.REACT_APP_ENV_PLACES_FORM_SERVICE_API_URL}
                appId={process.env.REACT_APP_ENV_PLACES_FORM_SERVICE_APP_ID}
                serviceName={process.env.REACT_APP_ENV_SERVICE_NAME}
                onSubmit={onSubmit}
              />
            </Route>
            <Route path="/listing">
              <p>the table</p>
            </Route>
            <Route path="/">
              <GetStarted
                language={language}
                onStart={onStart}
              />
            </Route>
          </Switch>

        </div>
      </div>
    </div>
  );
}

export default App;
