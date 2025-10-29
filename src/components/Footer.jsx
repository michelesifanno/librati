import { Box, Typography, Container, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';



function Footer() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // true se sotto 'md'


    return (
        <>
            <Box sx={{ pt: 4, backgroundColor: '#ff5700', color: 'white' }}>
                <Container maxWidth="lg" sx={{ pb: 5 }}>
                    <Grid container spacing={isMobile ? 5 : 30}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Typography component='p' sx={{ fontSize: '14px' }}>
                                <b>Librati Cocktail Bar</b>
                                <br />
                                <br />
                                +39 329 211 5340<br />
                                Via Crocifisso, 10
                                <br />
                                70054 Giovinazzo BA
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                            <Typography component='p' sx={{ fontSize: '14px' }}>
                                Siamo aperti tutti i giorni,
                                <br />
                                dalle 20:00 alle 03:00
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Typography component='h2' sx={{ fontSize: '40px', textAlign: 'right', letterSpacing: '-2px', lineHeight: '35px' }}>
                                Siamo a due passi dal centro e dal mare.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>

                <Container maxWidth="lg">
                    <Grid container spacing={isMobile ? 5 : 30}>
                        <Grid size={{ xs: 12 }}>
                            <Typography component='h2' sx={{ fontSize: '40px', textAlign: 'left', letterSpacing: '-2px', lineHeight: '35px' }}>
                                <a
    href="https://www.instagram.com/librati_dal.male_official/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: 'inherit', textDecoration: 'none' }}
  >
    Instagram.
  </a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ pt: 4, backgroundColor: '#ff5700', color: 'white' }}>
                <Grid container justifyContent="center" spacing={0} sx={{marginBottom:'-10px'}}>

                    <Grid size={{ xs: 3 }}>
                        <img src='1.png' alt='final gallery' style={{ width: '100%', height: isMobile ? '120px' : '300px', objectFit: 'cover' }} />
                    </Grid>

                    <Grid size={{ xs: 3 }}>
                        <img src='4.png' alt='final gallery' style={{ width: '100%', height: isMobile ? '120px' : '300px', objectFit: 'cover' }} />
                    </Grid>

                    <Grid size={{ xs: 3 }}>
                        <img src='8.png' alt='final gallery' style={{ width: '100%', height: isMobile ? '120px' : '300px', objectFit: 'cover' }} />
                    </Grid>

                    <Grid size={{ xs: 3 }}>
                        <img src='9.png' alt='final gallery' style={{ width: '100%', height: isMobile ? '120px' : '300px', objectFit: 'cover' }} />
                    </Grid>

                </Grid>
            </Box>
        </>
    );
}

export default Footer;