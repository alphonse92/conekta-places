import React, { useState } from 'react';
import { getLanguageSelector } from 'conekta-places-lib/dist/helpers/language';
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

  const [fullAddress, setFullAddress] = useState();
  const [selectedLang, setLang] = useState(language);
  const [addressComponents, setAddressComponents] = useState();
  const [googleAPIKey] = useState(googleApiKey);
  const [isLoading, setIsLoading] = useState(false);

  const getString = getLanguageSelector(selectedLang);

  const exit = (graceful = true) => {
    setFullAddress(undefined);
    setAddressComponents(undefined);
    onSubmit(graceful);
  };

  const submit = async (values) => {
    const { conekta: service } = useService();
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
