import { Router as expresRouter } from 'express';
import {
  deleteAddress,
  getAddress,
  getAddresses,
  saveAddress,
  updateAddress,
} from '../controllers/address.controller';

const router = expresRouter();

router.get('/address/', getAddress);
router.get('/address/:id', getAddresses);
router.post('/address/', saveAddress);
router.put('/address/', updateAddress);
router.delete('/address/:id', deleteAddress);

export default router;
