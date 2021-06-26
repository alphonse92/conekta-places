import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import { LANG } from '../../lib/lang';

export const AppProvider = ({ children, language }) => {
  const [userHasStarted, setUserStarted] = useState(false);
  const [selectedLang, setLang] = useState(language);

  useEffect(() => { }, []);

  const startUserPlacesFlow = () => setUserStarted(true);

  const getString = (str) => LANG[selectedLang][str];

  const contextValue = {
    userHasStarted,
    lang: selectedLang,
    setLang,
    getString,
    startUserPlacesFlow,
  };

  return React.createElement(
    AppContext.Provider,
    { value: contextValue },
    children,
  );
};

AppProvider.defaultProps = {
  language: LANG.DEFAULT,
};

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  language: PropTypes.string,
};

AppProvider.displayName = 'AppProvider';
