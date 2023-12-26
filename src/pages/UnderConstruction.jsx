import React from "react";
import { Container, Typography, Box, CircularProgress } from "@mui/material";

export default function UnderConstruction() {
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Box my={5}>
        <Typography variant="h3" gutterBottom>
          Site Under Construction
        </Typography>
        <Typography variant="subtitle1">
          We're working hard to improve our website and we'll ready to launch after
        </Typography>
        <CircularProgress color="warning" style={{ margin: '20px 0' }} />
        <Typography variant="body1">
          Thank you for your patience!
        </Typography>
      </Box>
    </Container>
  );
}
