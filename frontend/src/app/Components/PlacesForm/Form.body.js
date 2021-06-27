import React from 'react';
import classnames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useFormPlaces } from './Context/useFormPlaces';
import { ControlButtonContainer } from './ControlButtonsContainer';
import { getStyles } from './styles';
import { COUNTRY_ADDRESS_SCHEMAS } from '../../../lib/schemas/country-addresses';
import { NotAvailableInYourRegion } from './Errors/NoAvailableInYourRegion';

export const FormBody = () => {
  const {
    addressComponents,
    getString,
    exit,
    submit,
    isFormValid,
  } = useFormPlaces();

  const classes = getStyles();

  console.log(addressComponents);

  const { country } = addressComponents;

  const formSchema = COUNTRY_ADDRESS_SCHEMAS[country.id.toLowerCase()];

  if (!formSchema) return <NotAvailableInYourRegion onContinue={exit} />;

  console.log(formSchema);

  const disableSubmitBtn = isFormValid();

  return (
    <>
      <p>{getString('FORM_BODY_TEXT')}</p>
      <div className={classnames(classes.formBodyContainer)}>
        <div className={classnames(classes.formBodyRowContainer)}>
          <TextField
            classes={{ root: classes.formInput }}
            label={getString('USER_FULL_ADDRESS_INPUT_LABEL')}
            helperText={getString('USER_FULL_ADDRESS_INPUT_HELPER_TEXT')}
            onChange={console.log}
          />
        </div>
      </div>

      <ControlButtonContainer>
        <Button
          variant="contained"
          color="primary"
          onClick={submit}
          disabled={disableSubmitBtn}
        >
          {getString('STR_CONTINUE')}
        </Button>
        <Button onClick={exit}>{getString('STR_CANCEL')}</Button>
      </ControlButtonContainer>
    </>
  );
};

FormBody.propTypes = {};
FormBody.defaultProps = {};
