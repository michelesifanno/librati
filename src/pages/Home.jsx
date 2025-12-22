import { useEffect } from 'react';
import { Box } from '@mui/material';
import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
import ScrollingText from '../components/Home/ScrollingText';
import PrenotaSection from '../components/Home/PrenotaSection';
import ImageSection from '../components/Home/ImageSection';
import MenuCTAsection from '../components/Home/MenuCTAsection';
import Teddy from '../components/Home/Teddy';
import ReferenceSection from '../components/Home/ReferenceSection';
import ScrollGallery from '../components/Home/ScrollGallery';
import { Helmet } from "react-helmet-async";


function Home() {


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <>

            <Helmet>
                <title>Librati Cocktail Pub a Giovinazzo | Drink d’autore</title>
                <meta name="description" content="Cocktail bar a Giovinazzo con selezioni premium e drink artigianali. Scopri il menu e prenota." />
                <link rel="canonical" href="https://www.libratipub.com/" />
            </Helmet>


            <Box>
                <HeroSection />

                <AboutSection />

                <ScrollingText />

                <PrenotaSection />

                <ImageSection />

                <MenuCTAsection />

                <Teddy />

                <ScrollGallery />

                <ReferenceSection />


            </Box>
        </>

    );
}

export default Home;