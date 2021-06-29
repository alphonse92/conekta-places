import React, { useEffect, useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



export const AvailableCountrySelect = () => {
  const [options, setOptions] = useState();

  useEffect(async () => {
    const service = createService();
    const mapOfCountries = await service.getAvailableCountries();
    const arrayOfCountries = Object.keys(mapOfCountries)
      .reduce(
        (list, id) => [...list, { label: arrayOfCountries[id], id }],
        [],
      );
    setOptions(arrayOfCountries);
  }, []);

  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  )


};
