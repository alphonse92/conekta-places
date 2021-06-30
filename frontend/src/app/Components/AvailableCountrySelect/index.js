import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { useService } from '../../root/ServiceProvider/use';
import { useLanguage } from '../../root/LanguageProvider/use';
import { getStyles } from './styles';

export const AvailableCountrySelect = ({
  onSelect,
}) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [options, setOptions] = useState([]);
  const { getString } = useLanguage();
  const classes = getStyles();

  const { conekta: service } = useService();

  useEffect(async () => {
    const mapOfCountries = await service.getAvailableCountries();
    const arrayOfCountries = Object.keys(mapOfCountries)
      .reduce(
        (list, id) => [...list, { label: mapOfCountries[id], id }],
        [],
      );
    const [first = {}] = arrayOfCountries;
    const { id: firstId } = first;
    // setOptions([...arrayOfCountries, { id: 'co', label: 'colombia' }]);
    setOptions(arrayOfCountries);
    if (firstId) {
      onSelect(firstId);
      setSelectedValue(firstId);
    }
  }, []);

  const handleChange = (event) => {
    const countryId = event.target.value;
    onSelect(countryId);
    setSelectedValue(countryId);
  };

  return (
    <FormControl classes={{ root: classes.root }}>
      <InputLabel id="demo-simple-select-label">{getString('AVAILABLE_COUNTRY_SELECT_LABEL')}</InputLabel>
      <Select fullWidth value={selectedValue} onChange={handleChange}>
        {options.map(({ id: value, label }) => <MenuItem key={value} value={value}>{label}</MenuItem>)}
      </Select>
    </FormControl>
  );
};

AvailableCountrySelect.defaultProps = {};

AvailableCountrySelect.propTypes = {
  onSelect: PropTypes.func.isRequired,
};
