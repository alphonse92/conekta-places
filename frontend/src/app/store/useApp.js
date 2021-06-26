import { useContext } from 'react';
import AppContext from './AppContext';

export const useApp = () => {
  const context = useContext(AppContext);
  const {
    userHasStarted,
    lang,
    setLang,
    getString,
    startUserPlacesFlow,
  } = context;
  return {
    userHasStarted,
    lang,
    setLang,
    getString,
    startUserPlacesFlow,
  };
};
