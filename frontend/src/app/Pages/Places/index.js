import React, { useState } from 'react';
import classnames from 'classnames';

import { AvailableCountrySelect } from '../../Components/AvailableCountrySelect';
import { PlacesTable } from '../../Components/PlacesTable';
import { getStyles } from './styles';
import { Card } from '../../Layout';

export const Places = () => {
  const [countryId, setCountryId] = useState();
  const classes = getStyles();
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
          <PlacesTable countryId={countryId} />
        </div>
      </div>
    </Card>
  );
};
