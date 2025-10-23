import React from 'react';
import { Box, Container, Typography, Button, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SplitText from '../components/layout/SplitText';
import BlurText from "../components/layout/BlurText";
import { motion } from 'framer-motion';
import ParagraphText from '../components/layout/ParagraphText';




function Home() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // true se sotto 'md'

    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    minHeight: '100vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                }}
            >
                <Container maxWidth="lg" sx={{ textAlign: 'center', pt: isMobile ? 15 : 22 }}>

                    
                    <BlurText
                        text="Qui, si bevono emozioni."
                        delay={50}
                        animateBy="words"
                        direction="top"
                        className="hero-title"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
                        style={{ textAlign: 'right', zIndex: -1 }}
                    >
                        <img src='slider-librati-2.png' alt='Librati slider' className='librati-image-slider' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.6, ease: 'easeOut' }}
                        style={{ textAlign: isMobile ? 'center' : 'right', zIndex: -1 }}
                    >
                        <Button variant="outlined" size="large" className='menu-button-slider'>
                            Sfoglia Menu
                        </Button>
                    </motion.div>
                </Container>
            </Box>

            {/* About Section */}
            <Box sx={{ pt: 10, display: 'flex' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={isMobile ? 5 : 30}>
                        <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                            <SplitText
                                text="Più che un"
                                className="title"
                                delay={20}
                                duration={0.6}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="left"
                            />
                            <SplitText
                                text="locale, una"
                                className="title"
                                delay={20}
                                duration={0.6}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="left"
                            />
                            <SplitText
                                text="seconda casa"
                                className="title"
                                delay={20}
                                duration={0.6}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="left"
                            />


                            {/* <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Librati Cocktail Bar a Giovinazzo: più che un locale, una seconda casa
                            </Typography> */}
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <ParagraphText
                                text="Un posto dove vieni per bere, ma resti per le persone.
                                Birre artigianali, cocktail curati e un’atmosfera che ti accoglie come una famiglia.
                                Il Librati è il cocktail bar di riferimento a Giovinazzo.
                                Qui puoi venire da solo, ma da solo non resti mai. Tra un drink preparato con cura, una birra fresca e due chiacchiere al bancone, trovi sempre qualcuno con cui condividere un sorriso.
                                Da anni ci impegniamo a far sentire tutti a casa.
                                Ogni cliente è parte di una grande famiglia fatta di amicizia, relax e autenticità.
                                Che tu venga per un aperitivo, per un dopocena tranquillo o solo per fare due chiacchiere, al Librati trovi sempre il tuo posto."
                                className="paragraph"
                                delay={2}
                                duration={0.6}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="justify"
                            />
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
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
                                style={{ textAlign: isMobile ? 'center' : 'right' }}
                            >
                                <img src='cta-img.png' alt='prenota immagine' style={{ width: '100%', height: isMobile ? '350px' : '600px', objectFit: 'cover' }} />
                            </motion.div>
                        </Grid>
                        <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                            <em>
                                <SplitText
                                    text="Prenota un tavolo"
                                    className="cta-title"
                                    delay={20}
                                    duration={0.6}
                                    ease="power3.out"
                                    splitType="chars"
                                    from={{ opacity: 0, y: 40 }}
                                    to={{ opacity: 1, y: 0 }}
                                    threshold={0.1}
                                    rootMargin="-100px"
                                    textAlign="left"
                                />
                            </em>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2.5, duration: 0.6, ease: 'easeOut' }}
                                style={{ textAlign: isMobile ? 'center' : 'right' }}
                            >
                                <Button variant="outlined" size="large" className='call-button-slider' component="a" href="tel:+393292115340">
                                    +39 329 211 5340
                                </Button>
                            </motion.div>
                            <br /><br />
                            <ParagraphText
                                text="Ti basterà chiamare per prenotare."
                                className="orange-paragraph"
                                delay={2}
                                duration={0.6}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="justify"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }} sx={{ display: 'flex', flexDirection: 'column', gap: 0, justifyContent: 'flex-end' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
                                style={{ width: '100%' }}
                            >
                                <ParagraphText
                                    text="Siamo aperti tutti i giorni, "
                                    className="orange-paragraph"
                                    delay={2}
                                    duration={0.6}
                                    ease="power3.out"
                                    splitType="chars"
                                    from={{ opacity: 0, y: 40 }}
                                    to={{ opacity: 1, y: 0 }}
                                    threshold={0.1}
                                    rootMargin="-100px"
                                    textAlign="justify"
                                />
                                <ParagraphText
                                    text="dalle 20:00 alle 03:00"
                                    className="orange-paragraph"
                                    delay={2}
                                    duration={0.6}
                                    ease="power3.out"
                                    splitType="chars"
                                    from={{ opacity: 0, y: 40 }}
                                    to={{ opacity: 1, y: 0 }}
                                    threshold={0.1}
                                    rootMargin="-100px"
                                    textAlign="justify"
                                />
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>


            {/* Image Section */}
            <Box sx={{ p: 0, display: 'flex' }}>
                <Container sx={{ minWidth: '100%!important', p: '0px!important', maxWidth: '100%!important' }} >
                    <img src='sfondo-home-marley.png' alt='sfondo home' style={{ width: '100%', height: isMobile ? '250px' : '500px', objectFit: 'cover' }} />
                </Container>
            </Box>

            {/* Menu CTA Section */}
            <Box sx={{ py: isMobile ? 5 : 10, display: 'flex', backgroundColor: '#36c8c0' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={isMobile ? 5 : 20} sx={{ alignItems: 'center' }}>
                        <Grid size={{ xs: 12, md: 8 }} sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                            <strong>
                                <SplitText
                                    text="Birra, cocktail, vini, distillati, liquori, analcolici & snacks"
                                    className="title-cta-menu"
                                    delay={20}
                                    duration={0.6}
                                    ease="power3.out"
                                    splitType="chars"
                                    from={{ opacity: 0, y: 40 }}
                                    to={{ opacity: 1, y: 0 }}
                                    threshold={0.1}
                                    rootMargin="-100px"
                                    textAlign="left"
                                />
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
            <Box sx={{ py: 10, display: 'flex' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={isMobile ? 5 : 30} sx={{ alignItems: 'center' }}>
                        <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                            <SplitText
                                text="Teddy"
                                className="title"
                                delay={20}
                                duration={0.6}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="left"
                            />
                            <div style={{ padding: isMobile ? '60px 30px 0px 30px' : '60px' }}>
                                <b>
                                    <ParagraphText
                                        text="Barman, come altro potrebbe essere."
                                        className="paragraph"
                                        delay={2}
                                        duration={0.6}
                                        ease="power3.out"
                                        splitType="chars"
                                        from={{ opacity: 0, y: 40 }}
                                        to={{ opacity: 1, y: 0 }}
                                        threshold={0.1}
                                        rootMargin="-100px"
                                        textAlign="justify"
                                    />
                                </b>
                                <ParagraphText
                                    text="Teddy ama i cocktail, le storie dietro ogni bottiglia e i sorrisi davanti al bancone. Gli piace ospitare, ascoltare, far ridere e consigliare drink che sanno sempre sorprendere. È uno di quelli con cui non ti annoi mai, perché Teddy è il cuore del Librati. Capisce l’equilibrio perfetto tra dolce e amaro, tra profumo e sapore, tra tecnica e istinto. Shakera con passione, dosa con precisione — e, se sei fortunato, potresti vederlo creare qualcosa solo per te."
                                    className="paragraph"
                                    delay={2}
                                    duration={0.6}
                                    ease="power3.out"
                                    splitType="chars"
                                    from={{ opacity: 0, y: 40 }}
                                    to={{ opacity: 1, y: 0 }}
                                    threshold={0.1}
                                    rootMargin="-100px"
                                    textAlign="justify"
                                />
                                <ParagraphText
                                    text="Se sei nel posto giusto, al momento giusto."
                                    className="paragraph"
                                    delay={2}
                                    duration={0.6}
                                    ease="power3.out"
                                    splitType="chars"
                                    from={{ opacity: 0, y: 40 }}
                                    to={{ opacity: 1, y: 0 }}
                                    threshold={0.1}
                                    rootMargin="-100px"
                                    textAlign="justify"
                                />

                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <img src='teddy_rutigliano.png' alt='teddy librati' style={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Final Section */}
            {isMobile ? ( null ) : (
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
                            <SplitText
                                text="Da anni ci impegniamo a "
                                className="orange-title"
                                delay={20}
                                duration={0.6}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign={isMobile ? "left" : "center"}
                            />
                            <SplitText
                                text="far sentire tutti a casa"
                                className="orange-title"
                                delay={20}
                                duration={0.6}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign={isMobile ? "left" : "center"}
                            />
                        </Grid>
                    </Grid>


                    {isMobile ? (
                        <>
                            <Grid container spacing={2} sx={{ alignItems: 'center', pt: 5 }}>
                                <Grid size={{ xs: 12 }}>
                                    <ParagraphText
                                        text="Ci piace pensare al Librati come a un posto dove le persone si sentono libere di essere se stesse. Un luogo semplice, vero, dove il tempo rallenta.  Perché per noi far star bene le persone non è un dettaglio, è la nostra idea di ospitalità. E forse è proprio per questo che, una volta qui, ti senti a casa."
                                        className="cyan-paragraph"
                                        delay={2}
                                        duration={0.6}
                                        ease="power3.out"
                                        splitType="chars"
                                        from={{ opacity: 0, y: 40 }}
                                        to={{ opacity: 1, y: 0 }}
                                        threshold={0.1}
                                        rootMargin="-100px"
                                        textAlign="justify"
                                    />
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
                                    <ParagraphText
                                        text="Qui sei in un posto dove le storie si intrecciano, i pensieri si sciolgono e il tempo si dimentica di correre. Qui ti senti, anche solo per una sera, esattamente dove dovresti essere."
                                        className="last-paragraph"
                                        delay={2}
                                        duration={0.6}
                                        ease="power3.out"
                                        splitType="chars"
                                        from={{ opacity: 0, y: 40 }}
                                        to={{ opacity: 1, y: 0 }}
                                        threshold={0.1}
                                        rootMargin="-100px"
                                        textAlign="justify"
                                    />
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
                                        <ParagraphText
                                            text="Ci piace pensare al Librati come a un posto dove le persone si sentono libere di essere se stesse. Un luogo semplice, vero, dove il tempo rallenta.  Perché per noi far star bene le persone non è un dettaglio, è la nostra idea di ospitalità. E forse è proprio per questo che, una volta qui, ti senti a casa."
                                            className="cyan-paragraph"
                                            delay={2}
                                            duration={0.6}
                                            ease="power3.out"
                                            splitType="chars"
                                            from={{ opacity: 0, y: 40 }}
                                            to={{ opacity: 1, y: 0 }}
                                            threshold={0.1}
                                            rootMargin="-100px"
                                            textAlign="justify"
                                        />
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
                                        <ParagraphText
                                            text="Qui sei in un posto dove le storie si intrecciano, i pensieri si sciolgono e il tempo si dimentica di correre. Qui ti senti, anche solo per una sera, esattamente dove dovresti essere."
                                            className="last-paragraph"
                                            delay={2}
                                            duration={0.6}
                                            ease="power3.out"
                                            splitType="chars"
                                            from={{ opacity: 0, y: 40 }}
                                            to={{ opacity: 1, y: 0 }}
                                            threshold={0.1}
                                            rootMargin="-100px"
                                            textAlign="justify"
                                        />
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