import React from 'react';
import Button from '@material-ui/core/Button';
import { useFormPlaces } from '../Context/useFormPlaces';

export const GetStarted = () => {
  const {
    startUserPlacesFlow,
    getString,
  } = useFormPlaces();

  return (
    <>
      <img src="https://s3-conektacdn-staging.s3.amazonaws.com/cpanel/statics/assets/img/conekta-logo-blue-full.svg" alt="logo" />
      <h1>Conekta Places Form</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={startUserPlacesFlow}
      >
        {getString('GET_STARTED_BTN_LBL')}
      </Button>
    </>
  );
};
