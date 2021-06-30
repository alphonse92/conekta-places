/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import MexicoForm from './Mexico';
import { requireSegmentsOrComponents } from './helper';

export function CountryForm({
  formId,
  countryId,
  onSubmit,
  addressComponents,
  segments,
}) {
  const countryFormMap = {
    mx: MexicoForm,
  };

  const CountryFormComponent = countryFormMap[countryId.toLowerCase()];

  return (
    <CountryFormComponent
      formId={formId}
      onSubmit={onSubmit}
      addressComponents={addressComponents}
      segments={segments}
    />
  );
}

CountryForm.displayName = 'CountryForm';
CountryForm.defaultProps = {
  segments: undefined,
  addressComponents: undefined,
};
CountryForm.propTypes = {
  formId: PropTypes.string.isRequired,
  countryId: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  segments: requireSegmentsOrComponents,
  addressComponents: requireSegmentsOrComponents,
};
