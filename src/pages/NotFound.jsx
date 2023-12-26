import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Box my={5}>
        <ErrorOutlineIcon style={{ fontSize: 80, color: 'red' }} />
        <Typography variant="h3" gutterBottom>
          404: Page Not Found
        </Typography>
        <Typography variant="subtitle1" style={{ marginBottom: '20px' }}>
          Oops! The page you're looking for doesn't exist.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleBack}>
          Go Back Home
        </Button>
      </Box>
    </Container>
  );
}
