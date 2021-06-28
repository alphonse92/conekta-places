import { Router as expresRouter } from 'express';
import healthRouter from './health';
import infoRouter from './info';
import addressRouter from './address';

export default (Server) => {
  const root = expresRouter();

  root.use('/v1', healthRouter(Server));
  root.use('/v1', infoRouter(Server));
  root.use('/v1', addressRouter(Server));

  // append your custom routers for the version 1 of your api
  // mainRouter.use('/v1', infoRouter);

  return root;
};

