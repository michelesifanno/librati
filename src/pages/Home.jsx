import { Box } from '@mui/material';
import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
import ScrollingText from '../components/Home/ScrollingText';
import PrenotaSection from '../components/Home/PrenotaSection';
import ImageSection from '../components/Home/ImageSection';
import MenuCTAsection from '../components/Home/MenuCTAsection';
import Teddy from '../components/Home/Teddy';
import ReferenceSection from '../components/Home/ReferenceSection';





function Home() {

    return (
        <Box>
            <HeroSection />
            <AboutSection />
            <ScrollingText />
            <PrenotaSection />
            <ImageSection />
            <MenuCTAsection />
            <Teddy />
            <ReferenceSection />
        </Box>
    );
}

export default Home;