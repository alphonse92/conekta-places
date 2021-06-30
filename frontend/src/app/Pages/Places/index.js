import React, { useState } from 'react';
import classnames from 'classnames';
import {
  useHistory,
} from 'react-router-dom';

import { AvailableCountrySelect } from '../../Components/AvailableCountrySelect';
import { PlacesTable } from '../../Components/PlacesTable';
import { getStyles } from './styles';
import { Card } from '../../Layout';
import { useService } from '../../root/ServiceProvider/use';

export const Places = () => {
  const history = useHistory();
  const classes = getStyles();
  const { conekta: service } = useService();

  const [countryId, setCountryId] = useState();

  const onPreview = (id) => history.push(`/address/${id}`);
  const onDelete = async (id) => service.deleteAddress(id);

  return (
    <Card>
      <div className={classnames(classes.pageContainer)}>
        <div className={classnames(classes.selectCountryContainer)}>
          <AvailableCountrySelect
            value={countryId}
            onSelect={setCountryId}
          />
        </div>
        <div className={classnames(classes.tableContainer)}>
          <PlacesTable
            countryId={countryId}
            onPreview={onPreview}
            onDelete={onDelete}
          />
        </div>
      </div>
    </Card>
  );
};
