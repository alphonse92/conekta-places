export default (Server) => {
  const mongo = Server.mongo.connection;
  const { Schema } = mongo;
  return {
    name: 'Addresses',
    schema: {
      id: {
        type: Schema.Types.ObjectId,
      },
    },
  };
};
