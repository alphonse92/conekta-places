import { Router as expresRouter } from 'express';

export const makeHealthRouter = () => {
  const router = expresRouter();
  router.get('/health', (req, res) => res.send('ok'));
  return router;
};
