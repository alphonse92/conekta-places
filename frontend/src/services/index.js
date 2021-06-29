import { ConektaPlacesService } from './ConektaPlacesService';

export const createService = (service, connectionData) => {
  if (service === 'conekta') {
    return new ConektaPlacesService(connectionData);
  }
  throw new Error('Api service not found');
};
