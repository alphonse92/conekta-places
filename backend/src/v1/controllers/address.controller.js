export const getAddress = (req, res) => {
  // Do something to store  in database
  res.send('ok');
};

export const getAddresses = (req, res) => {
  // Do something to store  in database
  res.send('ok');
};

export const saveAddress = (req, res) => {
  const { body } = req;
  // Do something to store  in database
  res.send(body);
};

export const updateAddress = (req, res) => {
  const { body } = req;
  // Do something to store  in database
  res.send(body);
};

export const deleteAddress = (req, res) => {
  // Do something to store  in database
  res.send('ok');
};
