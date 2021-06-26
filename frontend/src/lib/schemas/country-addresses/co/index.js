export default {
  calle: {
    type: String,
    title: 'Calle',
    default: '',
    required: true,
  },
  numExt: {
    type: String,
    title: 'Número Exterior',
    default: '',
    required: true,
  },
  numInt: {
    type: String,
    title: 'Número Interior',
    default: '',
  },
  postalCode: {
    type: Number,
    title: 'Código Postal',
    default: '',
    required: true,
  },
  colonia: {
    type: String,
    title: 'Colonia',
    default: '',
    required: true,
  },
  municipio: {
    type: String,
    title: 'Municipio / Delegación',
    default: '',
    required: true,
  },
  ciudad: {
    type: String,
    title: 'Ciudad',
    default: '',
    required: true,
  },
  estado: {
    type: String,
    title: 'Estado',
    default: '',
    required: true,
  },
};
