import React, { useRef, useEffect } from "react";
import { Box, Container, Button, List, ListItem, useMediaQuery } from "@mui/material";
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

  const loopedList = [...categories, ...categories];

  useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  let scrollY = 0;
  const speed = 0.4; // velocità regolabile
  const totalHeight = container.scrollHeight / 2;
  let animationFrame;

  const animate = () => {
    scrollY += speed;
    if (scrollY >= totalHeight) scrollY = 0;
    container.scrollTop = scrollY;
    animationFrame = requestAnimationFrame(animate);
  };

  animationFrame = requestAnimationFrame(animate);
  return () => cancelAnimationFrame(animationFrame);
}, []);


  return (
    <>
      <MenuHeader />
      <Box>
        <Container
          maxWidth="lg"
          sx={{
            textAlign: "center",
            pt: isMobile ? 5 : 10,
            height: "100vh",
            overflowY: "scroll",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
          ref={scrollRef}
        >
          <List sx={{ textAlign: "center", pb: 20 }}>
            {loopedList.map((cat, i) => {
              const colorData = categoryColors[cat.toLowerCase()] || {
                base: "#ccc",
                text: "#000",
              };
              return (
                <ListItem key={`${cat}-${i}`} sx={{ justifyContent: "center" }}>
                  <Button
                    component={Link}
                    to={`/menu/${cat}`}
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
                    {cat}
                  </Button>
                </ListItem>
              );
            })}
          </List>
        </Container>
      </Box>
    </>
  );
}