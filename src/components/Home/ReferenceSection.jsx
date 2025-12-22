import { Box, Container, Typography, Button, useMediaQuery, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import 'animate.css'


function ReferenceSection() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // true se sotto 'md'

    return (
        <>
            {isMobile ? (null) : (
                <Box sx={{ pt: isMobile ? 0 : 10, display: 'flex' }} >
                    <Container sx={{ minWidth: '100%!important', p: '0px!important', maxWidth: '100%!important' }} >
                        <Grid container spacing={isMobile ? 5 : 10} sx={{ alignItems: 'center' }}>
                            <Grid size={{ xs: 6, md: 6 }} sx={{ textAlign: 'left' }} className="animate__animated animate__fadeInLeft">
                                <img src='photo-7.webp' alt='final image home' style={{ width: isMobile ? '100%' : '45%', height: isMobile ? '100%' : '300px', objectFit: 'cover' }} />
                            </Grid>

                            <Grid size={{ xs: 6, md: 6 }} sx={{ textAlign: 'right' }} className="animate__animated animate__fadeInRight">
                                <img src='photo-3.webp' alt='final image home' style={{ width: isMobile ? '100%' : '45%', height: isMobile ? '100%' : '300px', objectFit: 'cover' }} />
                            </Grid>

                        </Grid>
                    </Container>
                </Box>
            )
            }
            <Box sx={{ py: isMobile ? 5 : 10, display: 'flex', mt: isMobile ? -5 : -40 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={isMobile ? 5 : 10} sx={{ alignItems: 'center' }}>
                        <Grid size={{ xs: 12 }} sx={{ textAlign: 'center' }} className="animate__animated animate__fadeIn">
                            <Typography variant='h2' className="orange-title">
                                Da anni ci impegniamo a
                                <br />
                                far sentire tutti a casa.
                            </Typography>
                        </Grid>
                    </Grid>


                    {isMobile ? (
                        <>
                            <Grid container spacing={2} sx={{ alignItems: 'center', pt: 5 }}>
                                <Grid size={{ xs: 12 }}>
                                    <Typography variant='body1' className="yellow-paragraph animate__animated animate__fadeIn">
                                        Ci piace pensare al Librati come a un posto dove le persone si sentono libere di essere se stesse. Un luogo semplice, vero, dove il tempo rallenta.  Perché per noi far star bene le persone non è un dettaglio, è la nostra idea di ospitalità. E forse è proprio per questo che, una volta qui, ti senti a casa.
                                    </Typography>

                                </Grid>
                                <Grid size={{ xs: 6 }} className="animate__animated animate__fadeInUp">
                                    <img src='photo-7.webp' alt='final image home' style={{ width: '100%', height: '180px', objectFit: 'cover', marginBottom: '10px' }} />
                                    <img src='photo-6.webp' alt='final image home' style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '10px' }} />
                                    <img src='photo-5.webp' alt='final image home' style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                                </Grid>

                                <Grid size={{ xs: 6 }} className="animate__animated animate__fadeInUp">
                                    <img src='photo-3.webp' alt='final image home' style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px' }} />
                                    <img src='photo-4.webp' alt='final image home' style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px' }} />
                                    <img src='photo-9.webp' alt='final image home' style={{ width: '100%', height: '230px', objectFit: 'cover' }} />
                                </Grid>

                                <Grid size={{ xs: 12 }} className="animate__animated animate__fadeIn">
                                    <Typography variant='body1' className="last-paragraph">
                                        Qui sei in un posto dove le storie si intrecciano, i pensieri si sciolgono e il tempo si dimentica di correre. Qui ti senti, anche solo per una sera, esattamente dove dovresti essere.
                                    </Typography>
                                </Grid>

                                <Grid size={{ xs: 12 }} sx={{ textAlign: 'center!important', mt: isMobile ? 2 : 0 }} className="animate__animated animate__fadeInUp">
                                    <Button variant="outlined" size="large" className='final-button-cta' sx={{ maxWidth: '90%!important' }}>
                                        Vieni a<br />trovarci
                                    </Button>
                                </Grid>

                            </Grid>

                        </>
                    )
                        : (
                            <>
                                <Grid container spacing={10} sx={{ alignItems: 'flex-top', pt: 10 }}>
                                    <Grid size={{ xs: 12, md: 2 }}>
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 4 }} >
                                        <Typography variant='body1' className="yellow-paragraph animate__animated animate__fadeIn" style={{textAlign:isMobile ? 'center' : 'left'}} >
                                            Ci piace pensare al Librati come a un posto dove le persone si sentono libere di essere se stesse. Un luogo semplice, vero, dove il tempo rallenta.  Perché per noi far star bene le persone non è un dettaglio, è la nostra idea di ospitalità. E forse è proprio per questo che, una volta qui, ti senti a casa.
                                        </Typography>
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: 'right' }} className="animate__animated animate__fadeInUp">
                                        <img src='photo-6.webp' alt='final image home' style={{ width: isMobile ? '100%' : '80%', height: isMobile ? '500px' : '350px', objectFit: 'cover' }} />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 2 }}>
                                    </Grid>

                                </Grid>


                                <Grid container spacing={10} sx={{ mt: -15 }}>
                                    <Grid size={{ xs: 12, md: 4 }} sx={{ mt: -1 }} className="animate__animated animate__fadeInLeft">
                                        <img src='photo-4.webp' alt='final image home' style={{ width: isMobile ? '100%' : '100%', height: isMobile ? '100%' : '350px', objectFit: 'cover' }} />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 4 }}>
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: 'right', pt: 20 }} className="animate__animated animate__fadeInRight">
                                        <img src='photo-5.webp' alt='final image home' style={{ width: isMobile ? '100%' : '100%', height: isMobile ? '100%' : '350px', objectFit: 'cover' }} />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={10} sx={{ mt: -35 }}>
                                    <Grid size={{ xs: 12, md: 6 }} >
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 5 }} sx={{ p: 4 }} >
                                        <Button variant="outlined" size="large" className='final-button-cta animate__animated animate__fadeIn'>
                                            Vieni a<br />trovarci
                                        </Button>
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 1 }} >
                                    </Grid>
                                </Grid>

                                <Grid container spacing={0} sx={{ mt: -1, alignItems: 'center' }} className="animate__animated animate__fadeIn">
                                    <Grid size={{ xs: 12, md: 6 }} >
                                        <img src='photo-9.webp' alt='final image home' style={{ width: isMobile ? '100%' : '80%', height: isMobile ? '100%' : '300px', objectFit: 'cover' }} />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 4 }} >
                                        <Typography variant='body1' className="last-paragraph">
                                            Qui sei in un posto dove le storie si intrecciano, i pensieri si sciolgono e il tempo si dimentica di correre. Qui ti senti, anche solo per una sera, esattamente dove dovresti essere.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </>
                        )
                    }
                </Container>
            </Box>
        </>
    );
}

export default ReferenceSection;