import React, { useState } from "react";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateField = (name, value) => {
    let error = "";
    if (name === "name") {
      if (!value.trim()) {
        error = "El nombre es obligatorio.";
      } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) {
        error = "El nombre solo puede contener letras.";
      }
    }
    if (name === "email") {
      if (!value.trim()) {
        error = "El correo electrónico es obligatorio.";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = "El correo electrónico no es válido.";
      }
    }
    if (name === "phone") {
      if (!value.trim()) {
        error = "El número telefónico es obligatorio.";
      } else if (!/^\d{9,15}$/.test(value)) {
        error = "El número telefónico debe tener entre 9 y 15 dígitos.";
      }
    }
    if (name === "message") {
      if (!value.trim()) {
        error = "El mensaje es obligatorio.";
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validar el campo en tiempo real
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
    } else {
      setErrors({});
      setSuccess(true);
      console.log("Datos enviados:", formData);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: "600px",
        margin: "2em auto",
        padding: "2em",
        backgroundColor: "white",
        boxShadow: 3,
        borderRadius: "8px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contáctanos
      </Typography>
      {success && <Alert severity="success">Formulario enviado con éxito.</Alert>}
      <TextField
        fullWidth
        label="Nombre"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Correo Electrónico"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Número Telefónico"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        error={!!errors.phone}
        helperText={errors.phone}
        margin="normal"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
      />
      <TextField
        fullWidth
        label="Mensaje"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={!!errors.message}
        helperText={errors.message}
        margin="normal"
        multiline
        rows={4}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ marginTop: "1em" }}
      >
        Enviar
      </Button>
    </Box>
  );
};

export default ContactForm;