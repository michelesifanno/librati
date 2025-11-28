import React, { useRef, useEffect } from "react";
import { Box, Container, Button, List, ListItem, Typography, useMediaQuery, Grid } from "@mui/material";
import MenuHeader from "../components/MenuHeader";
import { Link } from "react-router-dom";
import { useMenuData } from "../hooks/useMenuData";
import { useTheme } from "@mui/material/styles";
import { categoryColors } from "../config/colors";

export default function Menu() {
  const { categories } = useMenuData();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const scrollRef = useRef(null);

  // const loopedList = Array(100).fill(categories).flat();

  function formatKey(cat) {
    return cat.toLowerCase().replace(/ & /g, "_").replace(/ /g, "_");
  }

  return (
    <>
      <MenuHeader />

      <Box sx={{ position: "relative", width: "100%" }}>

        {/* CONTENITORE SCROLL SEZIONE */}
        <Box sx={{ position: "relative", minHeight: "100vh", pt: 10 }}>

          <Grid container spacing={10} sx={{ alignItems: 'flex-top', pt: 10 }}>
            <Grid size={{ xs: 12, md: 2 }}>
            </Grid>
            
            <Grid size={{ xs: 12, md: 8 }} sx={{
              position: "sticky",
              top: isMobile ? "30vh" : "10vh",
              zIndex: 0,
              textAlign: "center",
              mb: isMobile ? 15 : 40,
            }}
            >
              <Typography variant='h2' className="hero-title" sx={{ textAlign: 'center!important', color: '#ffc88a!important' }}>
                Le nostre<br/>selezioni.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 2 }}>
            </Grid>

            <Grid size={{ xs: 12, md: 12 }} sx={{ zIndex: 99999999, p: 1, textAlign: 'center', backgroundColor: '#111125' }}>
              <List sx={{ textAlign: "center", pb: 20 }}>
                {categories.map((cat, i) => {
                  const colorData = categoryColors[formatKey(cat)] || { base: "#ffc88a", text: "#111125" };

                  return (
                    <ListItem key={`${cat}-${i}`} sx={{ justifyContent: "center", p: 0, pb: 3 }}>
                      <Button
                        component={Link}
                        to={`/drinklist/${cat}`}
                        variant="outlined"
                        size="large"
                        className="menu-item"
                        sx={{
                          borderColor: colorData.base,
                          color: colorData.base,
                          backgroundColor: colorData.backgroundColor,
                          "&:hover": {
                            backgroundColor: colorData.base,
                            borderColor: colorData.base,
                            color: colorData.text,
                          },
                        }}
                      >
                        <Typography variant='h2' className="menu-item-text">
                          {cat}
                        </Typography>
                      </Button>
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* <Box>
        <Container
          maxWidth="lg"
          sx={{
            textAlign: "center",
            pt: isMobile ? 5 : 10,
            height: "100vh",
            overflowY: "scroll",
            scrollbarWidth: "none",
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": { display: "none" },
          }}
          ref={scrollRef}
        >
          <List sx={{ textAlign: "center", pb: 20 }}>
            {categories.map((cat, i) => {
              const colorData = categoryColors[formatKey(cat)] || { base: "#ffc88a", text: "#111125" };

              return (
                <ListItem key={`${cat}-${i}`} sx={{ justifyContent: "center", p: 0, pb: 3 }}>
                  <Button
                    component={Link}
                    to={`/drinklist/${cat}`}
                    variant="outlined"
                    size="large"
                    className="menu-item"
                    sx={{
                      borderColor: colorData.base,
                      color: colorData.base,
                      "&:hover": {
                        backgroundColor: colorData.base,
                        borderColor: colorData.base,
                        color: colorData.text,
                      },
                    }}
                  >
                    <Typography variant='h2' className="menu-item-text">
                      {cat}
                    </Typography>
                  </Button>
                </ListItem>
              );
            })}
          </List>
        </Container>
      </Box> */}
    </>
  );
}