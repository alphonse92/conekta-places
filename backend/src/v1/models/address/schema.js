export default () => ({
  name: 'Addresses',
  schema: {
    countryId: {
      type: 'String',
      required: true,
    },
    segments: {
      type: Object,
      required: true,
    },
  },
});
