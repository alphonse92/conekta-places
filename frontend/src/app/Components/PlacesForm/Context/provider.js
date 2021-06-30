import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './context';
import { useService } from '../../../root/ServiceProvider/use';
import { useConfiguration } from '../../../root/ConfigurationProvider/use';

export const FormPlacesProvider = ({
  children,
  onSubmit,
}) => {
  const {
    REACT_APP_ENV_GOOGLE_API_KEY: googleApiKey,
    REACT_APP_ENV_LANG: language,
  } = useConfiguration();
  const { conekta: conektaService } = useService();
  const [fullAddress, setFullAddress] = useState();
  const [selectedLang, setLang] = useState(language);
  const [addressComponents, setAddressComponents] = useState();
  const [googleAPIKey] = useState(googleApiKey);
  const [isLoading, setIsLoading] = useState(false);

  const exit = (graceful = true) => {
    setFullAddress(undefined);
    setAddressComponents(undefined);
    onSubmit(graceful);
  };

  const submit = async (values) => {
    const result = await conektaService.saveAddress(values);
    return result;
  };

  const contextValue = {
    lang: selectedLang,
    fullAddress,
    googleAPIKey,
    addressComponents,
    isLoading,
    setLang,
    setFullAddress,
    exit,
    setAddressComponents,
    setIsLoading,
    submit,
  };

  return React.createElement(
    AppContext.Provider,
    { value: contextValue },
    children,
  );
};

FormPlacesProvider.defaultProps = {};

FormPlacesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

FormPlacesProvider.displayName = 'AppProvider';
