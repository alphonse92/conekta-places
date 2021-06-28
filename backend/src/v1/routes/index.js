import { Router as expresRouter } from 'express';
import healthRouter from './health';
import infoRouter from './info';
import addressRouter from './address';

const mainRouter = expresRouter();

mainRouter.use('/v1', healthRouter);
mainRouter.use('/v1', infoRouter);
mainRouter.use('/v1', addressRouter);

// append your custom routers for the version 1 of your api
// mainRouter.use('/v1', infoRouter);

export default mainRouter;
