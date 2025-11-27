import { Box, Container, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';



function ImageSection() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // true se sotto 'md'

    return (
        <Box sx={{ p: 0, display: 'flex' }}>
            <Container sx={{ minWidth: '100%!important', p: '0px!important', maxWidth: '100%!important' }} >
                <img src='sfondo-home-marley.png' alt='sfondo home' style={{ width: '100%', height: isMobile ? '400px' : '600px', objectFit: 'cover', marginBottom: '-10px' }} />
            </Container>
        </Box>
    );
}

export default ImageSection;