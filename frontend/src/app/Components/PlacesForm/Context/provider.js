import React, { useState } from 'react';
import * as LANG from 'conekta-places-lib/dist/lang';
import PropTypes from 'prop-types';
import AppContext from './context';
import { createService } from '../../../../services/index.js';

export const FormPlacesProvider = ({
  children,
  language,
  googleAPIKey: gApiK,
  apiUrl,
  appId,
  serviceName,
}) => {
  const [userHasStarted, setUserStarted] = useState(false);
  const [fullAddress, setFullAddress] = useState();
  const [selectedLang, setLang] = useState(language);
  const [addressComponents, setAddressComponents] = useState();
  const [googleAPIKey] = useState(gApiK);
  const [isLoading, setIsLoading] = useState(false);

  const startUserPlacesFlow = () => setUserStarted(true);

  const getString = (str, def = 'No string found') => LANG[selectedLang][str] || def;

  const exit = () => {
    setUserStarted(false);
    setFullAddress(undefined);
    setAddressComponents(undefined);
  };

  const getService = () => createService(serviceName, {
    apiUrl,
    appId,
  });

  const submit = async (values) => {
    const service = getService();
    const result = await service.saveAddress(values);
    return result;
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
    getService,
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
  apiUrl: PropTypes.string.isRequired,
  appId: PropTypes.string.isRequired,
  serviceName: PropTypes.string.isRequired,
};

FormPlacesProvider.displayName = 'AppProvider';
