import {useSelector} from "react-redux";
import selectors from "../../core/redux/selectors.js";
import {Box, Container, Chip, CircularProgress, Typography, TextField} from "@mui/material";

export default function Card() {
    const isLoading = useSelector(selectors.loader)
    const data = useSelector(selectors.data)
    const action = useSelector(selectors.action);
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
