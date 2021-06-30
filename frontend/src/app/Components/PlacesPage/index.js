import React, { useState } from 'react';
import classnames from 'classnames';
import Paper from '@material-ui/core/Paper';

import { AvailableCountrySelect } from '../AvailableCountrySelect';
import { getStyles } from './styles';
import { PlacesTable } from '../PlacesTable';

export const PlacesPage = () => {
  const [countryId, setCountryId] = useState();
  const classes = getStyles();
  return (
    <Paper elevation={2} classes={{ root: classes.root }}>
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
    </Paper>
  );
};
