import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../../App.css';

export default function Header() {
  return (
    <div className="header-container">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Lista de Productos
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
