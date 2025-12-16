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
import LazyRender from '../components/LazyRender';


function Home() {


    return (
        <Box>
            <HeroSection />

            <LazyRender >
                <AboutSection />
            </LazyRender>

            <ScrollingText />

            <LazyRender>
                <PrenotaSection />
            </LazyRender>

            <ImageSection />

            <LazyRender>
                <MenuCTAsection />
            </LazyRender>

            <LazyRender>
                <Teddy />
            </LazyRender>

            <LazyRender>
                <ScrollGallery />
            </LazyRender>

            <LazyRender>
                <ReferenceSection />
            </LazyRender>


        </Box>
    );
}

export default Home;