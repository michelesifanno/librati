import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';




const pages = ['Menu', 'About', 'Dove siamo'];

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
            sx={{ minWidth: '100vw' }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <IconButton
                edge="end"
                color="inherit"
                onClick={toggleDrawer(false)}
                aria-label="menu"
            >
                <CloseIcon sx={{ fontSize: 32 }} />
            </IconButton>
            <List>
                {pages.map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Prenota" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: scrolled ? '#121c3b' : 'transparent',
                    boxShadow: scrolled ? 2 : 'none',
                    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                    zIndex: 99999999,
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
                                        <Button key={page} sx={{ color: 'white', fontSize: '18px' }}>
                                            {page}
                                        </Button>
                                    ))}
                                    <Button
                                        sx={{
                                            color: 'white',
                                            backgroundColor: 'black',
                                            fontSize: '18px',
                                            paddingX: '30px',
                                            '&:hover': { backgroundColor: '#333' },
                                        }}
                                    >
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
