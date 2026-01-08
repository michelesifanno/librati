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
import 'animate.css';
import { Helmet } from "react-helmet-async";




export default function SinglePage() {
    const dispatch = useDispatch();
    const choices = useSelector((state) => state.choices.items);

    // Controlla la validità della sessione a ogni render
    useEffect(() => {
        dispatch(clearExpiredSession());
    }, [dispatch]);

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}, []);


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { category } = useParams();
    const { data } = useMenuData();
    const [tabIndex, setTabIndex] = useState(0);

    const menuDataByCategory = data[category];
    if (!menuDataByCategory) return <Typography>Loading...</Typography>;

    const colorData = categoryColors[category.toLowerCase()] || { base: "#ccc", text: "#000" };
    const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    const hasSubCategories = !Array.isArray(menuDataByCategory);
    const subCategories = hasSubCategories ? Object.keys(menuDataByCategory) : [];

    const products = hasSubCategories
        ? menuDataByCategory[subCategories[tabIndex]] || []
        : menuDataByCategory;

    return (
        <>

            <Helmet>
                <title>{formattedCategory} Menu | Librati Cocktail Giovinazzo</title>
                <meta
                    name="description"
                    content={`Scopri il menu ${formattedCategory} del Librati Cocktail bar a Giovinazzo con selezioni premium e drink artigianali.`}
                />
                <link rel="canonical" href={`https://www.libratipub.com/${formattedCategory}`} />
            </Helmet>


            <Box>
                <Box sx={{ pt: 10, pb: 10, backgroundColor: "#111125" }}>
                    <Container maxWidth="lg" sx={{ minHeight: '100vh' }}>

                        {/* Titolo scorrevole */}
                        <Marquee className="animate__animated animate__fadeIn">
                            {[...Array(3)].map((_, i) => (
                                <Typography
                                    key={i}
                                    variant="h2"
                                    gutterBottom
                                    className="title-single-menu"
                                    sx={{ color: "#ffc88a", textTransform: 'capitalize' }}
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
                                variant="scrollable"
                                sx={{
                                    mb: 2,
                                    position: 'sticky',
                                    top: 75,
                                    zIndex: 1,
                                    backgroundColor: "#111125",
                                    pt: 2,
                                    pb: 2,
                                }}
                                className="animate__animated animate__fadeInUp"
                            >
                                {subCategories.map((sub) => (
                                    <Tab
                                        key={sub}

                                        label={sub.charAt(0).toUpperCase() + sub.slice(1)}
                                        sx={{
                                            border: '2px solid',
                                            borderColor: "#ffc88a",
                                            mr: 2,
                                            color: "#ffc88a",
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                backgroundColor: "#ffc88a",
                                                color: "#111125" || '#fff',
                                                borderColor: "#ffc88a",
                                            },
                                            '&.Mui-selected': {
                                                backgroundColor: "#ffc88a",
                                                color: "#111125" || '#fff',
                                                borderColor: "#ffc88a",
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
                                        borderBottom: `1px solid ${"#ffc88a"}`,
                                        position: 'relative',
                                    }}
                                    className="animate__animated animate__fadeInUpBig"
                                >
                                    {/* Icona preferito */}
                                    <Grid size={{ xs: 1, md: 1 }} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                        <IconButton
                                            onClick={() => dispatch(toggleChoice(item))}
                                            sx={{
                                                color: isChosen ? 'red' : "#ffc88a",
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
                                            sx={{ color: "#fff" }}
                                        >
                                            {item.nome}
                                        </Typography>

                                        {(item.gradazione || item.gradazione_visuale || item.marchio || item.provenienza) && (
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
                                                        sx={{ fontSize: '20px', color: "#fff" }}
                                                    >
                                                        <b>{item.gradazione}</b>
                                                    </Typography>
                                                )}

                                                {item.gradazione_visuale && (
                                                    <Typography
                                                        variant="body1"
                                                        component="span"
                                                        sx={{ color: "#fff" }}
                                                    >
                                                        Gradazione: <b>{item.gradazione_visuale}</b>
                                                    </Typography>
                                                )}
                                                {/* {item.marchio && (
                                                <Typography
                                                    variant="body1"
                                                    component="span"
                                                    sx={{ color: "#111125" }}
                                                >
                                                    {item.marchio} -
                                                </Typography>
                                            )} */}
                                                {item.provenienza && (
                                                    <Typography
                                                        variant="body1"
                                                        component="span"
                                                        sx={{ color: "#fff" }}
                                                    >
                                                        • {item.provenienza}
                                                    </Typography>
                                                )}

                                                {item.colore && (
                                                    <Typography
                                                        variant="body1"
                                                        component="span"
                                                        sx={{ color: "#fff" }}
                                                    >
                                                        • {item.colore}
                                                    </Typography>
                                                )}

                                                {item.stile && (
                                                    <Typography
                                                        variant="body1"
                                                        component="span"
                                                        sx={{ color: "#fff" }}
                                                    >
                                                        • {item.stile}
                                                    </Typography>
                                                )}

                                            </Box>
                                        )}

                                        {item.descrizione && (
                                            <Typography variant="body1" sx={{ color: "#fff", margin: isMobile ? '10px 0px' : '20px 0px 0px 0px' }}>
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
                                                    color: "#ffc88a",
                                                }}
                                            >
                                                <b>{item.prezzo}</b>
                                                <span style={{ fontSize: '17px' }}>€</span>
                                            </Typography>
                                        )}
                                        {item.prezzo_piccola && (
                                            <Typography variant="h2" className="price-single-page" sx={{ textAlign: isMobile ? 'left' : 'right', color: "#ffc88a" }}>
                                                <b>{item.prezzo_piccola}</b>
                                                <span style={{ fontSize: '17px' }}>€ (0.25l)</span>
                                            </Typography>
                                        )}
                                        {item.prezzo_media && (
                                            <Typography variant="h2" className="price-single-page" sx={{ textAlign: isMobile ? 'left' : 'right', color: "#ffc88a" }}>
                                                <b>{item.prezzo_media}</b>
                                                <span style={{ fontSize: '17px' }}>€ (0.40l)</span>
                                            </Typography>
                                        )}
                                        {item.prezzo_mezzo && (
                                            <Typography variant="h2" className="price-single-page" sx={{ textAlign: isMobile ? 'left' : 'right', color: "#ffc88a" }}>
                                                <b>{item.prezzo_mezzo}</b>
                                                <span style={{ fontSize: '17px' }}>€ (mezzo)</span>
                                            </Typography>
                                        )}
                                        {item.prezzo_intero && (
                                            <Typography variant="h2" className="price-single-page" sx={{ textAlign: isMobile ? 'left' : 'right', color: "#ffc88a" }}>
                                                <b>{item.prezzo_intero}</b>
                                                <span style={{ fontSize: '17px' }}>€ (intero)</span>
                                            </Typography>
                                        )}
                                        {item.prezzo_calice && (
                                            <Typography variant="h2" className="price-single-page" sx={{ textAlign: isMobile ? 'left' : 'right', color: "#ffc88a" }}>
                                                <b>{item.prezzo_calice}</b>
                                                <span style={{ fontSize: '17px' }}>€ calice</span>
                                            </Typography>
                                        )}
                                        {item.prezzo_bottiglia && (
                                            <Typography variant="h2" className="price-single-page" sx={{ textAlign: isMobile ? 'left' : 'right', color: "#ffc88a" }}>
                                                <b>{item.prezzo_bottiglia}</b>
                                                <span style={{ fontSize: '17px' }}>€ bottiglia</span>
                                            </Typography>
                                        )}
                                        {item.prezzo_base && (
                                            <Typography variant="h2" className="price-single-page" sx={{ textAlign: isMobile ? 'left' : 'right', color: "#ffc88a" }}>
                                                <b>{item.prezzo_base}</b>
                                                <span style={{ fontSize: '17px' }}>€</span>
                                            </Typography>
                                        )}

                                        {item.prezzo_premium && (
                                            <Typography variant="h2" className="price-single-page" sx={{ textAlign: isMobile ? 'left' : 'right', color: "#ffc88a" }}>
                                                <b> {item.prezzo_premium}</b>
                                                <span style={{ fontSize: '17px' }}>€ PREMIUM</span>
                                            </Typography>
                                        )}

                                    </Grid>
                                </Grid>
                            );
                        })}
                        <Grid container spacing={2} sx={{ alignItems: 'center', pt: 5 }}>
                            <Grid size={{ xs: 12 }} sx={{ borderBottom: `1px solid ${"#ffc88a"}`, p: 4 }}>
                                <Typography variant='body1' sx={{ fontSize: '20px', color: "#fff" }}>
                                    <b>ALTRE PROPOSTE</b><br />
                                    <span style={{ fontSize: '16px', lineHeight: '21px' }}>Non hai trovato quello che cercavi? Nessun problema. Raccontaci i tuoi gusti e ti suggeriremo noi la scelta giusta.</span>
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12 }} sx={{ pt: 2, pl: 4, pb: 4, pr: 4 }} >
                                <Typography variant='body1' sx={{ fontSize: '20px', color: "#fff" }}>
                                    <b>ALLERGIE/INTOLLERENZE</b><br />
                                    <span style={{ fontSize: '16px', lineHeight: '21px' }}>Se hai allergie o intolleranze alimentari, parlane con noi prima di ordinare: saremo felici di consigliarti la scelta più adatta per goderti il tuo drink o snack in completa tranquillità.</span>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
