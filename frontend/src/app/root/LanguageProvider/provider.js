import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dictionary } from 'conekta-language';
import languages from 'conekta-language/dist/dictionary';

import configurationContext from './context';
import { useConfiguration } from '../ConfigurationProvider/use';

export const LanguageProvider = ({
  children,
}) => {
  const {
    REACT_APP_ENV_LANG: language,
  } = useConfiguration();

  const [selectedLanguage, setSelectedLanguage] = useState(language);

  const dict = new Dictionary(languages, { defaultSelectedLang: selectedLanguage });

  const getString = (str) => dict.getString(str);

  const contextValue = {
    getString,
    setSelectedLanguage,
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
