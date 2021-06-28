import dotenv from 'dotenv';
import path from 'path';
import _pick from 'lodash/pick';

import { Server } from './src/server';

const { NODE_ENV: env } = process.env;
const configPathFile = path.resolve(process.cwd(), `./.env/.env.${env}`);
const { parsed: dotconfig } = dotenv.config({ path: configPathFile });

const configKeys = Object.keys(dotconfig);
const soConfig = _pick(process.env, configKeys);
const config = { ...dotconfig, ...soConfig };

const server = Server.getInstance(config);

server.start();
