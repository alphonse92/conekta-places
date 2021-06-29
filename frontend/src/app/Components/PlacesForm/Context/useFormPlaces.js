import { useContext } from 'react';
import AppContext from './context';

export const useFormPlaces = () => {
  const context = useContext(AppContext);
  const {
    googleAPIKey,
    lang,
    setLang,
    startUserPlacesFlow,
    fullAddress,
    setFullAddress,
    exit,
    submit,

    addressComponents,
    setAddressComponents,

    isLoading,
    setIsLoading,
  } = context;
  return {
    googleAPIKey,
    lang,
    setLang,
    startUserPlacesFlow,
    fullAddress,
    setFullAddress,
    exit,
    submit,

    addressComponents,
    setAddressComponents,

    isLoading,
    setIsLoading,
  };
};
