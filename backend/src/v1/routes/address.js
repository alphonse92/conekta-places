import { Router as expresRouter } from 'express';
import {
  getSingleAddressController,
  getAddressesController,
  getSaveAddressController,
  getUpdateAddressController,
  getDeleteAddressController,
} from '../controllers/address.controller';

export default (Server) => {
  const router = expresRouter();

  router.get('/address/', getAddressesController(Server));
  router.get('/address/:id', getSingleAddressController(Server));
  router.post('/address/', getSaveAddressController(Server));
  router.put('/address/', getUpdateAddressController(Server));
  router.delete('/address/:id', getDeleteAddressController(Server));

  return router;
};
