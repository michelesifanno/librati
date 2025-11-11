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

  const halfHeight = container.scrollHeight / 2;
  let ticking = false;

  const handleScroll = () => {
    if (ticking) return;
    window.requestAnimationFrame(() => {
      const scrollTop = container.scrollTop;
      if (scrollTop >= halfHeight) {
        container.scrollTop = scrollTop - halfHeight;
      } else if (scrollTop <= 0) {
        container.scrollTop = halfHeight + scrollTop;
      }
      ticking = false;
    });
    ticking = true;
  };

  container.addEventListener("scroll", handleScroll, { passive: true });

  // Avvia a metà lista per evitare che inizi dal punto 0
  container.scrollTop = halfHeight / 2;

  return () => container.removeEventListener("scroll", handleScroll);
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