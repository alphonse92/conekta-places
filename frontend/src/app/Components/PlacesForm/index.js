import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { FormContainer } from './Form.container';
import { FormPlacesProvider } from './Context/provider';
import { getStyles } from './styles';

/**
 * Form Root, this wraps the Form container component with it provider.
 * @param {*} props {language}
 * @returns {React.Component} Places form component
 */
export default function PlacesFormRoot({ language, googleAPIKey }) {
  const classes = getStyles();
  return (
    <div className={classnames(classes.root)}>
      <FormPlacesProvider language={language} googleAPIKey={googleAPIKey}>
        <FormContainer />
      </FormPlacesProvider>
    </div>
  );
}

PlacesFormRoot.propTypes = {
  language: PropTypes.string,
  googleAPIKey: PropTypes.string,
};

PlacesFormRoot.defaultProps = {
  language: 'en',
  googleAPIKey: undefined,
};
