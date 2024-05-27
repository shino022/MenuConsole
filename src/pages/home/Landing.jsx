import React from 'react';
import { Typography, Container, Grid, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router';
const Landing = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="md">
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="h1" component="h1" align="center">
            Welcome to our SaaS Landing Page
          </Typography>
          <Typography variant="h4" component="h2" align="center">
            Discover the power of our amazing software
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <Button
              onClick={() => {
                navigate('/login');
              }}
              variant="contained"
              color="primary"
              size="large"
            >
              Login
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box width={'100%'} height={'200px'} sx={{ backgroundColor: '#96a4be' }}>
            {/* Add any additional content or images here */}
            An Image
          </Box>
        </Grid>
        <Grid item xs={10} sm={10}>
          <Typography variant="h4" component="h2" align="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repudiandae, dicta fuga magnam voluptate similique ipsam nemo
            vero totam nobis temporibus quas modi, nisi esse earum. Nihil inventore repellat necessitatibus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Alias repudiandae, dicta fuga magnam voluptate similique ipsam nemo vero totam nobis temporibus
            quas modi, nisi esse earum. Nihil inventore repellat necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Alias repudiandae, dicta fuga magnam voluptate similique ipsam nemo vero totam nobis temporibus quas modi, nisi esse earum.
            Nihil inventore repellat necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repudiandae, dicta fuga
            magnam voluptate similique ipsam nemo vero totam nobis temporibus quas modi, nisi esse earum. Nihil inventore repellat
            necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repudiandae, dicta fuga magnam voluptate
            similique ipsam nemo vero totam nobis temporibus quas modi, nisi esse earum. Nihil inventore repellat necessitatibus. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Alias repudiandae, dicta fuga magnam voluptate similique ipsam nemo vero
            totam nobis temporibus quas modi, nisi esse earum. Nihil inventore repellat necessitatibus.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Landing;
