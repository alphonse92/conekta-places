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
import { DinoError } from '../Errors/DinoError';
import { RequestInfoStatus } from '../Dialogs/RequestInfoStatus';

export const PreviewPlace = ({ id, onBack }) => {
  const classes = getStyles();
  const { getString } = useLanguage();
  const { conekta: service } = useService();
  const [address, setAddress] = useState();
  const [addressExist, setAddressExist] = useState(true);
  const [requestInfoStatus, setRequestInfoStatus] = useState(false);

  useEffect(async () => {
    const data = await service.getAddress(id);
    if (data) setAddress(data);
    else setAddressExist(false);
  }, []);

  if (!addressExist) {
    return (
      <DinoError
        onContinue={onBack}
        text={getString('ERROR_COUNTRY_NOT_AVAILABLE')}
        label={getString('STR_CONTINUE')}
      />
    );
  }

  if (!address) return null;

  const onSubmit = async (values) => {
    const newData = { ...values, countryId: address.countryId };
    const saved = await service.updateAddress(id, newData);
    if (saved) {
      setRequestInfoStatus({ result: saved, ok: true });
    } else {
      setRequestInfoStatus({ ok: false });
    }
  };

  const onAccept = () => {
    setRequestInfoStatus(null);
  };

  const formId = 'PlacesForm';
  const { segments, countryId } = address;

  console.log(Boolean(requestInfoStatus));

  return (
    <div className={classnames(classes.root)}>
      <RequestInfoStatus
        isOpen={Boolean(requestInfoStatus)}
        status={requestInfoStatus}
        onAccept={onAccept}
      />
      <CountryForm
        formId={formId}
        segments={segments}
        countryId={countryId}
        onSubmit={onSubmit}
      />
      <ControlButtonContainer>
        <Button variant="contained" color="primary" type="submit" form={formId}>
          {getString('STR_SAVE')}
        </Button>
        <Button onClick={onBack}>{getString('STR_BACK')}</Button>
      </ControlButtonContainer>
    </div>

  );
};

PreviewPlace.defaultProps = {};
PreviewPlace.propTypes = {
  id: PropTypes.string.isRequired,
  onBack: PropTypes.string.isRequired,
};
