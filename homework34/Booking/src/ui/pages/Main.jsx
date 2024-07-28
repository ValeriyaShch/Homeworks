import {Box, Typography} from "@mui/material";
import {BookingForm} from "../components/BookingForm/Form.jsx";

function Main() {
  return (
    <>
      <BookingForm />
      <Box component="h6" sx={{fontSize: '40px', marginBottom: 2}}>
        Travel with <Box component="span" sx={{color: 'primary.main'}}>Booking</Box>
      </Box>
      <Typography component="p">
        Booking is available in 43 languages and offers more than 28 million total reported accommodation listings,
        including over 6.6 million listings alone of homes, apartments and other unique places to stay. No matter where
        you want to go or what you want to do, Booking makes it easy and backs it all up with 24/7 customer support.
      </Typography>
    </>
  )
}

export default Main
