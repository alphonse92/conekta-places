import React from 'react';
import { useFormPlaces } from './Context/useFormPlaces';
import { UserFullAddresInput } from './UserFullAddresInput';
import { Loading } from './Loading';
import { FormBody } from './Form';

/**
 * This component handles the user interaction along the stages the user directions flow
 * @returns {React.Component} Form container component
 */
export const FormContainer = () => {
  const {
    addressComponents,
    isLoading,
  } = useFormPlaces();

  if (isLoading) return <Loading />;
  if (!addressComponents) return <UserFullAddresInput />;

  return <FormBody />;
};

FormContainer.propTypes = {};

FormContainer.defaultProps = {};
