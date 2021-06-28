import express from 'express';
import cors from 'cors';
import connectToMongo from './database/mongo';
import { loadModels as getMongoModels } from './v1/models';
import createV1Routes from './v1/routes';
import { getAllowAppIdMiddleware } from './v1/middlewares/security';

let singletonAppInsance = null;

export class Server {
  constructor(config) {
    this.config = config;
    this.mongo = {};
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

  getExpressServer() {
    return this.expressServer;
  }

  configureServer() {
    this.app = express();
    this.expressServer = this.app.listen(this.getPort());
    this.app
      .use(express.urlencoded({ extended: true }))
      .use(express.json())
      .use(cors({ credentials: true, origin: true }));
  }

  protect() {
    this.app.use(getAllowAppIdMiddleware);
  }

  loadRoutes() {
    this.app.use('/api', createV1Routes(this));
  }

  async startMongoAndMongoose() {
    const connection = await connectToMongo(this.config);
    this.mongo.connection = connection;
    console.log('-> Connected to mongo.');
    this.mongo.models = getMongoModels(this);
    console.log('-> Mongo models loaded');
  }

  async connectDatabase() {
    await this.startMongoAndMongoose();
  }

  async start() {
    process.on('SIGTERM', this.shutdown.bind(this));
    process.on('SIGINT', this.shutdown.bind(this));

    try {
      this.logStart();
      this.printConfigEnvars();
      this.configureServer();
      this.protect();

      await this.connectDatabase();

      this.loadRoutes();
    } catch (e) {
      console.log(e);
      this.shutdown();
    }
  }

  shutdown() {
    console.log('Received kill signal, shutting down gracefully');

    this.expressServer.close(() => {
      console.log('Closed out remaining connections');
      process.exit(0);
    });

    setTimeout(() => {
      console.error('Could not close connections in time, forcefully shutting down');
      process.exit(1);
    }, 10000);
  }
}
