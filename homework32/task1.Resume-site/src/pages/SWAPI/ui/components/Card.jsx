import {useSelector} from "react-redux";
import swapiSelectors from "../../../../shared/core/redux/Selectors/swapiSelectors.js";
import {Box, Container, Chip, CircularProgress, Typography, TextField} from "@mui/material";

export default function Card() {
    const isLoading = useSelector(swapiSelectors.loader)
    const data = useSelector(swapiSelectors.data)
    const action = useSelector(swapiSelectors.action);
    const parts = action.split('/');
    return (
        <>
            <Container maxWidth="ml" className="card">
                <Box sx={{ bgcolor: '#cfe8fc', p: '20px' }} >
                    <Chip  label={parts[1]}/>
                    <Chip  label={parts[2]}/>
                    { isLoading
                        ? <CircularProgress />
                        : <TextField
                            id="standard-multiline-static"
                            // label="Multiline"
                            multiline
                            defaultValue=""
                            variant="standard"
                            fullWidth
                            value = {JSON.stringify(data, null, 2)}
                        >
                            {JSON.stringify(data, null, 2)}
                        </TextField>
                    }
                </Box>
            </Container>

        </>
    )
}
