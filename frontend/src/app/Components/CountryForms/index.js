/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import MexicoForm from './Mexico';

export function CountryForm({
  formId,
  countryId,
  onSubmit,
  addressComponents,
  countryNotAvailableComponent,
}) {
  const countryFormMap = {
    mx: MexicoForm,
  };

  const CountryFormComponent = countryFormMap[countryId.toLowerCase()];

  if (!CountryFormComponent) return countryNotAvailableComponent;

  return (
    <CountryFormComponent
      formId={formId}
      onSubmit={onSubmit}
      addressComponents={addressComponents}
    />
  );
}

CountryForm.displayName = 'CountryForm';
CountryForm.defaultProps = {};
CountryForm.propTypes = {
  formId: PropTypes.string.isRequired,
  countryId: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  addressComponents: PropTypes.object.isRequired,
  countryNotAvailableComponent: PropTypes.object.isRequired,
};
