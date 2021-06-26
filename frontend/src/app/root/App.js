import React from 'react';
import classnames from 'classnames';

import { getStyles } from './App.styles';
import PlacesForm from '../Components/PlacesForm';

/**
 * This Component acts as our form container. In order to show how to use the PlacesForm component
 * Inside other components. Making it modular
 * @returns App Container
 */
function App() {
  const classes = getStyles();

  return (
    <div className={classnames(classes.root)}>
      <div className={classnames(classes.container)}>
        <PlacesForm
          language={document.documentElement.lang}
          location="aa"
        />
      </div>
    </div>
  );
}

export default App;
