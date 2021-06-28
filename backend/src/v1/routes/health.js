import { Router as expresRouter } from 'express';

const router = expresRouter();
router.get('/health', (req, res) => res.send('ok'));

export default router;
