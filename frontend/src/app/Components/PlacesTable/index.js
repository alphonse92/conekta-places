import React, {
  useState,
  useEffect,
} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { getClassAddressByCountry } from 'conekta-places-lib/dist/helpers/country';

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
  const {
    REACT_APP_ENV_PAGINATION_MAX_LIMIT: limit,
    isCountryAvailable,
  } = useConfiguration();
  const classes = getStyles();

  const {
    page = 1,
    // pages = 0,
    // total = 0,
  } = pagination;

  const fetchAddress = async () => {
    const results = await service.getCountryAddresses(countryId, { page, limit });
    const { docs, ...paginationData } = results;
    const CountryClass = getClassAddressByCountry(countryId);
    const loadedAddreses = docs.map(({ _id, segments }) => ({ id: _id, instance: new CountryClass(segments) }));

    setPagination(paginationData);
    setFetching(false);
    setAddresses(loadedAddreses);
  };

  const makeOnDeleteEvent = (id) => async () => {
    await service.deleteAddress(id);
    await fetchAddress();
  };

  useEffect(async () => {
    if (countryId && isCountryAvailable(countryId)) await fetchAddress();
  }, [countryId]);

  if (fetching) return <Loading />;
  if (!addresses.length) return <p>{getString('PLACES_TABLE_NO_RECORD')}</p>;

  return (
    <div className={classnames(classes.tableContainer)}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{getString('PLACES_TABLE_POSTAL_CODE_LABEL')}</TableCell>
            <TableCell>{getString('PLACES_TABLE_ADDRESS_LABEL')}</TableCell>
            <TableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {addresses.map(({ id, instance }) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {instance.getPostalCode()}
              </TableCell>
              <TableCell component="th" scope="row">
                {instance.toString()}
              </TableCell>
              <TableCell align="right">
                <IconButton onClick={makeOnDeleteEvent(id)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton>
                  <VisibilityIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

PlacesTable.defaultProps = {
  countryId: undefined,
};

PlacesTable.propTypes = {
  countryId: PropTypes.string,
};
