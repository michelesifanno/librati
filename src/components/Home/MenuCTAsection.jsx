import { Box, Container, Typography, Button, useMediaQuery, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';



function MenuCTAsection() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // true se sotto 'md'

    return (
        <Box sx={{ py: isMobile ? 5 : 10, display: 'flex', backgroundColor: '#e7bc2d' }}>
            <Container maxWidth="lg">
                <Grid container spacing={isMobile ? 5 : 20} sx={{ alignItems: 'center' }}>
                    <Grid size={{ xs: 12, md: 8 }} sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                        <strong>
                            <Typography variant='h2' className="title-cta-menu">
                                Lasciati conquistare dalle nostre selezioni e Librati dal male!
                            </Typography>
                        </strong>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', flexDirection: 'column', gap: 0, justifyContent: 'flex-end' }}>
                        <Button
                            variant="outlined"
                            size="large"
                            className='menu-button-cta'
                            href='/drinklist'
                        >
                            Drink List
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default MenuCTAsection;