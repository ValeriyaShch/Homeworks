import {Typography, Stack} from "@mui/material";

function About() {
  return (
    <>
      <Stack spacing={3} direction='column'>
      <Typography component="h1" variant="h5">About</Typography>
      <Typography component="p">
        Our company has grown from a small Dutch startup to one of the world’s leading
        digital travel companies. Booking mission is to make it
        easier for everyone to experience the world.</Typography>
      <Typography component="p">
        By investing in the technology that helps take the friction out of travel, Booking seamlessly connects
        millions of travellers with memorable experiences, a range of transport options and incredible places to stay -
        from homes to hotels and much more. As one of the world’s largest travel marketplaces for both established
        brands and entrepreneurs of all sizes, Booking enables properties all over the world to reach a global
        audience and grow their businesses.</Typography>
      <Typography component="p">
        Booking is available in 43 languages and offers more than 28 million total reported accommodation listings,
        including over 6.6 million listings alone of homes, apartments and other unique places to stay. No matter where
        you want to go or what you want to do, Booking makes it easy and backs it all up with 24/7 customer support.
      </Typography>
        </Stack>

    </>
  )
}

export default About
