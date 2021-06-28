import mongoose from 'mongoose';

export default config => new Promise((resolve, reject) => {
  const { MONGO_URI: uri } = config;
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;

  db.on('error', (err) => {
    console.error(err);
    reject(new Error('Something went wrong while connecting to mongo'));
  });
  db.once('open', () => {
    resolve(mongoose);
  });
});
