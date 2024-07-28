import {LoadingButton} from "@mui/lab";
import {Button as ButtonMUI} from "@mui/material";
import {LinkWrapper} from "./components.jsx";
import PropTypes from "prop-types"

export function Button(props) {
  const {reactHref, children, color = '#fff', type = 'button', disabled, loading, sx} = props;
  if (loading) {
    return <LoadingButton variant="outlined" loading sx={sx}>{children}</LoadingButton>
  }
  return (
    <ButtonMUI disabled={disabled} type={type} sx={{ color, ...sx }} variant="contained">
      {reactHref ? <LinkWrapper to={reactHref}>{children}</LinkWrapper> : children}
    </ButtonMUI>
  )
}

Button.propTypes = {
  reactHref: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
    PropTypes.node,
  ]),
  color: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  sx: PropTypes.object
}
