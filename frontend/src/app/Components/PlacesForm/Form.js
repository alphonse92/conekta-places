import React from 'react';

import { useFormPlaces } from './Context/useFormPlaces';
import { NotAvailableInYourRegion } from './Errors/NoAvailableInYourRegion';
import FormsByCountry from './FormsByCountry';

export const FormBody = () => {
  const {
    addressComponents,
    exit,
  } = useFormPlaces();

  const { country } = addressComponents;

  const FormCountryComponent = FormsByCountry[country.id.toLowerCase()];

  if (!FormCountryComponent) return <NotAvailableInYourRegion onContinue={exit} />;

  return <FormCountryComponent />;
};

FormBody.propTypes = {};
FormBody.defaultProps = {};
