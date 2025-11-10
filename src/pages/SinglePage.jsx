import { useState } from "react";
import { Box, Container, Typography, Tab, Tabs } from "@mui/material";
import { useMenuData } from "../hooks/useMenuData";
import { useTheme } from "@mui/material/styles";
import { useParams } from "react-router";
import Marquee from "react-fast-marquee";
import { categoryColors } from "../config/colors";



export default function SinglePage() {
    const { category } = useParams();
    const { data } = useMenuData();
    const theme = useTheme();
    const [tabIndex, setTabIndex] = useState(0);

    const menuDataByCategory = data[category];

    if (!menuDataByCategory) return <Typography>Loading...</Typography>;

    const colorData = categoryColors[category.toLowerCase()] || { base: "#ccc", text: "#000" };
    const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);

    const handleTabChange = (event, newValue) => setTabIndex(newValue);

    // Controllo se ci sono subcategorie
    const hasSubCategories = !Array.isArray(menuDataByCategory);
    const subCategories = hasSubCategories ? Object.keys(menuDataByCategory) : [];

    // Determino i prodotti da mostrare
    const products = hasSubCategories
        ? menuDataByCategory[subCategories[tabIndex]] || []
        : menuDataByCategory;

    return (
        <Box>
            <Box sx={{ pt: 10, pb: 10, backgroundColor: colorData.base }}>
                <Container maxWidth="lg" sx={{ minHeight: '100vh' }}>
                    <Marquee>
                        <Typography variant="h2" gutterBottom className="title-single-menu" sx={{ color: colorData.text }}>
                            {formattedCategory}
                        </Typography>

                        <Typography variant="h2" gutterBottom className="title-single-menu" sx={{ color: colorData.text }}>
                            {formattedCategory}
                        </Typography>

                        <Typography variant="h2" gutterBottom className="title-single-menu" sx={{ color: colorData.text }}>
                            {formattedCategory}
                        </Typography>
                    </Marquee>

                    {hasSubCategories && (
                        <Tabs value={tabIndex} onChange={handleTabChange} sx={{ mb: 2 }}>
                            {subCategories.map((sub) => (
                                <Tab label={sub.charAt(0).toUpperCase() + sub.slice(1)} key={sub} />
                            ))}
                        </Tabs>
                    )}

                    <Box>
                        {products.map((item, index) => (
                            <Box key={index} sx={{ mb: 2, p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
                                <Typography variant="h6">{item.nome} {item.marchio && `- ${item.marchio}`}</Typography>
                                <Typography>{item.descrizione}</Typography>
                                {item.prezzo && <Typography>Prezzo: €{item.prezzo}</Typography>}
                                {item.gradazione && <Typography>Gradazione: {item.gradazione}</Typography>}
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
