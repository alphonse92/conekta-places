import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import App from './App';
import { ConfigurationProvider } from './ConfigurationProvider/provider';
import { ServiceProvider } from './ServiceProvider/provider';
/**
 * This Component acts as our application container. In order to show how to use the PlacesForm component and Table
 * Inside other components. Making it modular
 * @returns App Container
 */
function Root() {
  return (
    <Router>
      <ConfigurationProvider>
        <ServiceProvider>
          <App />
        </ServiceProvider>
      </ConfigurationProvider>
    </Router>
  );
}

export default Root;
