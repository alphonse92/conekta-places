import React from 'react';
import { GetStarted } from './GetStarted';
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
    userHasStarted,
    addressComponents,
    googleAPIKey,
    isLoading,
  } = useFormPlaces();

  console.log({ addressComponents });

  if (isLoading) return <Loading />;
  if (!userHasStarted) return <GetStarted />;
  if (!addressComponents && googleAPIKey) return <UserFullAddresInput />;

  return <FormBody />;
};

FormContainer.propTypes = {};

FormContainer.defaultProps = {};
