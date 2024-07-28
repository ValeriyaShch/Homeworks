import {Field, Form} from "react-final-form";
import {Box, Grid} from "@mui/material";
import {Button} from "../Button/index.jsx";
import Select from "../Select.jsx";
import {Input} from "../Input.jsx";
import DatePicker from "../DatePicker.jsx";
import {useDestination} from "./hooks/useDestination.js";
import validate from "../../../helpers/form.js"

export function BookingForm() {
  const {items, loading, handleSubmit} = useDestination();
  return (
    <Form onSubmit={handleSubmit} render={({handleSubmit}) => {
      return (
        <Box sx={{display: 'flex', margin: '30px 0'}} component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={3}>
              <Field
                name="destination"
                label="Destination"
                component={Select}
                disabled={loading}
                options={items}
                validate={validate.required}
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <Field
                name="check_in"
                label="Check in"
                component={DatePicker}
                disabled={loading}
                type="number"
                validate={validate.required}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <Field
                name="check_out"
                label="Check out"
                component={DatePicker}
                disabled={loading}
                type="number"
                fullWidth
              />
            </Grid>
            <Grid item xs={6} lg={1}>
              <Field
                name="adults"
                label="Adults"
                component={Input}
                disabled={loading}
                type="number"
                validate={validate.required}
                fullWidth
                InputProps={{inputProps: {min: 0}}}
                 />
            </Grid>
            <Grid item xs={6} lg={1}>
              <Field
                name="children"
                label="Children"
                component={Input}
                disabled={loading}
                type="number"
                fullWidth
                InputProps={{inputProps: {min: 0}}}
              />
            </Grid>
            <Grid item xs={12} lg={1}>
              <Button loading={loading} type="submit" sx={{width: '100%', height: '55px'}}>Submit</Button>
            </Grid>
          </Grid>
        </Box>
      )
    }}
    />
  )
}
