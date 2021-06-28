import { getPostalCodeInfo } from './countries/mexico';

export const getPostalCodeService = country => ({
  mx: getPostalCodeInfo,
}[country]);
