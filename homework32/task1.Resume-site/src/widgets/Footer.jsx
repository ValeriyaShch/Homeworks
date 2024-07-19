
import {AppBar, Box, Container, Toolbar, Link} from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <footer>
            <Box>
                <AppBar position="static">
                    <Container maxWidth="lg" >
                        <Toolbar sx={{display:'flex', justifyContent: 'space-between'}}>
                            <Link sx={{color:'white', display: 'flex', alignItems: 'center', gap: '10px'}} href="tel:+123123123"><LocalPhoneIcon />+123123123</Link>
                            <Link sx={{color:'white', display: 'flex', alignItems: 'center', gap: '10px'}} href="mailto: someone@example.com"><EmailIcon />someone@example.com</Link>
                            <Link sx={{color:'white', display: 'flex', alignItems: 'center', gap: '10px'}} href="https://github.com/"><GitHubIcon />My GitHub</Link>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </footer>
    )
}

export default Footer;