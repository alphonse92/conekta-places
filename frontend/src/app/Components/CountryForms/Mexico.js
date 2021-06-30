/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import { getClassAddressByCountry } from 'conekta-places-lib/dist/helpers/country';

import { getStyles } from './styles';
import { Loading } from '../Loading';
import { useLanguage } from '../../root/LanguageProvider/use';
import { useService } from '../../root/ServiceProvider/use';
import { requireSegmentsOrComponents } from './helper';

export default function MexicoForm({
  formId,
  onSubmit,
  addressComponents,
  segments: currentSegments,
}) {
  const MexicoClass = getClassAddressByCountry('mx');
  const MexicoAddress = !currentSegments
    ? new MexicoClass(MexicoClass.getSegmentsFromComponents(addressComponents))
    : new MexicoClass(currentSegments);
  const validationSchema = MexicoAddress.getValidator();

  const classes = getStyles();
  const [segments, setSegments] = useState(MexicoAddress.segments);
  const [administrativeLevelExist, setAdministrativeLevelExist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { getString } = useLanguage();
  const { conekta: service } = useService();

  const refresh = async () => {
    if (!MexicoAddress.getPostalCode()) return;
    setIsLoading(true);
    const administrativeLevelInformation = await service.getAdministrativeLevelsInformationFromPostalCode('mx', MexicoAddress.getPostalCode());
    setIsLoading(false);
    if (administrativeLevelInformation) {
      setSegments({ ...segments, ...administrativeLevelInformation });
      setAdministrativeLevelExist(true);
    }
  };

  useEffect(async () => {
    await refresh();
  }, [currentSegments, addressComponents]);

  const formik = useFormik({
    initialValues: segments,
    onSubmit,
    validationSchema,
    enableReinitialize: true,
  });

  if (isLoading) return <Loading />;

  const getInput = (id, label, isRequired, disabled) => (
    <div className={classnames(classes.inputContainer)}>
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

  return (
    <form id={formId} onSubmit={formik.handleSubmit}>
      <div className={classnames(classes.formBodyContainer)}>
        <div className={classnames(classes.formBodyRowContainer)}>
          {getInput('ciudad', 'Ciudad', true, administrativeLevelExist)}
          {getInput('estado', 'Estado', true, administrativeLevelExist)}
        </div>
        <div className={classnames(classes.formBodyRowContainer)}>
          {getInput('colonia', 'Colonia', true, administrativeLevelExist)}
          {getInput('municipio', 'Delegación', true, administrativeLevelExist)}
        </div>
        <div className={classnames(classes.formBodyRowContainer)}>
          {getInput('codigoPostal', 'Codigo Postal', true)}
        </div>
        <div className={classnames(classes.formBodyRowContainer)}>
          {getInput('calle', 'Calle', true)}
          {getInput('numExt', 'Número exterior', true)}
          {getInput('numInt', 'Número interior', false)}
        </div>
      </div>
    </form>
  );
}

MexicoForm.displayName = 'MexicoForm';
MexicoForm.defaultProps = {
  segments: undefined,
  addressComponents: undefined,
};
MexicoForm.propTypes = {
  formId: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  segments: requireSegmentsOrComponents,
  addressComponents: requireSegmentsOrComponents,
};
