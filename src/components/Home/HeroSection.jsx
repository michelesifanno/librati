import { Box, Container, Typography, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';



function HeroSection() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // true se sotto 'md'

    return (
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
                    <Button variant="contained" size="large" className='menu-button-slider' href='/drinklist'>
                        Drink List
                    </Button>
                </div>
            </Container>
        </Box>
    );
}

export default HeroSection;