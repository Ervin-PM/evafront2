import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { Link } from "react-scroll";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "municipio", label: "Municipio" },
    { id: "unidades", label: "Unidades Municipales" },
    { id: "contacto", label: "Contacto" },
  ];

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#1E3A5F", // Azul mate
      }}
    >
      <Toolbar sx={{ position: "relative", justifyContent: "center" }}>
        {/* Logo de la municipalidad */}
        <Avatar
          src="/images/logo.png"
          alt="Logo Municipalidad de Cholchol"
          sx={{
            width: 50,
            height: 50,
            position: "absolute",
            left: "1em",
          }}
        />

        {/* Título centrado */}
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
          }}
        >
          MUNICIPALIDAD DE CHOLCHOL
        </Typography>

        {/* Menú hamburguesa en diferentes pantallas */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{
            display: { xs: "block", sm: "none" },
            position: "absolute",
            right: "1em",
          }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Botones de navegación en pantallas grandes */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "1em", position: "absolute", right: "1em" }}>
          {sections.map((section) => (
            <Button
              key={section.id}
              color="inherit"
              component={Link}
              to={section.id}
              smooth={true}
              duration={500}
              sx={{
                transition: "transform 0.2s, background-color 0.2s", // Efecto de transición
                "&:hover": {
                  transform: "scale(1.1)", // Efecto de movimiento al pasar el mouse
                  backgroundColor: "rgba(255, 255, 255, 0.2)", // Marca visual al pasar el mouse
                },
              }}
            >
              {section.label}
            </Button>
          ))}
        </Box>
      </Toolbar>

      {/* Drawer para menú hamburguesa */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {sections.map((section) => (
            <ListItem key={section.id} disablePadding>
              <ListItemButton
                component={Link}
                to={section.id}
                smooth={true}
                duration={500}
                onClick={toggleDrawer(false)}
                sx={{
                  transition: "transform 0.2s, background-color 0.2s", // Efecto de transición
                  "&:hover": {
                    transform: "scale(1.05)", // Efecto  al pasar el mouse
                    backgroundColor: "rgba(0, 0, 0, 0.1)", // Marca al pasar el mouse
                  },
                }}
              >
                <ListItemText primary={section.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;