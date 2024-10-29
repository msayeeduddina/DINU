import React from 'react';
import { Box, Typography } from '@mui/material';
import '../styles/FooterStyles.css';
import Logo from '../logo.png';
import { NavLink } from 'react-router-dom';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ClearIcon from '@mui/icons-material/Clear';
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
    return (
        <>
            <Box className="footer">
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <img src={Logo} alt="logo" height={'50'} width="40" />
                    <span style={{ color: 'white', marginLeft: '10px' }}>
                        DINU
                    </span>
                </Typography>
                <ul
                    className="footer-link"
                    style={{ fontSize: '12px', display: 'flex' }}
                >
                    <li>
                        <NavLink activeClassName="active" to={'/'}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/menu'}>Explore</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact'}>Collections</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact'}>Team</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact'}>Contact</NavLink>
                    </li>
                </ul>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: '20px'
                    }}
                >
                    <InsertCommentIcon sx={{ mx: '10px', fontSize: '1rem' }} />
                    <ClearIcon sx={{ mx: '10px', fontSize: '1rem' }} />
                    <SendIcon sx={{ mx: '10px', fontSize: '1rem' }} />
                </Box>
                <Typography
                    variant="body2"
                    sx={{ mt: '10px', fontSize: '9px' }}
                >
                    Copyright &copy; 2023, DINU
                </Typography>
            </Box>
        </>
    );
};

export default Footer;
