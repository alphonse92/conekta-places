import React, { useState } from 'react';
import { Lang } from 'conekta-places-lib';
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
  onSubmit,
}) => {
  const [fullAddress, setFullAddress] = useState();
  const [selectedLang, setLang] = useState(language);
  const [addressComponents, setAddressComponents] = useState();
  const [googleAPIKey] = useState(gApiK);
  const [isLoading, setIsLoading] = useState(false);

  const { makeLangSelector, es, en } = Lang;
  const dict = { es, en };
  const getString = makeLangSelector(dict, selectedLang);

  const exit = (graceful = true) => {
    setFullAddress(undefined);
    setAddressComponents(undefined);
    onSubmit(graceful);
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
    lang: selectedLang,
    fullAddress,
    googleAPIKey,
    addressComponents,
    isLoading,
    setLang,
    getString,
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
  onSubmit: PropTypes.func.isRequired,
};

FormPlacesProvider.displayName = 'AppProvider';
