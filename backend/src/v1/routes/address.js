import { Router as expresRouter } from 'express';
import { AddressController } from '../controllers/address.controller';

export const makeAddressRouter = (Server) => {
  const router = expresRouter();

  const controller = new AddressController(Server);

  router.get('/address/', controller.getAddress.bind(controller));
  router.get('/address/:id', controller.getList.bind(controller));
  router.post('/address/', controller.saveAddress.bind(controller));
  router.put('/address/', controller.updateAddress.bind(controller));
  router.delete('/address/:id', controller.deleteAddress.bind(controller));

  return router;
};
