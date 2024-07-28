import {FormControl, FormHelperText, InputLabel, MenuItem, Select as SelectMUI} from "@mui/material";
import PropTypes from "prop-types";
import {Button} from "./Button/index.jsx";

export default function Select(props) {
  const {options, label, input: {onChange, value}, disabled, meta} = props;
  const error = meta.touched && meta.error;
  return (
    <FormControl fullWidth>
      <InputLabel error={error}>{label}</InputLabel>
      <SelectMUI onChange={onChange} value={value} label={label} disabled={disabled} error={!!error}>
        {options.map(item => <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>)}
      </SelectMUI>
      {error && <FormHelperText error>{error}</FormHelperText>}
    </FormControl>
  )
}

Select.propTypes = {
  options: PropTypes.instanceOf(Array),
  label: PropTypes.string,
  input: PropTypes.object,
  disabled: PropTypes.bool,
  meta: PropTypes.object
}
