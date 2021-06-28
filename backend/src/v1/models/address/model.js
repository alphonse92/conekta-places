
import increment from 'mongoose-auto-increment';
import paginator from 'mongoose-paginate';
import timestamps from 'mongoose-timestamp';

// import { Server } from '../../../server';
import createSchema from './schema';

export default (Server) => {
  const mongoDriver = Server.mongo.connection;
  const ModelSchema = createSchema(Server);
  const Schema = new mongoDriver.Schema(ModelSchema.schema);
  Schema.plugin(paginator);
  Schema.plugin(timestamps);
  increment.initialize(mongoDriver.connection);
  Schema.plugin(increment.plugin, { model: ModelSchema.name, field: 'cursor' });
  return mongoDriver.model(ModelSchema.name, Schema);
};

