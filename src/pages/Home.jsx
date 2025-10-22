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
                    minHeightheight: '100vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                }}
            >
                <Container maxWidth="lg" sx={{ textAlign: 'center', pt: isMobile ? 15 : 22 }}>

                    {/* <BlurText
                        text="Qui non si bevono cocktail."
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-2xl font-semibold text-center"
                    /> */}
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
                        transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
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
                        <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
                                style={{ textAlign: isMobile ? 'center' : 'right' }}
                            >
                                <img src='cta-img.png' alt='prenota immagine' style={{ width: '100%', height: isMobile ? '350px' : '600px', objectFit: 'cover' }} />
                            </motion.div>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
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
                        <Grid size={{ xs: 12, md: 2 }} sx={{ display: 'flex', flexDirection: 'column', gap: 0, justifyContent: 'flex-end' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
                                style={{  width: '100%' }}
                            >
                                <ParagraphText
                                    text="Siamo aperti tutti i giorni, dalle 20:00 alle 03:00"
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





        </Box>
    );
}

export default Home;