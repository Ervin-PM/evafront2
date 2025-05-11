import React from "react";
import { Dialog, DialogContent, DialogActions, Button } from "@mui/material";

const Popup = ({ imageSrc, altText, onClose }) => {
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 0, //sin padding
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          style={{
            maxWidth: "100%", // Ajusta la imagen al ancho del popup
            height: "auto", // Mantiene la proporción de la imagen
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;