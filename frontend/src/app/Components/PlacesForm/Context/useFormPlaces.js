import { useContext } from 'react';
import AppContext from './context';

export const useFormPlaces = () => {
  const context = useContext(AppContext);
  const {
    googleAPIKey,
    userHasStarted,
    lang,
    setLang,
    getString,
    startUserPlacesFlow,
    fullAddress,
    setFullAddress,
    exit,
    submit,
    isFormValid,

    addressComponents,
    setAddressComponents,

    isLoading,
    setIsLoading,
  } = context;
  return {
    googleAPIKey,
    userHasStarted,
    lang,
    setLang,
    getString,
    startUserPlacesFlow,
    fullAddress,
    setFullAddress,
    exit,
    submit,
    isFormValid,

    addressComponents,
    setAddressComponents,

    isLoading,
    setIsLoading,
  };
};
