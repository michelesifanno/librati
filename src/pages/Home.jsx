import React from 'react';
import { Box, Container, Typography, Button, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';



function Home() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // true se sotto 'md'

    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    minHeight: isMobile ? '60vh' : '100vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                }}
            >
                <Container maxWidth="lg" sx={{ textAlign: 'center', pt: isMobile ? 15 : 22 }}>

                    <Typography variant='h2' className="hero-title">
                        Qui, si bevono emozioni.
                    </Typography>


                    <img src='slider-librati-2.png' alt='Librati slider' className='librati-image-slider' />

                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant="outlined" size="large" className='menu-button-slider'>
                            Sfoglia Menu
                        </Button>
                    </div>
                </Container>
            </Box>

            {/* About Section */}
            <Box sx={{ pt: 10, display: 'flex' }} id='about'>
                <Container maxWidth="lg">
                    <Grid container spacing={isMobile ? 5 : 30}>
                        <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                            <Typography variant='h2' className="title">
                                Più che un<br />locale, una<br />seconda casa.
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant='p' className="paragraph" sx={{ pb: 2 }}>
                                <b>Un posto dove vieni per bere, ma resti per le persone.</b>
                            </Typography>
                            <br />
                            <Typography variant='p' className="paragraph">
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

            {/* Scrolling Text */}
            <Box sx={{ py: 5, display: 'flex' }}>
                <Container sx={{ minWidth: '100%' }} >
                    <div class="marquee-wave">
                        <svg viewBox="0 0 2200 140" xmlns="http://www.w3.org/2000/svg">
                            <path id="wavePath" d="M0,80 
        C 183,20 366,140 550,80 
        S 916,20 1100,80 
        S 1466,140 1650,80 
        S 2016,20 2200,80"
                                fill="none" stroke="transparent" stroke-width="1" />
                            <text font-size="36" fill="currentColor">
                                <textPath href="#wavePath" startOffset="0%">
                                    • Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks • Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks • Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks • Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks• Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks • Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks• Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks • Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks• Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks • Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks• Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks • Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks• Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks • Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks• Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks • Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks• Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks • Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks• Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks • Birra • Cocktail • Vini • Distillati • Liquori • Analcolici • Snacks
                                </textPath>
                            </text>
                        </svg>
                    </div>

                </Container>
            </Box>


            {/* Prenota Section */}
            <Box sx={{ pt: isMobile ? 0 : 0, pb: isMobile ? 5 : 10, display: 'flex' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={isMobile ? 2 : 2}>
                        <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                            <img src='cta-img.png' alt='prenota immagine' style={{ width: '100%', height: isMobile ? '350px' : '600px', objectFit: 'cover' }} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                            <em>
                                <Typography variant='h2' className="cta-title">
                                    Prenota un tavolo
                                </Typography>
                            </em>
                            <Button variant="outlined" size="large" className='call-button-slider' component="a" href="tel:+393292115340">
                                +39 329 211 5340
                            </Button>
                            <br /><br />
                            <Typography variant='p' className="orange-paragraph">
                                Ti basterà chiamare per prenotare
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }} sx={{ display: 'flex', flexDirection: 'column', gap: 0, justifyContent: 'flex-end' }}>
                            <Typography variant='p' className="orange-paragraph">
                                Siamo aperti tutti i giorni,
                            </Typography>
                            <Typography variant='p' className="orange-paragraph">
                                dalle 20:00 alle 03:00.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>


            {/* Image Section */}
            <Box sx={{ p: 0, display: 'flex' }}>
                <Container sx={{ minWidth: '100%!important', p: '0px!important', maxWidth: '100%!important' }} >
                    <img src='sfondo-home-marley.png' alt='sfondo home' style={{ width: '100%', height: isMobile ? '250px' : '500px', objectFit: 'cover', marginBottom: '-10px' }} />
                </Container>
            </Box>

            {/* Menu CTA Section */}
            <Box sx={{ py: isMobile ? 5 : 10, display: 'flex', backgroundColor: '#36c8c0' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={isMobile ? 5 : 20} sx={{ alignItems: 'center' }}>
                        <Grid size={{ xs: 12, md: 8 }} sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                            <strong>
                                <Typography variant='h2' className="title-cta-menu">
                                    Birra, cocktail, vini, distillati, liquori, analcolici & snacks
                                </Typography>
                            </strong>
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', flexDirection: 'column', gap: 0, justifyContent: 'flex-end' }}>
                            <Button variant="outlined" size="large" className='menu-button-cta'>
                                Menu
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Teddy Section */}
            <Box sx={{ py: 10, display: 'flex' }} id="teddy">
                <Container maxWidth="lg">
                    <Grid container spacing={isMobile ? 5 : 30} sx={{ alignItems: 'center' }}>
                        <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                            <Typography variant='h2' className="title">
                                Teddy
                            </Typography>

                            <div style={{ padding: isMobile ? '60px 30px 0px 30px' : '60px' }}>
                                <Typography variant='p' className="paragraph">
                                    <b>Barman, come altro non potrebbe essere.</b>
                                </Typography>
                                <br /><br />
                                <Typography variant='p' className="paragraph">
                                    Teddy ama i cocktail, le storie dietro ogni bottiglia e i sorrisi davanti al bancone. Gli piace ospitare, ascoltare, far ridere e consigliare drink che sanno sempre sorprendere. È uno di quelli con cui non ti annoi mai, perché Teddy è il cuore del Librati. Capisce l’equilibrio perfetto tra dolce e amaro, tra profumo e sapore, tra tecnica e istinto. Shakera con passione, dosa con precisione — e, se sei fortunato, potresti vederlo creare qualcosa solo per te.
                                </Typography>



                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src='teddy_rutigliano.png' alt='teddy librati' style={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Final Section */}
            {isMobile ? (null) : (
                <Box sx={{ pt: isMobile ? 0 : 10, display: 'flex' }}>
                    <Container sx={{ minWidth: '100%!important', p: '0px!important', maxWidth: '100%!important' }} >
                        <Grid container spacing={isMobile ? 5 : 10} sx={{ alignItems: 'center' }}>
                            <Grid size={{ xs: 6, md: 6 }} sx={{ textAlign: 'left' }}>
                                <img src='photo-7.jpeg' alt='final image home' style={{ width: isMobile ? '100%' : '45%', height: isMobile ? '100%' : '300px', objectFit: 'cover' }} />
                            </Grid>

                            <Grid size={{ xs: 6, md: 6 }} sx={{ textAlign: 'right' }}>
                                <img src='photo-3.jpg' alt='final image home' style={{ width: isMobile ? '100%' : '45%', height: isMobile ? '100%' : '300px', objectFit: 'cover' }} />
                            </Grid>

                        </Grid>
                    </Container>
                </Box>
            )
            }
            <Box sx={{ py: isMobile ? 5 : 10, display: 'flex', mt: isMobile ? -5 : -40 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={isMobile ? 5 : 10} sx={{ alignItems: 'center' }}>
                        <Grid size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
                            <Typography variant='h2' className="orange-title">
                                Da anni ci impegniamo a
                            </Typography><br />
                            <Typography variant='h2' className="orange-title">
                                far sentire tutti a casa.
                            </Typography>
                        </Grid>
                    </Grid>


                    {isMobile ? (
                        <>
                            <Grid container spacing={2} sx={{ alignItems: 'center', pt: 5 }}>
                                <Grid size={{ xs: 12 }}>
                                    <Typography variant='p' className="cyan-paragraph">
                                        Ci piace pensare al Librati come a un posto dove le persone si sentono libere di essere se stesse. Un luogo semplice, vero, dove il tempo rallenta.  Perché per noi far star bene le persone non è un dettaglio, è la nostra idea di ospitalità. E forse è proprio per questo che, una volta qui, ti senti a casa.
                                    </Typography>

                                </Grid>
                                <Grid size={{ xs: 6 }}>
                                    <img src='photo-7.jpeg' alt='final image home' style={{ width: '100%', height: '180px', objectFit: 'cover', marginBottom: '10px' }} />
                                    <img src='photo-6.jpeg' alt='final image home' style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '10px' }} />
                                    <img src='photo-5.jpg' alt='final image home' style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                                </Grid>

                                <Grid size={{ xs: 6 }}>
                                    <img src='photo-3.jpg' alt='final image home' style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px' }} />
                                    <img src='photo-4.jpg' alt='final image home' style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px' }} />
                                    <img src='photo-9.png' alt='final image home' style={{ width: '100%', height: '230px', objectFit: 'cover' }} />
                                </Grid>

                                <Grid size={{ xs: 12 }}>
                                    <Typography variant='p' className="last-paragraph">
                                        Qui sei in un posto dove le storie si intrecciano, i pensieri si sciolgono e il tempo si dimentica di correre. Qui ti senti, anche solo per una sera, esattamente dove dovresti essere.
                                    </Typography>
                                </Grid>

                                <Grid size={{ xs: 12 }}>
                                    <Button variant="outlined" size="large" className='final-button-cta'>
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
                                        <Typography variant='p' className="cyan-paragraph">
                                            Ci piace pensare al Librati come a un posto dove le persone si sentono libere di essere se stesse. Un luogo semplice, vero, dove il tempo rallenta.  Perché per noi far star bene le persone non è un dettaglio, è la nostra idea di ospitalità. E forse è proprio per questo che, una volta qui, ti senti a casa.
                                        </Typography>
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: 'right' }}>
                                        <img src='photo-6.jpeg' alt='final image home' style={{ width: isMobile ? '100%' : '80%', height: isMobile ? '500px' : '350px', objectFit: 'cover' }} />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 2 }}>
                                    </Grid>

                                </Grid>


                                <Grid container spacing={10} sx={{ mt: -15 }}>
                                    <Grid size={{ xs: 12, md: 4 }} sx={{ mt: -1 }}>
                                        <img src='photo-4.jpg' alt='final image home' style={{ width: isMobile ? '100%' : '100%', height: isMobile ? '100%' : '350px', objectFit: 'cover' }} />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 4 }}>
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: 'right', pt: 20 }}>
                                        <img src='photo-5.jpg' alt='final image home' style={{ width: isMobile ? '100%' : '100%', height: isMobile ? '100%' : '350px', objectFit: 'cover' }} />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={10} sx={{ mt: -35 }}>
                                    <Grid size={{ xs: 12, md: 6 }} >
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 5 }} sx={{ p: 4 }} >
                                        <Button variant="outlined" size="large" className='final-button-cta'>
                                            Vieni a<br />trovarci
                                        </Button>
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 1 }} >
                                    </Grid>
                                </Grid>

                                <Grid container spacing={0} sx={{ mt: -1, alignItems: 'center' }}>
                                    <Grid size={{ xs: 12, md: 6 }} >
                                        <img src='photo-9.png' alt='final image home' style={{ width: isMobile ? '100%' : '80%', height: isMobile ? '100%' : '300px', objectFit: 'cover' }} />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 4 }} >
                                        <Typography variant='p' className="last-paragraph">
                                            Qui sei in un posto dove le storie si intrecciano, i pensieri si sciolgono e il tempo si dimentica di correre. Qui ti senti, anche solo per una sera, esattamente dove dovresti essere.
                                        </Typography>


                                        <Grid size={{ xs: 12, md: 2 }} >
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </>
                        )
                    }
                </Container>
            </Box>
        </Box>
    );
}

export default Home;