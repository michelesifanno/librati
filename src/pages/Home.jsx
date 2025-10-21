import React from 'react';
import { Box, Container, Typography, Button, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SplitText from '../components/layout/SplitText';
import BlurText from "../components/layout/BlurText";
import SouthIcon from '@mui/icons-material/South';
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";
import CircularGallery from '../components/layout/CircularGallery';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

function Home() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // true se sotto 'md'

    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    height: '100vh',
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(18, 28, 59, 1)),
                    url(/hero-bg.jpg)    `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'flex-end',
                }}
            >
                <Container maxWidth="lg" sx={{ textAlign: 'center' }}>

                    <BlurText
                        text="Qui non si bevono cocktail."
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-2xl font-semibold text-center"
                    />
                    <BlurText
                        text="Qui, si bevono emozioni."
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-2xl font-semibold text-center"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
                        style={{ textAlign: 'center' }}
                    >
                        <Button variant="contained" color="secondary" size="large" className='menu-button'>
                            Sfoglia Menu
                        </Button>
                        <br /><br />
                        <SouthIcon sx={{ fontSize: 32 }} />
                    </motion.div>
                </Container>
            </Box>

            {/* About Section */}
            <Box sx={{ py: 10, backgroundColor: '#121c3b', display: 'flex' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={isMobile ? 5 : 20}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <SplitText
                                text="Più che un locale, una seconda casa"
                                className="h2-text"
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
                            <SplitText
                                text="Un posto dove vieni per bere, ma resti per le persone.
                                Birre artigianali, cocktail curati e un’atmosfera che ti accoglie come una famiglia.
                                Il Librati è il cocktail bar di riferimento a Giovinazzo.
                                Qui puoi venire da solo, ma da solo non resti mai. Tra un drink preparato con cura, una birra fresca e due chiacchiere al bancone, trovi sempre qualcuno con cui condividere un sorriso.
                                Da anni ci impegniamo a far sentire tutti a casa.
                                Ogni cliente è parte di una grande famiglia fatta di amicizia, relax e autenticità.
                                Che tu venga per un aperitivo, per un dopocena tranquillo o solo per fare due chiacchiere, al Librati trovi sempre il tuo posto."
                                className="paragraph-text"
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
            <Box sx={{ py: 2, backgroundColor: '#202e56', display: 'flex' }}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid size={{ xs: 12 }}>
                            <Marquee className="scroll-products" gradient={false} speed={100} pauseOnHover={false}>
                                <span>Birra</span>
                                <span>Cocktail</span>
                                <span>Vini</span>
                                <span>Distillati</span>
                                <span>Liquori</span>
                                <span>Analcolici</span>
                                <span>Snacks</span>
                                <span>Birra</span>
                                <span>Cocktail</span>
                                <span>Vini</span>
                                <span>Distillati</span>
                                <span>Liquori</span>
                                <span>Analcolici</span>
                                <span>Snacks</span>
                                <span>Birra</span>
                                <span>Cocktail</span>
                                <span>Vini</span>
                                <span>Distillati</span>
                                <span>Liquori</span>
                                <span>Analcolici</span>
                                <span>Snacks</span>
                            </Marquee>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
           {/* Gallery Cocktail */}
            <Box sx={{ p: 0, backgroundColor: '#121c3b', display: 'flex' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={isMobile ? 5 : 20}>
                        <Grid size={{ xs: 12 }}>
                            <ImageList
                                sx={{ width: '100%' }}
                                variant="quilted"
                                cols={isMobile ? 4 : 6}
                                rowHeight={isMobile ? 100 : 250}
                            >
                                {itemData.map((item) => (
                                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                        <img
                                            {...srcset(item.img, 121, item.rows, item.cols)}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Dicono di noi*/}
            <Box sx={{ pt: 10, backgroundColor: '#121c3b', display: 'flex', textAlign: 'center' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={isMobile ? 5 : 20}>
                        <Grid size={{ xs: 12 }}>
                            <SplitText
                                text="Dicono di noi"
                                className="h2-text"
                                delay={20}
                                duration={0.6}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="justify"
                            />
                            <div className="">
                                <div className="badge">
                                    <div className="badge__container badge__container--light">
                                        <div>
                                            <svg
                                                viewBox="0 0 512 512"
                                                width="44"
                                                height="44"
                                                aria-label="Google logo"
                                            >
                                                <g
                                                    id="logo-g"
                                                    height="44"
                                                    width="44"
                                                    fill="none"
                                                    fillRule="evenodd"
                                                    className="h-8 w-8"
                                                >
                                                    <path
                                                        d="M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z"
                                                        fill="#4285f4"
                                                    />
                                                    <path
                                                        d="M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15c38.83 77.13 118.64 130.01 210.9 130.01z"
                                                        fill="#34a853"
                                                    />
                                                    <path
                                                        d="M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84V150.01H45.1C29.12 181.87 20 217.92 20 256c0 38.08 9.12 74.13 25.1 105.99l78.85-61.15z"
                                                        fill="#fbbc05"
                                                    />
                                                    <path
                                                        d="M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20c-92.25 0-172.07 52.89-210.9 130.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z"
                                                        fill="#ea4335"
                                                    />
                                                    <path d="M20 20h472v472H20V20z" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="badge__subcontainer">
                                            <span className="badge__label badge__label--light">Google Rating</span>
                                            <div className="badge__rating__container">
                                                <span className="badge__rating badge__rating--light">5.0</span>
                                                <div className="badge__stars" aria-hidden="true">
                                                    <div className="badge__stars__container">
                                                        <div className="badge__stars__fill" style={{ width: "100%" }}>
                                                            <span style={{ color: "rgb(248, 175, 13)" }}>★★★★★</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="reviews-widget-627">
                                <script src="https://app.reviewconnect.me/embed/0qylaqRHPhzoHVFHABwrMjecrhabX2jM/widget.js" async></script>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>


            {/* Dove siamo*/}
            <Box sx={{ py: 0, backgroundColor: '#121c3b', display: 'flex', pt: 10 }}>
                <Container maxWidth="lg" sx={{ zIndex: 9999, marginBottom: '-60px' }}>
                    <Grid container spacing={isMobile ? 5 : 20}>
                        <Grid size={{ xs: 12 }}>
                            <SplitText
                                text="Siamo a Giovinazzo (Bari), in Via Crocifisso, 10, a due passi dal mare e dal centro storico."
                                className="h2-text"
                                delay={20}
                                duration={0.6}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="center"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Gallery*/}

                <div style={{ height: '600px', position: 'relative', p: 0, backgroundColor: '#121c3b' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={ isMobile ? 0.02 : 0.005}/>
</div>


        </Box>
    );
}

export default Home;

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        cols: 2,
    },
];