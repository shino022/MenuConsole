import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
// Todo: refactore header body and footer into separate components
const Home = () => {
  return (
    <Grid continer>
      <Grid item position="static">
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Header</Typography>
          </Toolbar>
        </AppBar>
      </Grid>
      {/* padding needed to prevent content from being hidden under the header */}
      <Grid item paddingTop={12}>
        <Outlet />
      </Grid>
      <Grid item>
        <footer>{/* Footer */}</footer>
      </Grid>
    </Grid>
  );
};

export default Home;
