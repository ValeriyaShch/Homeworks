import {useHotels} from "./hooks/useHotels.js";
import HotelItem from "../../components/HotelItem.jsx";
import {Grid, Typography} from "@mui/material";

function Index() {
  const {items} = useHotels();
  return (
    <>
      <Typography component="h1" variant="h3" gutterBottom>Hotels:</Typography>
      <Grid container>
        {items.map((item) => (
            <Grid xs={12} sm={4} sx={{marginBottom: '30px'}}>
              <HotelItem key={item.id}
                         address={item.address}
                         name={item.name}
                         state={item.state}
                         city={item.city}
                         countryCode={item.country_code}
                         hotelRating={item.hotel_rating}
              />
            </Grid>
          )
        )}
      </Grid>
    </>
  )
}

export default Index
