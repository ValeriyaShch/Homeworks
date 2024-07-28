import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import PropTypes from "prop-types";

export default function HotelItem(props) {
  const {address, city, countryCode, state, name, hotelRating} = props;
  return (
    <Card sx={{maxWidth: 345}}>
      <CardMedia component='img' height='140' image='https://via.placeholder.com/140' />
      <CardContent>
        <Typography component="h5" variant="h5" gutterBottom>{name}</Typography>
        <Typography component="span" gutterBottom>Rating: {hotelRating}</Typography>
        <Typography component="p" gutterBottom>Address: {address}</Typography>
        <Typography component="p" gutterBottom>Country code: {countryCode}</Typography>
        <Typography component="p" gutterBottom>State: {state}</Typography>
        <Typography component="p" gutterBottom>City: {city}</Typography>
      </CardContent>
    </Card>
  )
}

HotelItem.propTypes = {
  address: PropTypes.string,
  city: PropTypes.string,
  countryCode: PropTypes.string,
  state: PropTypes.string,
  name: PropTypes.string,
  hotelRating: PropTypes.number
}
