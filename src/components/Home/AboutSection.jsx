import { Box, Container, Typography, useMediaQuery, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';



function AboutSection() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // true se sotto 'md'

    return (

        <Box sx={{ pt: 10, display: 'flex' }} id='about'>
            <Container maxWidth="lg">
                <Grid container spacing={isMobile ? 5 : 30}>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                        <Typography variant='h2' className="title">
                            Più che un<br />locale, una<br />seconda casa.
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant='body1' className="paragraph">
                            <b>Un posto dove vieni per bere, ma resti per le persone.</b>
                        </Typography>
                        <br />
                        <Typography variant='body1' className="paragraph">
                            Birre ghiacciate, cocktail curati e un’atmosfera che ti accoglie come una famiglia.
                            Il Librati è il cocktail bar di riferimento a Giovinazzo.
                            Qui puoi venire da solo, ma da solo non resti mai.
                            Tra un drink preparato con cura, una birra fresca e due chiacchiere al bancone, trovi sempre qualcuno con cui condividere un sorriso.
                            Da anni ci impegniamo a far sentire tutti a casa.
                            Ogni cliente è parte di una grande famiglia fatta di amicizia, relax e autenticità.
                            Che tu venga per un aperitivo, per un dopocena tranquillo o solo per fare due chiacchiere, al Librati trovi sempre il tuo posto.
                        </Typography>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default AboutSection;