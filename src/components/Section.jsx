import React from "react";
import { Container, Typography } from "@mui/material";

const Section = ({ id, title, content }) => {
  return (
    <Container id={id} sx={{ padding: "4em 0" }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">{content}</Typography>
    </Container>
  );
};

export default Section;