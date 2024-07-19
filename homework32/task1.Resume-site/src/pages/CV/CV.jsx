import {Box, Container, Card, Typography, Paper, CardContent, Grid} from "@mui/material";

function CV() {
    return (
        <Container>
            <Paper square elevation={5}>
                <Box sx={{minWidth: 275, mb:'20px', mt:'20px'}}>
                    <Grid container spacing={2}>
                        <Grid xs={4}>
                            <Card variant='outlined' sx={{height:'250px'}}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Valeriia Shcherbyna
                                    </Typography>
                                    <Typography sx={{mb: 1.5}} color="gray">
                                        Front-end engineer
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs={8}>
                            <Card variant='outlined'  sx={{height:'250px'}}>
                                <CardContent>

                                    <Typography variant="h5" component="div">
                                        Junior Front-end engineer
                                    </Typography>
                                    <Typography sx={{fontSize:14}} color="gray" gutterBottom>
                                        Responsibilities:
                                    </Typography>
                                    <Typography variant="body2">
                                        Development, bug-fixing
                                    </Typography>
                                    <Typography sx={{fontSize:14}} color="gray" gutterBottom>
                                        Tech stack:
                                    </Typography>
                                    <Typography variant="body2" >
                                        JS, React, Redux, Node.js
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>

            <Paper elevation={5}>
                <Box sx={{minWidth: 275, mb:'20px', mt:'20px'}}>
                    <Grid container spacing={2}>
                        <Grid xs={4}>
                            <Card variant='outlined' sx={{height:'150px'}}>
                                <CardContent>
                                    <Typography sx={{mb: 1.5}} color="gray">
                                        Previous experience:
                                    </Typography>
                                    <Typography variant="h6" component="div">
                                        Junior Front-end developer
                                    </Typography>
                                    <Typography variant="h8" component="div" color="gray"   >
                                        at SmartElectornics Systems
                                    </Typography>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs={8}>
                            <Card variant='outlined'  sx={{height:'150px'}}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Technologies used:
                                    </Typography>
                                    <Typography variant="body2">
                                        JS, React, Redux, Node.js
                                    </Typography>
                                    <Typography sx={{fontSize:14}} color="gray" gutterBottom>
                                        Tools used:
                                    </Typography>
                                    <Typography variant="body2" >
                                        JIRA, GIT
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>

            </Paper>
        </Container>
    )
}

export default CV
