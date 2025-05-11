import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography } from "@mui/material";

const items = [
  {
    image: "/images/slider1.jpg",
    title: "Bienvenidos a Cholchol",
    description: "Un lugar lleno de historia y cultura.",
  },
  {
    image: "/images/slider2.jpg",
    title: "Transparencia y Servicio",
    description: "Comprometidos con la ciudadanía.",
  },
  {
    image: "/images/slider3.jpg",
    title: "Unidades Municipales",
    description: "Conoce nuestros servicios y programas.",
  },
];

const Slider = () => {
  return (
    <Carousel>
      {items.map((item, index) => (
        <Paper
          key={index}
          sx={{
            position: "relative",
            height: "400px",
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <Typography variant="h4">{item.title}</Typography>
            <Typography variant="body1">{item.description}</Typography>
          </div>
        </Paper>
      ))}
    </Carousel>
  );
};

export default Slider;