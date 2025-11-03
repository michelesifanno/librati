import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, useMediaQuery, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import WestIcon from '@mui/icons-material/West';
import FavoriteIcon from '@mui/icons-material/Favorite';



export default function MenuHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleGoBack = () => {
        navigate(-1);
    };


    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerContent = (
        <Box
            sx={{ minWidth: isMobile ? '100vw' : '75vw', minHeight: '100vh', zIndex: '99999', backgroundColor: '#fff' }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Container sx={{ p: isMobile ? '32px 32px 32px 32px!important' : '32px 64px 32px 64px!important', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={toggleDrawer(false)}
                        aria-label="menu"
                        sx={{ p: 0, m: 0 }}
                    >
                        <CloseIcon sx={{ fontSize: 50 }} />
                    </IconButton>
                </div>
                <Typography variant="p" className='title-in-menu'>
                    Le tue scelte
                </Typography>

            </Container>
        </Box>
    );

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: scrolled ? '#111125' : 'transparent',
                    boxShadow: scrolled ? 2 : 'none',
                    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%',
                                padding: '20px 0px',
                            }}
                        >
                            <Box onClick={handleGoBack} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                <WestIcon sx={{ pr: 1, fontSize: '36px' }} />
                                <Typography variant="p" className="text-menu">
                                    Indietro
                                </Typography>
                            </Box>
                            <Box onClick={toggleDrawer(true)} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                <Typography variant='p' className="text-menu">
                                    <FavoriteIcon
                                        sx={{ fontSize: '36px' }}
                                    />
                                    <span class="nr-prodotti">0</span>
                                </Typography>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                {drawerContent}
            </Drawer>
        </>
    );
}