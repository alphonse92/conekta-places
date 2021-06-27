/* eslint-disable no-nested-ternary */
import React from 'react';
import classnames from 'classnames';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useFormPlaces } from '../Context/useFormPlaces';
import { getStyles } from './styles';
import mexicoValidatorSchema from '../../../../lib/schemas/models/validators/mexico';
import { ControlButtonContainer } from '../ControlButtonsContainer';
import { getCountrySegmentsExtrator } from '../../../../lib/helpers/address';

export default function MexicoForm() {
  const {
    addressComponents = {},
    getString,
    submit,
    exit,
  } = useFormPlaces();

  const initialValues = getCountrySegmentsExtrator('mx')(addressComponents);

  const classes = getStyles();

  const formik = useFormik({
    initialValues,
    validationSchema: mexicoValidatorSchema,
    onSubmit: submit,
  });

  const containErrors = Boolean(Object.keys(formik.errors).length);
  const getInput = (inputUniqueName, isRequired) => (
    <div className={classnames(classes.formBodyRowContainer)}>
      <TextField
        fullWidth
        id={inputUniqueName}
        name={inputUniqueName}
        label={inputUniqueName}
        value={formik.values[inputUniqueName]}
        onChange={formik.handleChange}
        error={formik.touched[inputUniqueName] && Boolean(formik.errors[inputUniqueName])}
        helperText={(
          (formik.touched[inputUniqueName] && formik.errors[inputUniqueName])
            ? getString(formik.errors[inputUniqueName] || 'INPUT_ERROR_DEF')
            : (
              isRequired
                ? getString('INPUT_REQUIRED_HELPER')
                : undefined
            )
        )}
      />
    </div>
  );

  return (
    <>
      <p>{getString('FORM_BODY_TEXT')}</p>
      <form onSubmit={formik.handleSubmit}>
        <div className={classnames(classes.formBodyContainer)}>
          {getInput('estado', true)}
          {getInput('ciudad', true)}
          {getInput('colonia', true)}
          {getInput('municipio', true)}
          {getInput('calle', true)}
          {getInput('codigoPostal', true)}
          {getInput('numExt', true)}
          {getInput('numInt', false)}
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
