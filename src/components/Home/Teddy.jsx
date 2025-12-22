import { Box, Container, Typography, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import 'animate.css'


function Teddy() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // true se sotto 'md'

    return (

        <Box sx={{ py: 10, display: 'flex' }} id="teddy">
            <Container maxWidth="lg">
                <Grid container spacing={isMobile ? 5 : 30} sx={{ alignItems: 'center' }}>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', gap: 0 }} className="animate__animated animate__fadeInLeft">
                        <Typography variant='h2' className="title">
                            Teddy
                        </Typography>

                        <div style={{ padding: isMobile ? '40px 20px 0px 20px' : '60px' }}>
                            <Typography variant='body1' className="paragraph">
                                <b>Barman, come altro non potrebbe essere.</b>
                            </Typography>
                            <br />
                            <Typography variant='body1' className="paragraph">
                                Teddy ama i cocktail, le storie dietro ogni bottiglia e i sorrisi davanti al bancone. Gli piace ospitare, ascoltare, far ridere e consigliare drink che sanno sempre sorprendere. È uno di quelli con cui non ti annoi mai, perché Teddy è il cuore del Librati. Capisce l’equilibrio perfetto tra dolce e amaro, tra profumo e sapore, tra tecnica e istinto. Shakera con passione, dosa con precisione — e, se sei fortunato, potresti vederlo creare qualcosa solo per te.
                            </Typography>



                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} className="animate__animated animate__fadeIn">
                        <img src='teddy_rutigliano.webp' alt='teddy librati' style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Teddy;