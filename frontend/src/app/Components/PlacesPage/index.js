import React, { useState } from 'react';
import { AvailableCountrySelect } from '../AvailableCountrySelect';

export const PlacesPage = () => {
  const [countryId, setCountryId] = useState();

  return (
    <>
      <AvailableCountrySelect
        value={countryId}
        onSelect={setCountryId}
      />
    </>
  );
};
