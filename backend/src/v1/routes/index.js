import { Router as expresRouter } from 'express';
import { makeHealthRouter } from './health';
import { makeInfoRouter } from './info';
import { makeAddressRouter } from './address';

export default (Server) => {
  const root = expresRouter();

  root.use('/v1', makeHealthRouter(Server));
  root.use('/v1', makeInfoRouter(Server));
  root.use('/v1', makeAddressRouter(Server));

  // append your custom routers for the version 1 of your api
  // mainRouter.use('/v1', infoRouter);

  return root;
};

