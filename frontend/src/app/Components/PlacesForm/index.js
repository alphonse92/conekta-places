import React from 'react';
import PropTypes from 'prop-types';

import { GetStarted } from '../GetStarted';
import { AppProvider } from '../../store/AppProvider';
import { COUNTRY_ADRESS_SCHEMAS } from '../../../lib/schemas/country-addresses';

function PlacesForm({ language }) {
  return (
    <AppProvider language={language}>
      <GetStarted />
    </AppProvider>
  );
}

PlacesForm.locations = Object.keys(COUNTRY_ADRESS_SCHEMAS).reduce((acc, loc) => ({ ...acc, [loc]: loc }), {});

PlacesForm.propTypes = {
  language: PropTypes.string,
  location: PropTypes.string.isRequired,
};

PlacesForm.defaultProps = {
  language: 'en',
};

export default PlacesForm;
