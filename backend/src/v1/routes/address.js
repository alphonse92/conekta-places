import { Router as expresRouter } from 'express';
import { AddressController } from '../controllers/address.controller';

export default (Server) => {
  const router = expresRouter();

  const controller = new AddressController(Server);

  router.get('/address/:id', controller.getAddress.bind(controller));
  router.post('/address/', controller.saveAddress.bind(controller));
  router.put('/address/:id', controller.updateAddress.bind(controller));

  return router;
};
