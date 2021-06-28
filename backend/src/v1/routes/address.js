import { Router as expresRouter } from 'express';
import { saveAddress } from '../controllers/address.controller';

const router = expresRouter();

router.post('/address/', saveAddress);

export default router;
