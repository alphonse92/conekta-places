import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './context';
import { LANG } from '../../../../lib/lang';

export const FormPlacesProvider = ({ children, language, googleAPIKey: gApiK }) => {
  const [userHasStarted, setUserStarted] = useState(false);
  const [fullAddress, setFullAddress] = useState();
  const [selectedLang, setLang] = useState(language);
  const [addressComponents, setAddressComponents] = useState();
  const [googleAPIKey] = useState(gApiK);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => { }, []);

  const startUserPlacesFlow = () => setUserStarted(true);

  const getString = (str, def = 'No string found') => LANG[selectedLang][str] || def;

  const exit = () => {
    setUserStarted(false);
    setFullAddress(undefined);
    setAddressComponents(undefined);
  };

  const isFormValid = () => true;

  const submit = () => {
    if (isFormValid()) {
      console.log('submiting');
    }
  };

  const contextValue = {
    userHasStarted,
    lang: selectedLang,
    fullAddress,
    googleAPIKey,
    addressComponents,
    isLoading,
    setLang,
    getString,
    startUserPlacesFlow,
    setFullAddress,
    exit,
    setAddressComponents,
    setIsLoading,
    submit,
    isFormValid,
  };

  return React.createElement(
    AppContext.Provider,
    { value: contextValue },
    children,
  );
};

FormPlacesProvider.defaultProps = {
  language: LANG.DEFAULT,
  googleAPIKey: undefined,
};

FormPlacesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  language: PropTypes.string,
  googleAPIKey: PropTypes.string,
};

FormPlacesProvider.displayName = 'AppProvider';
