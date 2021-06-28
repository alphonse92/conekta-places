import { getPostalCodeService } from '../services/postalcode/postalcode.service';

export const getPostalCodeInfo = async (req, res) => {
  const { countryId, postalCode } = req.params;
  const service = getPostalCodeService(countryId);

  if (!service) {
    return res.status(403).send('Country not available');
  }

  const data = await service(postalCode);

  return res.send(data);
};
