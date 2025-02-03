import React, { useState } from 'react';
import { Container, Typography, Alert, CircularProgress } from '@mui/material';
import CheckInForm from './components/CheckInForm';
import { checkIn } from './services/api';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);
      const response = await checkIn(formData);
      if (response.status === 'success') {
        setResult(response.output);
        setError('');
      } else {
        setError(response.output);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        ✈️ Flight Check-In
      </Typography>
      
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {result && <Alert severity="success" sx={{ mb: 2 }}>{result}</Alert>}

      <CheckInForm onSubmit={handleSubmit} loading={loading} />
      
      {loading && <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 2 }} />}
    </Container>
  );
}
