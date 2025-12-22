import { Box, Container, Typography, Button, useMediaQuery, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import 'animate.css'


export default function GalleryMobile() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // true se sotto 'md'


    return (
        <Box sx={{ position: "relative", width: "100%" }}>

            {/* CONTENITORE SCROLL SEZIONE */}
            <Box sx={{ position: "relative", minHeight: "40vh", pt: 10, pb: 10 }}>

                <Grid container spacing={2} sx={{ alignItems: 'flex-top', pt: 10 }}>
                    <Grid size={{ xs: 12 }} sx={{
                        position: "sticky",
                        top: isMobile ? "30vh" : "30vh",
                        zIndex: isMobile ? 1 : 1,
                        textAlign: "center",
                        mb: 15,
                    }}
                    >
                        <Typography variant='h2' className="hero-title animate__animated animate__fadeIn" sx={{ textAlign: 'center!important' }}>
                            Dove le serate diventano storie.
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 6 }} className="animate__animated animate__fadeInUp">
                        <img src='1.webp' alt='final image home' style={{ width: '100%', height: '350px', objectFit: 'cover', marginBottom: '10px' }} />
                        <img src='2.webp' alt='final image home' style={{ width: '100%', height: '250px', objectFit: 'cover', marginBottom: '10px' }} />
                        <img src='3.webp' alt='final image home' style={{ width: '100%', height: '350px', objectFit: 'cover', marginBottom: '10px' }} />
                        <img src='4.webp' alt='final image home' style={{ width: '100%', height: '250px', objectFit: 'cover', marginBottom: '10px' }} />
                        <img src='5.webp' alt='final image home' style={{ width: '100%', height: '350px', objectFit: 'cover', marginBottom: '10px' }} />
                        <img src='6.webp' alt='final image home' style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                    </Grid>

                    <Grid size={{ xs: 6 }} className="animate__animated animate__fadeInUp">
                        <img src='7.webp' alt='final image home' style={{ width: '100%', height: '250px', objectFit: 'cover', marginBottom: '10px' }} />
                        <img src='8.webp' alt='final image home' style={{ width: '100%', height: '350px', objectFit: 'cover', marginBottom: '10px' }} />
                        <img src='9.webp' alt='final image home' style={{ width: '100%', height: '250px', objectFit: 'cover', marginBottom: '10px' }} />
                        <img src='10.webp' alt='final image home' style={{ width: '100%', height: '350px', objectFit: 'cover', marginBottom: '10px' }} />
                        <img src='11.webp' alt='final image home' style={{ width: '100%', height: '250px', objectFit: 'cover', marginBottom: '10px' }} />
                        <img src='12.webp' alt='final image home' style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
}