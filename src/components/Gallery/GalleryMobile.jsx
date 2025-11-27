import { Box, Container, Typography, Button, useMediaQuery, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';


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
                        zIndex: isMobile ? 0 : 1,
                        textAlign: "center",
                        mb: 15,
                    }}
                    >
                        <Typography variant='h2' className="hero-title" sx={{ textAlign: 'center!important' }}>
                            Dove le serate diventano storie.
                        </Typography>
                    </Grid>

                                <Grid size={{ xs: 6 }}>
                        <img src='1.png' alt='final image home' style={{ width: '100%', height: isMobile ? '250px' : '600px', objectFit: 'cover', marginBottom: '40px' }} />
                        <img src='2.png' alt='final image home' style={{ width: '100%', height: isMobile ? '250px' : '600px', objectFit: 'cover', marginBottom: '40px' }} />
                        <img src='3.png' alt='final image home' style={{ width: '100%', height: isMobile ? '250px' : '600px', objectFit: 'cover', marginBottom: '40px' }} />
                        <img src='4.png' alt='final image home' style={{ width: '100%', height: isMobile ? '250px' : '600px', objectFit: 'cover', marginBottom: '40px' }} />
                        <img src='5.png' alt='final image home' style={{ width: '100%', height: isMobile ? '250px' : '600px', objectFit: 'cover', marginBottom: '40px' }} />
                        <img src='6.png' alt='final image home' style={{ width: '100%', height: isMobile ? '250px' : '600px', objectFit: 'cover' }} />
                    </Grid>

                                <Grid size={{ xs: 6 }}>
                        <img src='7.png' alt='final image home' style={{ width: '100%', height: isMobile ? '250px' : '600px', objectFit: 'cover', marginBottom: '40px' }} />
                        <img src='8.png' alt='final image home' style={{ width: '100%', height: isMobile ? '250px' : '600px', objectFit: 'cover', marginBottom: '40px' }} />
                        <img src='9.png' alt='final image home' style={{ width: '100%', height: isMobile ? '250px' : '600px', objectFit: 'cover', marginBottom: '40px' }} />
                        <img src='10.png' alt='final image home' style={{ width: '100%', height: isMobile ? '250px' : '600px', objectFit: 'cover', marginBottom: '40px' }} />
                        <img src='11.png' alt='final image home' style={{ width: '100%', height: isMobile ? '250px' : '600px', objectFit: 'cover', marginBottom: '40px' }} />
                        <img src='12.png' alt='final image home' style={{ width: '100%', height: isMobile ? '250px' : '600px', objectFit: 'cover' }} />
                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
}