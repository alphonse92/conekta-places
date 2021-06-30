import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { FormContainer } from '../../Components/PlacesForm/Form.container';
import { FormPlacesProvider } from '../../Components/PlacesForm/Context/provider';
import { Card } from '../../Layout';
import { getStyles } from './styles';
/**
 * Form Root, this wraps the Form container component with it provider.
 * @param {*} props {language}
 * @returns {React.Component} Places form component
 */
export function RegisterPage({
  onSubmit,
}) {
  const classes = getStyles();
  return (
    <Card>
      <div className={classnames(classes.root)}>
        <FormPlacesProvider onSubmit={onSubmit}>
          <FormContainer />
        </FormPlacesProvider>
      </div>
    </Card>
  );
}

RegisterPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

RegisterPage.defaultProps = {
};
