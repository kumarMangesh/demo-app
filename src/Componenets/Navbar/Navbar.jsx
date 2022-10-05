import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const options = [
  {
    title: "Home",
    linkto: "/"
  },
  {
    title: "Favourite",
    linkto: "favourite",
  }
];

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {options.map((option) => (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  underline: "none"
                }}
              >
                <Link to={option.linkto}>{option.title}</Link>
              </Typography>
            </IconButton>
          ))
          }
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

          </Typography >
          <Typography variant="h5">
            <Link to="/login">Login</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
