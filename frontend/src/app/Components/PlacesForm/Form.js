import React, { useState } from 'react';
import classnames from 'classnames';
import Button from '@material-ui/core/Button';

import { useLanguage } from '../../root/LanguageProvider/use';
import { CountryForm } from '../CountryForms';
import { useFormPlaces } from './Context/useFormPlaces';
import { InfoDialog } from '../Dialogs/InfoDialog';
import { NotAvailableInYourRegion } from './Errors/NoAvailableInYourRegion';
import { getStyles } from './styles';
import { ControlButtonContainer } from '../../Layout/ControlButtonsContainer';
import { useConfiguration } from '../../root/ConfigurationProvider/use';

export const FormBody = () => {
  const {
    addressComponents,
    exit,
    submit,
  } = useFormPlaces();

  const { isCountryAvailable } = useConfiguration();

  const classes = getStyles();

  const { getString } = useLanguage();

  const [apiSaveResult, setApiSaveResult] = useState();

  const { country } = addressComponents;
  const { id: countryId } = country;
  const isAvailable = isCountryAvailable(countryId);
  const registerSuccessfuly = apiSaveResult && apiSaveResult.result;

  if (!isAvailable) return <NotAvailableInYourRegion onContinue={exit} />;

  const onSubmit = async (values) => {
    try {
      const result = await submit(values);
      setApiSaveResult({ result, ok: true });
    } catch (e) {
      console.log(e);
      setApiSaveResult({ ok: false });
    }
  };

  const onAccept = () => {
    if (registerSuccessfuly) {
      exit(true);
    }
    setApiSaveResult(undefined);
  };

  const formId = 'PlacesForm';

  return (
    <>
      <InfoDialog
        isOpen={Boolean(apiSaveResult)}
        onAccept={onAccept}
        title="Conekta Places"
        text={(
          registerSuccessfuly
            ? getString('COUNTRY_FORM_SAVED_SUCCESS')
            : getString('COUNTRY_FORM_SAVE_FAILED')
        )}
        acceptLabel={getString('STR_CONTINUE')}
      />
      <p>{getString('FORM_BODY_TEXT')}</p>
      <div className={classnames(classes.root)}>
        <CountryForm
          formId={formId}
          addressComponents={addressComponents}
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

FormBody.propTypes = {};
FormBody.defaultProps = {};
