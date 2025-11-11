import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, useMediaQuery, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import WestIcon from '@mui/icons-material/West';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector, useDispatch } from 'react-redux';
import { toggleChoice, clearExpiredSession } from '../slices/choicesSlice';
import DeleteIcon from '@mui/icons-material/Delete';



export default function MenuHeader() {

    const dispatch = useDispatch();
    const choices = useSelector((state) => state.choices.items);

    // Controlla la validità della sessione a ogni render
    useEffect(() => {
        dispatch(clearExpiredSession());
    }, [dispatch]);


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
            sx={{
                minWidth: isMobile ? '100vw' : '75vw',
                minHeight: '110vh',
                zIndex: '99999',
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
            }}
            role="presentation"
        >
            <Container
                sx={{
                    p: isMobile ? '60px 20px' : '60px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    height: '100%',
                }}
            >
                {/* Header Drawer */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body1" className="title-in-menu">
                        Le tue scelte
                    </Typography>
                    <IconButton onClick={toggleDrawer(false)} sx={{ p: 0 }}>
                        <CloseIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                </Box>

                {/* Lista scelte */}
                {choices.length > 0 ? (
                    <List sx={{ width: '100%' }}>
                        {choices.map((item, index) => {
                            const isChosen = choices.some((i) => i.nome === item.nome);
                            return (
                                <Grid
                                    key={index}
                                    container
                                    spacing={0}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        padding: '40px 0px',
                                        borderBottom: '1px solid',
                                        position: 'relative',
                                    }}
                                >

                                    {/* Dettagli prodotto */}
                                    <Grid size={{ xs: 10 }} sx={{ paddingRight: isMobile ? '20px' : '0px' }}>
                                        <Typography
                                            variant="h2"
                                            className="title-drawer"
                                            sx={{ mb: 2 }}
                                        >
                                            {item.nome}
                                        </Typography>
                                        {item.prezzo && (
                                            <Typography
                                                variant="h2"
                                                className="price-drawer"
                                                sx={{ textAlign: 'left' }}
                                            >
                                                <b>{item.prezzo}</b>
                                                <span style={{ fontSize: '14px' }}>€</span>
                                            </Typography>
                                        )}
                                        {item.prezzo_piccola && (
                                            <Typography variant="h2" className="price-drawer" sx={{ textAlign: 'left' }}>
                                                <b>{item.prezzo_piccola}</b>
                                                <span style={{ fontSize: '14px' }}>€ (0.25l)</span>
                                            </Typography>
                                        )}
                                        {item.prezzo_grande && (
                                            <Typography variant="h2" className="price-drawer" sx={{ textAlign: 'left' }}>
                                                <b>{item.prezzo_grande}</b>
                                                <span style={{ fontSize: '14px' }}>€ (0.40l)</span>
                                            </Typography>
                                        )}
                                        {item.prezzo_mezzo && (
                                            <Typography variant="h2" className="price-drawer" sx={{ textAlign: 'left' }}>
                                                <b>{item.prezzo_mezzo}</b>
                                                <span style={{ fontSize: '14px' }}>€ (mezzo)</span>
                                            </Typography>
                                        )}
                                        {item.prezzo_intero && (
                                            <Typography variant="h2" className="price-drawer" sx={{ textAlign: 'left' }}>
                                                <b>{item.prezzo_intero}</b>
                                                <span style={{ fontSize: '14px' }}>€ (intero)</span>
                                            </Typography>
                                        )}
                                        {item.prezzo_calice && (
                                            <Typography variant="h2" className="price-drawer" sx={{ textAlign: 'left' }}>
                                                <b>{item.prezzo_calice}</b>
                                                <span style={{ fontSize: '14px' }}>€ calice</span>
                                            </Typography>
                                        )}
                                        {item.prezzo_bottiglia && (
                                            <Typography variant="h2" className="price-drawer" sx={{ textAlign: 'left' }}>
                                                <b>{item.prezzo_bottiglia}</b>
                                                <span style={{ fontSize: '14px' }}>€ bottiglia</span>
                                            </Typography>
                                        )}
                                    </Grid>
                                    {/* Icona preferito */}
                                    <Grid size={{ xs: 2, md: 2 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <IconButton
                                            onClick={() => dispatch(toggleChoice(item))}
                                            sx={{
                                                color: 'red',
                                                transition: 'all 0.3s ease',
                                                '&:hover': { transform: 'scale(1.2)' },
                                                textAlign: 'left',
                                            }}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Grid>

                                </Grid>
                            );
                        })}
                    </List>
                ) : (
                    <Typography variant='body1' sx={{ color: '#111125' }}>Nessuna scelta ancora 😭😭😭</Typography>
                )}
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
                            <Box
                                onClick={toggleDrawer(true)}
                                sx={{
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    position: 'relative',
                                }}
                            >
                                <FavoriteIcon sx={{ fontSize: '36px', color: choices.length > 0 ? 'red' : '#fff' }} />
                                {choices.length > 0 && (
                                    <Box
                                        component="span"
                                        sx={{
                                            position: 'absolute',
                                            top: -8,
                                            right: -8,
                                            backgroundColor: 'red',
                                            color: 'white',
                                            borderRadius: '50%',
                                            width: 22,
                                            height: 22,
                                            fontSize: '14px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {choices.length}
                                    </Box>
                                )}
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