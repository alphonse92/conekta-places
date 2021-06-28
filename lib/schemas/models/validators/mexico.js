import * as yup from 'yup';

export default yup.object({
  calle: yup.string().required('INPUT_REQUIRED'),
  numExt: yup.string().required('INPUT_REQUIRED'),
  numInt: yup.string(),
  codigoPostal: yup.string().required('INPUT_REQUIRED'),
  colonia: yup.string().required('INPUT_REQUIRED'),
  municipio: yup.string().required('INPUT_REQUIRED'),
  ciudad: yup.string().required('INPUT_REQUIRED'),
  estado: yup.string().required('INPUT_REQUIRED'),
  pais: yup.string().required('INPUT_REQUIRED'),
});
