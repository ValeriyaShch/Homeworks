import {TextField} from "@mui/material";
import PropTypes from "prop-types";

export function Input(props) {
  const {meta, input: {value, onChange, type}, disabled, label, fullWidth, InputProps} = props;
  const error = meta.touched && meta.error;
  return (
    <TextField
      error={error}
      helperText={error}
      value={value}
      onChange={onChange}
      disabled={disabled}
      type={type}
      label={label}
      fullWidth={fullWidth}
      InputProps={InputProps}
    />
  )
}

Input.propTypes = {
  meta: PropTypes.object,
  input: PropTypes.object,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  InputProps: PropTypes.object
}
