import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as DatePickerMUI } from '@mui/x-date-pickers/DatePicker';
import PropTypes from "prop-types";

export default function DatePicker(props) {
  const {label, input: {onChange, value}, disabled, fullWidth, meta} = props;
  const error = meta.touched && meta.error;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePickerMUI
          label={label}
          disabled={disabled}
          onChange={onChange}
          value={value || null}
          slotProps={{textField:{fullWidth, helperText: error, error: error}}}
        />
    </LocalizationProvider>
  );
}

DatePicker.propTypes = {
  meta: PropTypes.object,
  input: PropTypes.object,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  label: PropTypes.string
}
