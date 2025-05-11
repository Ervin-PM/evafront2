import React from "react";
import { Card, CardMedia, Typography } from "@mui/material";

const SectionCard = ({ id, title, content, image, width = 500, height = 200 }) => {
  return (
    <div
      id={id}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // Centrar verticalmente
        margin: id === "home" ? "0" : "1em 0", // Reduce el margen 
        height: id === "home" ? "auto" : "auto", // Ajusta la altura
      }}
    >
      <Card
        sx={{
          width: width, // Ancho fijo absoluto
          height: height, // Altura fija absoluta
          overflow: "hidden", // Oculta el contenido fuera
          position: "relative",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "scale(1.05)", // Efecto de escala al pasar el mouse
            boxShadow: 6, // Sombra más pronunciada al pasar el mouse
          },
        }}
      >
        {/* Imagen en la tarjeta */}
        {image && (
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{
              height: "120px", // Altura de la imagen
              objectFit: "cover", // Ajusta la imagen para que se vea bien
            }}
          />
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            height: "calc(100% - 120px)", // Ajusta la altura para el contenido
            padding: "1em", // Espaciado interno para  que el texto no toque los bordes
            boxSizing: "border-box", // Incluye el padding en el tamaño total
          }}
        >
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            style={{
              whiteSpace: "nowrap", // texto del título no se desborde
              overflow: "hidden", // Oculta el contenido que exceda el tamaño
              textOverflow: "ellipsis", // Agrega puntos suspensivos si el texto es demasiado largo
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{
              overflow: "hidden", // Oculta el contenido que exceda el tamaño
              textOverflow: "ellipsis", // Agrega puntos suspensivos si el texto es demasiado largo
              display: "-webkit-box", // Soporte para truncar texto en varias líneas
              WebkitLineClamp: 3, // Limita el texto a 3 líneas
              WebkitBoxOrient: "vertical", // Configuración para truncar texto en varias líneas
            }}
          >
            {content}
          </Typography>
        </div>
      </Card>
    </div>
  );
};

export default SectionCard;