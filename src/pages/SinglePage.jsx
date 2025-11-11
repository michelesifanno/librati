import { useState, useEffect } from "react";
import { Box, Container, Typography, Tab, Tabs, useMediaQuery, Grid, IconButton } from "@mui/material";
import { useMenuData } from "../hooks/useMenuData";
import { useTheme } from "@mui/material/styles";
import { useParams } from "react-router";
import Marquee from "react-fast-marquee";
import { categoryColors } from "../config/colors";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { toggleChoice, clearExpiredSession } from '../slices/choicesSlice';

export default function SinglePage() {
    const dispatch = useDispatch();
    const choices = useSelector((state) => state.choices.items);

    // Controlla la validità della sessione a ogni render
    useEffect(() => {
        dispatch(clearExpiredSession());
    }, [dispatch]);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { category } = useParams();
    const { data } = useMenuData();
    const [tabIndex, setTabIndex] = useState(0);

    const menuDataByCategory = data[category];
    if (!menuDataByCategory) return <Typography>Loading...</Typography>;

    const colorData = categoryColors[category.toLowerCase()] || { base: "#ccc", text: "#000" };
    const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);

    const handleTabChange = (event, newValue) => setTabIndex(newValue);

    const hasSubCategories = !Array.isArray(menuDataByCategory);
    const subCategories = hasSubCategories ? Object.keys(menuDataByCategory) : [];

    const products = hasSubCategories
        ? menuDataByCategory[subCategories[tabIndex]] || []
        : menuDataByCategory;

    return (
        <Box>
            <Box sx={{ pt: 10, pb: 10, backgroundColor: colorData.base }}>
                <Container maxWidth="lg" sx={{ minHeight: '100vh' }}>

                    {/* Titolo scorrevole */}
                    <Marquee>
                        {[...Array(3)].map((_, i) => (
                            <Typography
                                key={i}
                                variant="h2"
                                gutterBottom
                                className="title-single-menu"
                                sx={{ color: colorData.text }}
                            >
                                {formattedCategory}
                            </Typography>
                        ))}
                    </Marquee>

                    {/* Tabs sottocategorie */}
                    {hasSubCategories && (
                        <Tabs
                            value={tabIndex}
                            onChange={handleTabChange}
                            sx={{
                                mb: 2,
                                position: 'sticky',
                                top: 75,
                                zIndex: 1,
                                backgroundColor: colorData.base,
                                pt: 2,
                                pb: 2,
                            }}
                        >
                            {subCategories.map((sub) => (
                                <Tab
                                    key={sub}
                                    label={sub.charAt(0).toUpperCase() + sub.slice(1)}
                                    sx={{
                                        border: '2px solid',
                                        borderColor: colorData.text,
                                        mr: 2,
                                        color: colorData.text,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: colorData.text,
                                            color: colorData.hoverText || '#fff',
                                            borderColor: colorData.text,
                                        },
                                        '&.Mui-selected': {
                                            backgroundColor: colorData.text,
                                            color: colorData.hoverText || '#fff',
                                            borderColor: colorData.text,
                                        },
                                        '&.Mui-focusVisible': {
                                            outline: 'none',
                                            boxShadow: 'none',
                                        },

                                    }}
                                />
                            ))}
                        </Tabs>
                    )}

                    {/* Prodotti */}
                    {products.map((item, index) => {
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
                                    borderBottom: `1px solid ${colorData.text}`,
                                    position: 'relative',
                                }}
                            >
                                {/* Icona preferito */}
                                <Grid size={{ xs: 1, md: 1 }} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <IconButton
                                        onClick={() => dispatch(toggleChoice(item))}
                                        sx={{
                                            color: isChosen ? 'red' : colorData.text,
                                            transition: 'all 0.3s ease',
                                            '&:hover': { transform: 'scale(1.2)' },
                                        }}
                                    >
                                        {isChosen ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                    </IconButton>
                                </Grid>

                                {/* Dettagli prodotto */}
                                <Grid size={{ xs: 10, md: 7 }} sx={{ paddingLeft: isMobile ? '20px' : '0px' }}>
                                    <Typography
                                        variant="h2"
                                        className="title-single-page"
                                        sx={{ color: colorData.text }}
                                    >
                                        {item.nome}
                                    </Typography>

                                    {(item.gradazione || item.marchio || item.provenienza) && (
                                        <Box
                                            sx={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: 1,
                                                flexWrap: "wrap",
                                            }}
                                        >
                                            {item.gradazione && (
                                                <Typography
                                                    variant="body1"
                                                    component="span"
                                                    sx={{ fontSize: '20px', color: colorData.text }}
                                                >
                                                    <b>{item.gradazione}</b> -
                                                </Typography>
                                            )}
                                            {/* {item.marchio && (
                                                <Typography
                                                    variant="body1"
                                                    component="span"
                                                    sx={{ color: colorData.text }}
                                                >
                                                    {item.marchio} -
                                                </Typography>
                                            )} */}
                                            {item.provenienza && (
                                                <Typography
                                                    variant="body1"
                                                    component="span"
                                                    sx={{ color: colorData.text }}
                                                >
                                                    {item.provenienza}
                                                </Typography>
                                            )}
                                        </Box>
                                    )}

                                    {item.descrizione && (
                                        <Typography variant="body1" sx={{ color: colorData.text, margin: isMobile ? '10px 0px' : '20px 0px 0px 0px' }}>
                                            {item.descrizione}
                                        </Typography>
                                    )}
                                </Grid>

                                {/* Prezzi */}
                                <Grid size={{ xs: 12, md: 4 }} sx={{ paddingLeft: isMobile ? '50px' : '0px', mt: 0 }}>
                                    {item.prezzo && (
                                        <Typography
                                            variant="h2"
                                            className="price-single-page"
                                            sx={{
                                                textAlign: isMobile ? 'left' : 'right',
                                                mt: 2,
                                                color: colorData.text,
                                            }}
                                        >
                                            <b>{item.prezzo}</b>
                                            <span style={{ fontSize: '17px' }}>€</span>
                                        </Typography>
                                    )}
                                    {item.prezzo_piccola && (
                                        <Typography variant="h2" className="price-single-page" sx={{ textAlign: isMobile ? 'left' : 'right', color: colorData.text }}>
                                            <b>{item.prezzo_piccola}</b>
                                            <span style={{ fontSize: '17px' }}>€ (0.25l)</span>
                                        </Typography>
                                    )}
                                    {item.prezzo_grande && (
                                        <Typography variant="h2" className="price-single-page" sx={{ textAlign: isMobile ? 'left' : 'right', color: colorData.text }}>
                                            <b>{item.prezzo_grande}</b>
                                            <span style={{ fontSize: '17px' }}>€ (0.40l)</span>
                                        </Typography>
                                    )}
                                    {item.prezzo_mezzo && (
                                        <Typography variant="h2" className="price-single-page" sx={{ textAlign: isMobile ? 'left' : 'right', color: colorData.text }}>
                                            <b>{item.prezzo_mezzo}</b>
                                            <span style={{ fontSize: '17px' }}>€ (mezzo)</span>
                                        </Typography>
                                    )}
                                    {item.prezzo_intero && (
                                        <Typography variant="h2" className="price-single-page" sx={{ textAlign: isMobile ? 'left' : 'right', color: colorData.text }}>
                                            <b>{item.prezzo_intero}</b>
                                            <span style={{ fontSize: '17px' }}>€ (intero)</span>
                                        </Typography>
                                    )}
                                    {item.prezzo_calice && (
                                        <Typography variant="h2" className="price-single-page" sx={{ textAlign: isMobile ? 'left' : 'right', color: colorData.text }}>
                                            <b>{item.prezzo_calice}</b>
                                            <span style={{ fontSize: '17px' }}>€ calice</span>
                                        </Typography>
                                    )}
                                    {item.prezzo_bottiglia && (
                                        <Typography variant="h2" className="price-single-page" sx={{ textAlign: isMobile ? 'left' : 'right', color: colorData.text }}>
                                            <b>{item.prezzo_bottiglia}</b>
                                            <span style={{ fontSize: '17px' }}>€ bottiglia</span>
                                        </Typography>
                                    )}
                                </Grid>
                            </Grid>
                        );
                    })}
                </Container>
            </Box>
        </Box>
    );
}
