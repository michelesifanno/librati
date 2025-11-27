import { Box, Container, Typography, Button, useMediaQuery, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';



function PrenotaSection() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // true se sotto 'md'

    return (
        <Box sx={{ pt: isMobile ? 0 : 0, pb: isMobile ? 5 : 10, display: 'flex' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={isMobile ? 2 : 2}>
                        <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                            <img src='cta-img.png' alt='prenota immagine' style={{ width: '100%', height: isMobile ? '450px' : '600px', objectFit: 'cover' }} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', flexDirection: 'column', gap: 0, p: isMobile ? 2 : 4  }}>
                            <em>
                                <Typography variant='h2' className="cta-title">
                                    Prenota un tavolo
                                </Typography>
                            </em>
                            <Button variant="outlined" size="large" className='call-button-slider' component="a" href="tel:+393292115340">
                                +39 329 211 5340
                            </Button>
                            <br /><br />
                            <Typography variant='body1' className="orange-paragraph">
                                Ti basterà chiamare per prenotare
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }} sx={{ display: 'flex', flexDirection: 'column', gap: 0, justifyContent: 'flex-end' }}>
                            <Typography variant='body1' className="orange-paragraph">
                                Siamo aperti tutti i giorni,
                            </Typography>
                            <Typography variant='body1' className="orange-paragraph">
                                dalle 20:00 alle 03:00.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
    );
}

export default PrenotaSection;