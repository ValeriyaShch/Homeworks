import {useDispatch, useSelector} from "react-redux";
import swapiSlice from "../../../../shared/core/redux/Slices/swapiSlice.js";
import swapiSelectors from "../../../../shared/core/redux/Selectors/swapiSelectors.js";
import {swapiAsyncActins} from "../../../../shared/core/saga/asyncActions.js";
import {Box, Button, Chip, FormControl, InputLabel, Paper, OutlinedInput, Typography} from "@mui/material";

export default function Form() {
    const dispatcher = useDispatch();
    const isLoading = useSelector(swapiSelectors.loader)
    const defaultAction = useSelector(swapiSelectors.action)
    const onSubmit = async (event) => {
        event.preventDefault();
        dispatcher(swapiAsyncActins.getSwapiDataAsync(event.target.url.value))
    }
    return (
        <>
            <Typography variant="h4" component="h3" sx={{mb: '15px'}} >
                SWAPI
            </Typography>

            <Paper elevation={10} sx={{mb: '15px'}} >
                <Box sx={{display: 'flex', p: '10px' , alignItems: 'center'}}
                    component="form"
                    className="input-group mb-3"
                    onSubmit={onSubmit}
                    autoComplete="off"
                >
                    <Chip label="https://swapi.dev/api"/>
                    <FormControl sx={{flexGrow: 1}}>
                        <InputLabel htmlFor="component-outlined">Enter URL</InputLabel>
                        <OutlinedInput
                            id="component-outlined"
                            defaultValue='/people/1'
                            label="Enter URL"
                            name="url"
                        />
                    </FormControl>

                    <Button
                        disabled={isLoading}
                        type="submit"
                        sx={{maxWidth: '100px'}}
                    >
                        Get Info
                    </Button>
                </Box>
            </Paper>
        </>
    )
}
