import { AddressManager } from '../mangers/address.manager';

export const getSingleAddressController = Server => (req, res) => {
  // Do something to store  in database
  const addressManager = new AddressManager(Server);
  res.send('ok');
};

export const getAddressesController = Server => (req, res) => {
  // Do something to store  in database
  const addressManager = new AddressManager(Server);
  res.send('ok');
};

export const getSaveAddressController = Server => (req, res) => {
  const { body } = req;
  const addressManager = new AddressManager(Server);
  // Do something to store  in database
  res.send({ body, config: Server.config });
};

export const getUpdateAddressController = Server => (req, res) => {
  const { body } = req;
  const addressManager = new AddressManager(Server);
  // Do something to store  in database
  res.send(body);
};

export const getDeleteAddressController = Server => (req, res) => {
  const addressManager = new AddressManager(Server);
  // Do something to store  in database
  res.send('ok');
};
