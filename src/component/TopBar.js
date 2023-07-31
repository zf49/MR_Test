import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useMediaQuery, createTheme, ThemeProvider } from '@mui/material';

export default function TopBar() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const labelClickCounts = useSelector((state) => state.cart.labelClickCounts);
    const clickCount = useSelector((state) => state.cart.clickCount);

    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920,
            },
        },
    });

    
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <ThemeProvider theme={theme}>
            <div style={{ margin: 0, padding: 0 }}>
                <AppBar position="static" sx={{ bgcolor: '#F6F6F7', boxShadow: 'none', border: 0 }}>
                    <Toolbar>
                        <Box sx={{ flexGrow: 1 }}></Box>
                        {isMobile ? (
                            <Button
                                
                                sx={{ color: '#888888', textTransform: 'none' }}
                                onClick={handleClick}
                            >{<ShoppingCartIcon />}{'('+clickCount+')'}</Button>
                        ) : (
                            <Button
                                sx={{ color: '#888888', textTransform: 'none' }}
                                onClick={handleClick}
                            >
                                {`My Cart (${clickCount})`}
                            </Button>
                        )}

                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            {Object.keys(labelClickCounts).map((key) => (
                                <MenuItem key={key} sx={{ display: 'flex', alignItems: 'center', height: '100px' }}>
                                    <div style={{ marginRight: '10px' }}>
                                        <img src={labelClickCounts[key].pic} width="50" height="100" />
                                    </div>
                                    <div>
                                        <Typography>
                                            Title: {labelClickCounts[key].title}
                                        </Typography>
                                        <Typography>
                                            {labelClickCounts[key].clickCount} x <strong>{'$' + labelClickCounts[key].price}</strong>
                                        </Typography>
                                        <Typography>
                                            Size: {key}
                                        </Typography>
                                    </div>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Toolbar>
                </AppBar>
            </div>
        </ThemeProvider>
    );
}
