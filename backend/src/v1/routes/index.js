import { Router as expresRouter } from 'express';
import makeHealthRouter from './health';
import makeAddressRouter from './address';
import makeCountryController from './country';

export default (Server) => {
  const root = expresRouter();

  root.use('/v1', makeHealthRouter(Server));
  root.use('/v1', makeAddressRouter(Server));
  root.use('/v1', makeCountryController(Server));

  return root;
};

