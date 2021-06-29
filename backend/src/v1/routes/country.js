import { Router as expresRouter } from 'express';
import { CountryController } from '../controllers/country.controller';

export default (Server) => {
  const router = expresRouter();
  const controller = new CountryController(Server);

  router.get('/country/available', controller.getAvailable.bind(controller));
  router.get('/country/:countryId/info/postalcode/:postalCode', controller.getPostalCodeInfo.bind(controller));
  router.get('/country/:countryId/address', controller.getAddresses.bind(controller));
  router.post('/country/:countryId/address', controller.saveAddress.bind(controller));

  return router;
};
