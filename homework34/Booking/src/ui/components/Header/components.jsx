import {styled, Box} from "@mui/material";

export const Wrapper = styled(Box) ({
  display: 'flex',
  padding: '20px',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid grey',
  boxShadow: '0px 2px 3px grey'
})

export const Icon = styled(Box)(({theme}) => ({
  width: '50px',
  height: '50px',
  marginRight: '10px',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main
}))
