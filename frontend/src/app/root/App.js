import React from 'react';
import classnames from 'classnames';

import { getStyles } from './App.styles';
import PlacesForm from '../Components/PlacesForm';

/**
 * This Component acts as our application container. In order to show how to use the PlacesForm component and Table
 * Inside other components. Making it modular
 * @returns App Container
 */
function App() {
  const classes = getStyles();

  return (
    <div className={classnames(classes.root)}>
      <div className={classnames(classes.container)}>
        <div className={classnames(classes.formContainer)}>
          <PlacesForm
            language={document.documentElement.lang}
            googleAPIKey={process.env.REACT_APP_ENV_GOOGLE_API_KEY}
            apiUrl={process.env.REACT_APP_ENV_PLACES_FORM_SERVICE_API_URL}
            appId={process.env.REACT_APP_ENV_PLACES_FORM_SERVICE_APP_ID}
            serviceName={process.env.REACT_APP_ENV_SERVICE_NAME}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
