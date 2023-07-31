import React from 'react'
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'

export default function TopBar() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <AppBar position="static" sx={{ bgcolor: '#F6F6F7', boxShadow: 'none', border: 0 }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Button sx={{ color: '#888888', textTransform: 'none' }}>My Cart (4)</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
