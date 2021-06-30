import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import { useLanguage } from '../../root/LanguageProvider/use';
import { CountryForm } from '../CountryForms';
// import { InfoDialog } from '../Dialogs/InfoDialog';

import { getStyles } from './styles';
import { ControlButtonContainer } from '../../Layout/ControlButtonsContainer';
import { useService } from '../../root/ServiceProvider/use';

export const PreviewPlace = ({ id }) => {
  const classes = getStyles();
  const { getString } = useLanguage();
  const { conekta: service } = useService();
  const [address, setAddress] = useState();

  useEffect(async () => {
    const data = await service.getAddress(id);
    if (data) {
      setAddress(data);
    }
  }, []);

  if (!address) return null;

  const formId = 'PlacesForm';

  console.log({ address, formId });

  const { segments, countryId } = address;

  const onSubmit = (values) => {
    console.log(values);
  };

  const exit = () => {

  };

  return (
    <>
      <div className={classnames(classes.root)}>
        <CountryForm
          formId={formId}
          segments={segments}
          countryId={countryId}
          onSubmit={onSubmit}
        />
        <ControlButtonContainer>
          <Button variant="contained" color="primary" type="submit" form={formId}>
            {getString('STR_CONTINUE')}
          </Button>
          <Button onClick={exit}>{getString('STR_CANCEL')}</Button>
        </ControlButtonContainer>
      </div>
    </>
  );
};

PreviewPlace.defaultProps = {};
PreviewPlace.propTypes = {
  id: PropTypes.string.isRequired,
};
