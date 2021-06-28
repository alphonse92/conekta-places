import createAddressModel from './address/model';

export const loadModels = Server => ({
  address: createAddressModel(Server),
});
