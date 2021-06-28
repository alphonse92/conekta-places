import express from 'express';
import cors from 'cors';
import v1Routes from './v1/routes';
import { getAllowAppIdMiddleware } from './v1/middlewares/security';

let singletonAppInsance = null;

export class Server {
  constructor(config) {
    this.config = config;
  }

  static getInstance(config = {}) {
    if (singletonAppInsance) return singletonAppInsance;
    singletonAppInsance = new Server(config);
    return singletonAppInsance;
  }


  getConfig() {
    return this.config;
  }

  getPort() {
    return this.config.PORT ? Number(this.config.PORT) : 1337;
  }

  logStart() {
    console.clear();
    console.log('Starting conekta places api at', this.getPort());
  }

  printConfigEnvars() {
    if (this.config.PRINT_ENV_VARS_AT_STARTUP === 'true') {
      const table = Object
        .keys(this.config)
        .reduce((out, key) => [...out, { key, value: this.config[key] }], []);
      console.table(table);
    }
  }

  configureServer() {
    this.app = express();
    this.app.listen(this.getPort());
    this.app
      .use(express.urlencoded({ extended: true }))
      .use(express.json())
      .use(cors({ credentials: true, origin: true }));
  }

  protect() {
    this.app.use(getAllowAppIdMiddleware);
  }

  loadRoutes() {
    this.app.use('/api', v1Routes);
  }

  start() {
    this.logStart();
    this.printConfigEnvars();
    this.configureServer();
    this.protect();
    this.loadRoutes();
  }
}
