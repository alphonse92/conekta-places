import React from 'react';
import PropTypes from 'prop-types';
import { getLanguageSelector } from 'conekta-places-lib/dist/helpers/language';

import configurationContext from './context';
import { useConfiguration } from '../ConfigurationProvider/use';

export const LanguageProvider = ({
  children,
}) => {
  const {
    REACT_APP_ENV_LANG: language,
  } = useConfiguration();

  const getString = getLanguageSelector(language);

  const contextValue = {
    getString,
  };

  return React.createElement(
    configurationContext.Provider,
    { value: contextValue },
    children,
  );
};

LanguageProvider.defaultProps = {};

LanguageProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

LanguageProvider.displayName = 'LanguageProvider';
