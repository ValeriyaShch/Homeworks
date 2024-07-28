import {styled} from "@mui/material";
import {Link} from "react-router-dom";

export const Wrapper = styled(Link)(({theme}) => {
  return ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.palette.primary.main,
    fontSize: '24px',
    fontWeight: 'bold'
  })
})
