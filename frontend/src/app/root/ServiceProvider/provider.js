import React from 'react';
import PropTypes from 'prop-types';
import configurationContext from './context';

import { useConfiguration } from '../ConfigurationProvider/use';
import { createService } from '../../../services';

export const ServiceProvider = ({
  children,
}) => {
  const { CONEKTA_CREDENTIALS } = useConfiguration();

  const conekta = createService(
    CONEKTA_CREDENTIALS.service,
    CONEKTA_CREDENTIALS.credentials,
  );

  const contextValue = {
    conekta,
  };

  return React.createElement(
    configurationContext.Provider,
    { value: contextValue },
    children,
  );
};

ServiceProvider.defaultProps = {};

ServiceProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

ServiceProvider.displayName = 'ConfigurationProvider';
