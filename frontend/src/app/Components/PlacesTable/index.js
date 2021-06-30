import React, {
  useState,
  useEffect,
} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { getCountrySegmentsExtrator } from 'conekta-places-lib/dist/helpers/address';

import { Loading } from '../Loading';

import { getStyles } from './styles';
import { useService } from '../../root/ServiceProvider/use';
import { useLanguage } from '../../root/LanguageProvider/use';
import { useConfiguration } from '../../root/ConfigurationProvider/use';

export const PlacesTable = ({ countryId }) => {
  const [addresses, setAddresses] = useState([]);
  const [pagination, setPagination] = useState({});
  const [fetching, setFetching] = useState(true);
  const { conekta: service } = useService();
  const { getString } = useLanguage();
  const { REACT_APP_ENV_PAGINATION_MAX_LIMIT: limit } = useConfiguration();
  const classes = getStyles();

  const {
    page = 1,
    // pages = 0,
    // total = 0,
  } = pagination;

  useEffect(async () => {
    if (countryId) {
      const results = await service.getCountryAddresses(countryId, { page, limit });
      const { docs, ...paginationData } = results;
      setPagination(paginationData);
      setAddresses(docs);
      setFetching(false);
      const segmentsExtractor = getCountrySegmentsExtrator(countryId.toLowerCase());
      const currentSegments = segmentsExtractor();

      const loadedAddreses = docs.map(({ _id, segments }) => ({ ...currentSegments, ...segments, id: _id }));
      setAddresses(loadedAddreses);
    }
  }, [countryId]);

  if (fetching) return <Loading />;
  if (!addresses.length) return <p>{getString('PLACES_TABLE_NO_RECORD')}</p>;

  const [firstAdd = {}] = addresses;
  const columns = Object.keys(firstAdd);

  console.log(columns);

  return (
    <div className={classnames(classes.tableContainer)}>
      <p>asdasdsad</p>
    </div>
  );
};

PlacesTable.defaultProps = {
  countryId: undefined,
};

PlacesTable.propTypes = {
  countryId: PropTypes.string,
};
