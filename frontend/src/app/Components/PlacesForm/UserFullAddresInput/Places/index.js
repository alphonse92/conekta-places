import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import _debounce from 'lodash/debounce';
import _get from 'lodash/get';

import { useFormPlaces } from '../../Context/useFormPlaces';
import { getStyles } from '../styles';
import { ControlButtonContainer } from '../../ControlButtonsContainer';
import { findPlacesFromQuery, getPlaceDetails } from '../../../../../lib/helpers/gmaps';
import { extractGoogleGeocodeComponents } from '../../../../../lib/helpers/address';

export function PlacesInput() {
  const {
    getString,
    exit,
    googleAPIKey,
    setAddressComponents,
  } = useFormPlaces();

  const [options, setOptions] = useState([]);
  const [businessName, setBusinessName] = useState();
  const [optionSelected, setOptionSelected] = useState();

  const classes = getStyles();

  const onOptionSelected = async (event, value) => {
    if (!value) {
      setOptionSelected(undefined);
    } else {
      const place = await getPlaceDetails(googleAPIKey, value.id);
      if (place) {
        setOptionSelected(extractGoogleGeocodeComponents(place));
      }
    }
  };

  const onInputChanged = async (event) => {
    try {
      const input = event.target.value;
      const results = await findPlacesFromQuery(googleAPIKey, input);

      const optionResults = results.map(({
        name,
        icon,
        photos,
        place_id: id,
        formatted_address: address,
      }) => ({
        id,
        name,
        icon,
        photos,
        address,
      }));

      setBusinessName(input);
      setOptions(optionResults);
    } catch (e) {
      console.error(e);
    }
  };

  const disableSubmitBtn = !(Boolean(businessName) && businessName.length > 0);
  const getOptionLabel = ({ name }) => name;
  const getOptionSelected = ({ id }) => id;
  const onContinue = async () => {
    setAddressComponents(optionSelected);
  };

  const debouncedOnInputChanged = _debounce(onInputChanged, 250);

  return (
    <>
      <Autocomplete
        options={options}
        onChange={onOptionSelected}
        getOptionLabel={getOptionLabel}
        getOptionSelected={getOptionSelected}
        id="debug"
        debug
        renderInput={(params) => (
          <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...params}
            classes={{ root: classes.root }}
            label={getString('USER_BUSINESS_NAME_INPUT_LABEL')}
            helperText={_get(optionSelected, 'formattedAddress', getString('USER_BUSINESS_NAME_INPUT_HELPER'))}
            onChange={debouncedOnInputChanged}
          />
        )}
      />
      <ControlButtonContainer>
        <Button
          variant="contained"
          color="primary"
          onClick={onContinue}
          disabled={disableSubmitBtn}
        >
          {getString('STR_CONTINUE')}
        </Button>

        <Button onClick={exit}>{getString('STR_CANCEL')}</Button>
      </ControlButtonContainer>
    </>
  );
}

PlacesInput.propTypes = {};

PlacesInput.defaultProps = {};
