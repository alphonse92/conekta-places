export const requireSegmentsOrComponents = (props, propName, componentName) => {
  if (!props.segments && !props.addressComponents) {
    throw new Error(`Segments or components are required by ${componentName}`);
  }
};
