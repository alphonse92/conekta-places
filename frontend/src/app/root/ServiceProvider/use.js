import { useContext } from 'react';
import ServiceContext from './context';

export const useService = () => {
  const context = useContext(ServiceContext);
  const {
    conekta,
  } = context;
  return {
    conekta,
  };
};
