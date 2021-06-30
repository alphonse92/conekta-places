/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getClassAddressByCountry } from 'conekta-places-lib/dist/helpers/country';

import { useFormPlaces } from '../Context/useFormPlaces';
import { getStyles } from './styles';
import { ControlButtonContainer } from '../ControlButtonsContainer';
import { Loading } from '../../Loading';
import { InfoDialog } from '../Dialogs/InfoDialog';
import { useService } from '../../../root/ServiceProvider/use';
import { useLanguage } from '../../../root/LanguageProvider/use';

export default function MexicoForm() {
  const {
    addressComponents = {},
    submit,
    exit,
  } = useFormPlaces();

  const { getString } = useLanguage();

  const { conekta: service } = useService();

  const MexicoClass = getClassAddressByCountry('mx');
  const MexicoAddress = MexicoClass.createInstanceFromComponents(addressComponents);
  const validationSchema = MexicoAddress.getValidator();

  const [initialValues, setInitialValues] = useState(MexicoAddress.segments);
  const [isLoading, setIsLoading] = useState(false);
  const [administrativeLevelExist, setAdministrativeLevelExist] = useState(false);
  const [apiSaveResult, setApiSaveResult] = useState();

  const registerSuccessfuly = apiSaveResult && apiSaveResult.result;

  useEffect(async () => {
    if (!initialValues.codigoPostal) return;
    setIsLoading(true);
    const administrativeLevelInformation = await service.getAdministrativeLevelsInformationFromPostalCode('mx', initialValues.codigoPostal);
    setIsLoading(false);
    if (administrativeLevelInformation) {
      const newInitValues = { ...MexicoAddress.segments, ...administrativeLevelInformation };
      setInitialValues(newInitValues);
      setAdministrativeLevelExist(true);
    }
  }, []);

  const onSubmit = async (values) => {
    try {
      const result = await submit(values);
      setApiSaveResult({ result, ok: true });
    } catch (e) {
      console.log(e);
      setApiSaveResult({ ok: false });
    }
  };

  const classes = getStyles();

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    enableReinitialize: true,
  });

  const containErrors = Boolean(Object.keys(formik.errors).length);
  const getInput = (id, label, isRequired, disabled) => (
    <div className={classnames(classes.formBodyRowContainer)}>
      <TextField
        fullWidth
        id={id}
        name={id}
        label={label}
        value={formik.values[id]}
        onChange={formik.handleChange}
        disabled={disabled}
        error={formik.touched[id] && Boolean(formik.errors[id])}
        helperText={(
          (formik.touched[id] && formik.errors[id])
            ? getString(formik.errors[id] || 'INPUT_ERROR_DEF')
            : (
              isRequired
                ? getString('INPUT_REQUIRED_HELPER')
                : undefined
            )
        )}
      />
    </div>
  );

  const onAccept = () => {
    if (registerSuccessfuly) {
      exit(true);
    }
    setApiSaveResult(undefined);
  };

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <InfoDialog
        isOpen={apiSaveResult}
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
      <form onSubmit={formik.handleSubmit}>
        <div className={classnames(classes.formBodyContainer)}>
          {getInput('estado', 'Estado', true, administrativeLevelExist)}
          {getInput('ciudad', 'Ciudad', true, administrativeLevelExist)}
          {getInput('colonia', 'Colonia', true, administrativeLevelExist)}
          {getInput('municipio', 'Delegación', true, administrativeLevelExist)}
          {getInput('calle', 'Calle', true)}
          {getInput('codigoPostal', 'Codigo Postal', true)}
          {getInput('numExt', 'Número exterior', true)}
          {getInput('numInt', 'Número interior', false)}
        </div>
        <ControlButtonContainer>
          <Button
            variant="contained"
            color="primary"
            disabled={containErrors}
            type="submit"
          >
            {getString('STR_CONTINUE')}
          </Button>
          <Button onClick={exit}>{getString('STR_CANCEL')}</Button>
        </ControlButtonContainer>
      </form>

    </>
  );
}

MexicoForm.propTypes = {};
MexicoForm.defaultProps = {};
