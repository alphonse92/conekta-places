import React, { useState } from 'react';
import { Lang } from 'conekta-places-lib';
import PropTypes from 'prop-types';
import AppContext from './context';
import { createService } from '../../../../services/index.js';

console.log(Lang);
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

  console.log(Lang.makeLangSelector);
  const { makeLangSelector, es, en } = Lang;
  const dict = { es, en };
  const getString = makeLangSelector(dict, selectedLang);

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
  language: 'en',
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
