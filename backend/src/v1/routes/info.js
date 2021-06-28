import { Router as expresRouter } from 'express';
import { getPostalCodeInfo } from '../controllers/info.controller';

export default () => {
  const router = expresRouter();
  router.get('/country/:countryId/info/postalcode/:postalCode', getPostalCodeInfo);
  return router;
};
