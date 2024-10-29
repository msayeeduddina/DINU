import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    Toolbar,
    Typography
} from '@mui/material';
import Logo from '../logo.png';

import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import '../styles/HeaderStyles.css';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ClearIcon from '@mui/icons-material/Clear';
import SendIcon from '@mui/icons-material/Send';
import Home from '../pages/Home';

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    // hndle menu click
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    //menu drawer
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography
                color={'goldenrod'}
                variant="h6"
                component="div"
                sx={{ my: 0 }}
            >
                <img src={Logo} alt="logo" height={'55'} width="40" />
            </Typography>
            <Divider />
            <ul className="mobile-navigation" style={{ fontSize: '12px' }}>
                <li>
                    <NavLink activeClassName="active" to={'#buylink'}>
                        BUY
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'#chartlink'}>CHART</NavLink>
                </li>
                <li>
                    <NavLink to={''}>ROAD MAP</NavLink>
                </li>
                <li>
                    <NavLink to={''}>CONTACT</NavLink>
                </li>
            </ul>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: '20px'
                }}
            >
                <InsertCommentIcon sx={{ my: '5px' }} />
                <ClearIcon sx={{ my: '5px' }} />
                <SendIcon sx={{ my: '5px' }} />
            </Box>
        </Box>
    );
    return (
        <>
            <Box>
                <AppBar
                    component={'nav'}
                    sx={{
                        bgcolor: 'black',
                        padding: '0rem 6rem',
                        borderBottom: '0.2px solid #f0f0f0'
                    }}
                >
                    <Toolbar
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            sx={{
                                mr: 2,
                                display: { md: 'none' }
                            }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <img
                                src={Logo}
                                alt="logo"
                                height={'55'}
                                width="40"
                            />
                            <span
                                style={{ color: 'white', marginLeft: '10px' }}
                            >
                                DINU
                            </span>
                        </Typography>
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                fontSize: '12px'
                            }}
                        >
                            <ul className="navigation-menu">
                                <li>
                                    <NavLink
                                        activeClassName="active"
                                        to={'#buylink'}
                                    >
                                        BUY
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'#chartlink'}>CHART</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/about'}>ROAD MAP</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/contact'}>CONTACT</NavLink>
                                </li>
                            </ul>
                            <Box>
                                <InsertCommentIcon sx={{ mr: '15px' }} />
                                <ClearIcon sx={{ mr: '15px' }} />
                                <SendIcon />
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: '240px'
                            }
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box>
                    <Toolbar />
                </Box>
            </Box>
        </>
    );
};

export default Header;
