import Link from "../shared/ui/Link.jsx";
import {Box, AppBar, Toolbar, Typography, Container} from "@mui/material";


function Header() {
    return (
        <header>
                <Box sx={{mb: '15px'}}>
                    <AppBar position="static">
                        <Container maxWidth="lg">
                        <Toolbar sx={{display:'flex', gap:'30px'}}>
                            <Typography variant="h6" component="div" >
                                <Link to="/" type="NavLink">Головна</Link>
                            </Typography>
                            <Typography variant="h6" component="div" >
                                <Link to="/todo" type="NavLink">TODO</Link>
                            </Typography>
                            <Typography variant="h6" component="div" >
                                <Link to="/swapi" type="NavLink">SWAPI</Link>
                            </Typography>
                        </Toolbar>
                        </Container>
                    </AppBar>
                </Box>

        </header>
    )
}

export default Header;