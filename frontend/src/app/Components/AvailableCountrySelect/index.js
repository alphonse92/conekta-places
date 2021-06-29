import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { useService } from '../../root/ServiceProvider/use';
import { useLanguage } from '../../root/LanguageProvider/use';

export const AvailableCountrySelect = ({
  value: selectedValue,
  onSelect,
}) => {
  const [options, setOptions] = useState([]);
  const { getString } = useLanguage();

  const { conekta: service } = useService();

  useEffect(async () => {
    const mapOfCountries = await service.getAvailableCountries();
    const arrayOfCountries = Object.keys(mapOfCountries)
      .reduce(
        (list, id) => [...list, { label: mapOfCountries[id], id }],
        [],
      );
    setOptions(arrayOfCountries);
    onSelect(arrayOfCountries[0].id);
  }, []);

  const handleChange = (event) => {
    onSelect(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">{getString('AVAILABLE_COUNTRY_SELECT_LABEL')}</InputLabel>
      <Select
        value={selectedValue}
        onChange={handleChange}
      >
        {options.map(({ id: value, label }) => <MenuItem key={value} value={value}>{label}</MenuItem>)}
      </Select>
    </FormControl>
  );
};

AvailableCountrySelect.defaultProps = {
  value: undefined,
};

AvailableCountrySelect.propTypes = {
  value: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
};
