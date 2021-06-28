/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import mexicoValidatorSchema from 'conekta-places-lib/schemas/models/validators/mexico';
import { getCountrySegmentsExtrator } from 'conekta-places-lib/helpers/address';

import { useFormPlaces } from '../Context/useFormPlaces';
import { getStyles } from './styles';
import { ControlButtonContainer } from '../ControlButtonsContainer';
import { Loading } from '../Loading';

export default function MexicoForm() {
  const {
    addressComponents = {},
    getString,
    submit,
    exit,
    getService,
  } = useFormPlaces();

  const extractedFeatures = getCountrySegmentsExtrator('mx')(addressComponents);

  const [initialValues, setInitialValues] = useState(extractedFeatures);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    const service = getService();
    setIsLoading(true);
    const administrativeLevelInformation = await service.getAdministrativeLevelsInformationFromPostalCode('mx', initialValues.codigoPostal);
    setIsLoading(false);
    if (administrativeLevelInformation) {
      const newvalsx = { ...extractedFeatures, ...administrativeLevelInformation };
      console.log(newvalsx);
      setInitialValues(newvalsx);
    }
  }, []);

  const classes = getStyles();

  const formik = useFormik({
    initialValues,
    validationSchema: mexicoValidatorSchema,
    onSubmit: submit,
    enableReinitialize: true,
  });

  const containErrors = Boolean(Object.keys(formik.errors).length);
  const getInput = (id, label, isRequired) => (
    <div className={classnames(classes.formBodyRowContainer)}>
      <TextField
        fullWidth
        id={id}
        name={id}
        label={label}
        value={formik.values[id]}
        onChange={formik.handleChange}
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

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <p>{getString('FORM_BODY_TEXT')}</p>
      <form onSubmit={formik.handleSubmit}>
        <div className={classnames(classes.formBodyContainer)}>
          {getInput('estado', 'Estado', true)}
          {getInput('ciudad', 'Ciudad', true)}
          {getInput('colonia', 'Colonia', true)}
          {getInput('municipio', 'Delegación', true)}
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
