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
    getService,

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
    getService,

    addressComponents,
    setAddressComponents,

    isLoading,
    setIsLoading,
  };
};
