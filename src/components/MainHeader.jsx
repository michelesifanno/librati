import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, useMediaQuery, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';



const pages = [
    { label: 'Menu', href: '#menu', target: '' },
    { label: 'About', href: '#about', target: '' },
    { label: 'Teddy', href: '#teddy', target: '' },
    { label: 'Dove siamo', href: 'https://www.google.com/maps/dir//Via+Crocifisso,+10,+70054+Giovinazzo+BA/@41.188032,16.5871824,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1347fa66c570d045:0x18ea035eac03c171!2m2!1d16.6695827!2d41.188059?entry=ttu&g_ep=EgoyMDI1MTAyNy4wIKXMDSoASAFQAw%3D%3D', target: '_blank' },

];


function MainHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // true se sotto 'md'

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerContent = (
        <Box
            sx={{ minWidth: '100vw', minHeight: '100vh', zIndex: '99999', backgroundColor: '#ff5700' }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Container sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={toggleDrawer(false)}
                        aria-label="menu"
                        sx={{ color: '#fff', p: 0, m: 0 }}
                    >
                        <CloseIcon sx={{ fontSize: 50 }} />
                    </IconButton>
                </div>

                {pages.map((page) => (
                    <Button
                        key={page.label}
                        href={page.href}
                        target={page.target}
                        sx={{ color: 'white' }}
                        className='menu-link-title'
                    >
                        {page.label}
                    </Button>
                ))}
                <Button sx={{ color: 'white' }} href='tel:+393292115340' className='menu-link-title'>
                    Prenota
                </Button>

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
                            {/* Logo */}
                            <Box>
                                <img src="logo.png" alt="Librati Logo" style={{ height: isMobile ? 50 : 70 }} />
                            </Box>

                            {/* Desktop menu */}
                            {!isMobile && (
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    {pages.map((page) => (
                                        <Button
                                            key={page.label}
                                            href={page.href}
                                            target={page.target}
                                            sx={{ color: 'white', fontSize: '18px' }}
                                        >
                                            {page.label}
                                        </Button>
                                    ))}
                                    <Button className='menu-button' href='tel:+393292115340'>
                                        Prenota
                                    </Button>
                                </Box>
                            )}

                            {/* Mobile menu icon */}
                            {isMobile && (
                                <>
                                    <IconButton
                                        edge="end"
                                        color="inherit"
                                        onClick={toggleDrawer(true)}
                                        aria-label="menu"
                                    >
                                        <DragHandleIcon sx={{ fontSize: 32 }} />
                                    </IconButton>
                                    <Drawer
                                        anchor="right"
                                        open={drawerOpen}
                                        onClose={toggleDrawer(false)}
                                    >
                                        {drawerContent}
                                    </Drawer>
                                </>
                            )}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

export default MainHeader;
