import { useContext } from 'react';
import ConfigurationContext from './context';

export const useConfiguration = () => {
  const context = useContext(ConfigurationContext);
  const {
    REACT_APP_ENV,
    REACT_APP_ENV_GOOGLE_API_KEY,
    REACT_APP_ENV_SERVICE_NAME,
    REACT_APP_ENV_PLACES_FORM_SERVICE_API_URL,
    REACT_APP_ENV_PLACES_FORM_SERVICE_APP_ID,
    REACT_APP_ENV_LANG,
    CONEKTA_CREDENTIALS,
  } = context;
  return {
    REACT_APP_ENV,
    REACT_APP_ENV_GOOGLE_API_KEY,
    REACT_APP_ENV_SERVICE_NAME,
    REACT_APP_ENV_PLACES_FORM_SERVICE_API_URL,
    REACT_APP_ENV_PLACES_FORM_SERVICE_APP_ID,
    REACT_APP_ENV_LANG,
    CONEKTA_CREDENTIALS,
  };
};
