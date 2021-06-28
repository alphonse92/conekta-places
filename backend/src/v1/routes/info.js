import { Router as expresRouter } from 'express';
import { getPostalCodeInfo } from '../controllers/info.controller';

const router = expresRouter();

router.get('/country/:countryId/info/postalcode/:postalCode', getPostalCodeInfo);

export default router;
