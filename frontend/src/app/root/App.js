import React from 'react';
import classnames from 'classnames';
import {
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';

import { getStyles } from './App.styles';
import { RegisterPage } from '../Pages/Register';
import { Places } from '../Pages/Places';
import { GetStarted } from '../Pages/GetStarted';
import { Address } from '../Pages/Address';

/**
 * This Component acts as our application container. In order to show how to use the PlacesForm component and Table
 * Inside other components. Making it modular
 * @returns App Container
 */
function App() {
  const history = useHistory();
  const classes = getStyles();
  const onStart = () => history.push('/register');
  const onSubmit = () => history.push('/');

  return (
    <div className={classnames(classes.root)}>
      <div className={classnames(classes.container)}>
        <div className={classnames(classes.formContainer)}>
          <Switch>
            <Route path="/register">
              <RegisterPage onSubmit={onSubmit} />
            </Route>
            <Route path="/list">
              <Places />
            </Route>
            <Route path="/address/:id">
              <Address />
            </Route>
            <Route path="/">
              <GetStarted onStart={onStart} />
            </Route>
          </Switch>

        </div>
      </div>
    </div>
  );
}

export default App;
