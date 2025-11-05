import React, { useRef, useEffect } from "react";
import { Box, Container, Button, List, ListItem, useMediaQuery } from "@mui/material";
import MenuHeader from "../components/MenuHeader";
import { Link } from "react-router-dom";
import { useMenuData } from "../hooks/useMenuData";
import { useTheme } from "@mui/material/styles";

export default function Menu() {
  const { categories } = useMenuData();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const scrollRef = useRef(null);

  // Duplico la lista per creare l’effetto nastro infinito
  const loopedList = [...categories, ...categories];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const halfHeight = container.scrollHeight / 2;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;

      // Quando arrivi oltre metà → riposiziona in alto mantenendo la posizione relativa
      if (scrollTop >= halfHeight) {
        container.scrollTop = scrollTop - halfHeight;
      }
      // Quando torni troppo su → vai giù
      else if (scrollTop <= 0) {
        container.scrollTop = halfHeight + scrollTop;
      }
    };

    container.addEventListener("scroll", handleScroll);
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
            {loopedList.map((cat, i) => (
              <ListItem key={`${cat}-${i}`} sx={{ justifyContent: "center" }}>
                <Button
                  component={Link}
                  to={`/menu/${cat}`}
                  variant="outlined"
                  size="large"
                  className="menu-item"
                >
                  {cat}
                </Button>
              </ListItem>
            ))}
          </List>
        </Container>
      </Box>
    </>
  );
}
