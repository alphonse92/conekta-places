import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { useLanguage } from '../../root/LanguageProvider/use';
import { Card } from '../../Layout';

export const GetStarted = ({
  onStart,
}) => {
  const { getString } = useLanguage();
  return (
    <Card>
      <img src="https://s3-conektacdn-staging.s3.amazonaws.com/cpanel/statics/assets/img/conekta-logo-blue-full.svg" alt="logo" />
      <h1>Conekta Places Form</h1>
      <p>
        <Button
          variant="contained"
          color="primary"
          onClick={onStart}
        >
          {getString('GET_STARTED_BTN_LBL')}
        </Button>
      </p>
      <p>
        <Link to="/list">{getString('LINK_TO_ADDRESS_LIST_LABEL')}</Link>
      </p>

    </Card>
  );
};

GetStarted.defaultProps = {
};

GetStarted.propTypes = {
  onStart: PropTypes.func.isRequired,
};
