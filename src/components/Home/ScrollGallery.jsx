import { Box, Container, Typography, Button, useMediaQuery, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GalleryDesktop from '../Gallery/GalleryDesktop';
import GalleryMobile from '../Gallery/GalleryMobile';

export default function ScrollGallery() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // true se sotto 'md'


    return (
        <>
            {isMobile ? <GalleryMobile /> : <GalleryDesktop />}
        </>
    );
}