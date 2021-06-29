import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { useLanguage } from '../../root/LanguageProvider/use';

export const GetStarted = ({
  onStart,
}) => {
  const { getString } = useLanguage();
  return (
    <>
      <img src="https://s3-conektacdn-staging.s3.amazonaws.com/cpanel/statics/assets/img/conekta-logo-blue-full.svg" alt="logo" />
      <h1>Conekta Places Form</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={onStart}
      >
        {getString('GET_STARTED_BTN_LBL')}
      </Button>
    </>
  );
};

GetStarted.defaultProps = {
};

GetStarted.propTypes = {
  onStart: PropTypes.func.isRequired,
};
