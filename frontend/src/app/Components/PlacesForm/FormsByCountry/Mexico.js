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

  return (
    <>
      <p>{getString('FORM_BODY_TEXT')}</p>
      <form onSubmit={formik.handleSubmit}>
        <div className={classnames(classes.formBodyContainer)}>
          {getInput('estado', 'Estado', true)}
          {getInput('ciudad', 'Ciudad', true)}
          {getInput('colonia', 'Colonia', true)}
          {getInput('municipio', 'Municipio', true)}
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
