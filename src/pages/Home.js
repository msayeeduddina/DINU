import React, { useState } from 'react';
import Layout from './../components/Layout';
import { Link } from 'react-router-dom';
import '../styles/HomeStyles.css';
import AboutImage1 from '../images/image3.png';
import Buygrad from '../images/grad1.png';
import DetailsImg1 from '../images/image1.png';
import Aboutgrad from '../images/grad2.png';
import RoadmapImage from '../images/chart.png';
import BuyImage1 from '../images/image2.png';
import Avalanche from '../images/avalanche.png';
import NewLogo from '../images/newLogo.png';
import { useRef } from 'react';
import {
    Button,
    Typography,
    Drawer,
    IconButton,
    Box,
    Grid,
    Paper,
    Divider,
    AppBar,
    Toolbar,
    useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { NavLink, useNavigate } from 'react-router-dom';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ClearIcon from '@mui/icons-material/Clear';
import TelegramIcon from '@mui/icons-material/Telegram';
import Logo from '../logo.png';
import Twitter from '../images/twitter.svg';
import Discord from '../images/discord.svg';
import Telegram from '../images/telegram.svg';
import Name from '../images/name.png';

const Home = () => {
    const buyRef = useRef(null);
    const chartRef = useRef(null);
    const roadmapRef = useRef(null);
    // const detailsRef = useRef(null);
    const scrollToElement = ref => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const isSmallScreen = useMediaQuery('(max-width:1024px)');

    const [mobileOpen, setMobileOpen] = useState(false);
    // hndle menu click
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const navigate = useNavigate();

    const handleBuyNow = () => {
        window.open(
            'https://app.pangolin.exchange/#/swap?inputCurrency=AVAX&outputCurrency=0x04d7247B43a61923D82612a184069E01f998F479',
            '_blank'
        );
    };

    const handleTwitterRedirect = () => {
        // window.location.href = 'https://twitter.com/diaperinu';
        window.open('https://twitter.com/diaperinu', '_blank');
    };
    const handleTelegramRedirect = () => {
        window.open('https://t.me/diaperinu', '_blank');
    };

    const handleSnowtrace = () => {
        window.open(
            'https://testnet.snowtrace.io/address/0x04d7247B43a61923D82612a184069E01f998F479',
            '_blank'
        );
    };

    const handleReadWhitePaper = () => {};

    //menu drawer
    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{
                textAlign: 'center',
                height: '100vh',
                backgroundImage: 'linear-gradient(to bottom, #00afff, #d25afb)'
            }}
        >
            <Typography
                color={'goldenrod'}
                variant="h6"
                component="div"
                sx={{ mt: 2 }}
            >
                <img src={NewLogo} alt="logo" height={'40'} />
            </Typography>
            <Divider />
            <ul className="mobile-navigation">
                <li>
                    <NavLink
                        activeClassName="active"
                        to="#"
                        onClick={() => scrollToElement(buyRef)}
                    >
                        BUY
                    </NavLink>
                </li>
                <li>
                    <NavLink to="#" onClick={() => scrollToElement(chartRef)}>
                        CHART
                    </NavLink>
                </li>
                <li>
                    <NavLink to="#" onClick={() => scrollToElement(roadmapRef)}>
                        ROAD MAP
                    </NavLink>
                </li>
                <li>
                    <NavLink to="#">CONTACT</NavLink>
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
                <img
                    src={Discord}
                    alt=""
                    style={{
                        width: '25px',
                        margin: '10px 0px',
                        cursor: 'pointer',
                        filter: 'invert(1)'
                    }}
                    // onClick={handleDiscordRedirect}
                />
                <img
                    src={Twitter}
                    alt=""
                    style={{
                        width: '25px',
                        margin: '10px 0px',
                        cursor: 'pointer',
                        filter: 'invert(1)'
                    }}
                    onClick={handleTwitterRedirect}
                />
                <img
                    src={Telegram}
                    alt=""
                    style={{
                        width: '25px',
                        margin: '10px 0px',
                        cursor: 'pointer',
                        filter: 'invert(1)'
                    }}
                    onClick={handleTelegramRedirect}
                />
            </Box>
        </Box>
    );

    const linearGradient = 'linear-gradient(to bottom, #00afff, #d25afb)';

    const gradientTextStyle = {
        backgroundImage: linearGradient,
        WebkitBackgroundClip: 'text' /* For Safari */,
        backgroundClip: 'text',
        color: 'transparent',
        fontWeight: 900
    };

    const handleTextClick = text => {
        navigator.clipboard
            .writeText(text)
            .then(() => {})
            .catch(err => {
                console.error('Unable to copy text to clipboard:', err);
            });
    };

    return (
        <Layout>
            <Box>
                <Box component={'nav'} className="nav">
                    <Toolbar
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <IconButton
                            style={{ color: 'white' }}
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
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <img className="logo" src={NewLogo} alt="logo" />
                            <img className="name" src={Name} alt="logo" />
                        </Box>
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
                                        to="#"
                                        onClick={() => scrollToElement(buyRef)}
                                    >
                                        BUY
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="#"
                                        onClick={() =>
                                            scrollToElement(chartRef)
                                        }
                                    >
                                        CHART
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="#"
                                        onClick={() =>
                                            scrollToElement(roadmapRef)
                                        }
                                    >
                                        ROAD MAP
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="#"
                                        // onClick={() =>
                                        //     scrollToElement(detailsRef)
                                        // }
                                    >
                                        CONTACT
                                    </NavLink>
                                </li>
                            </ul>
                            <Box
                                className="icons"
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    'img:hover': {
                                        filter: 'invert(47%) sepia(54%) saturate(445%) hue-rotate(165deg)',
                                        transform: 'translateX(2px)'
                                    }
                                }}
                            >
                                <img
                                    src={Discord}
                                    alt=""
                                    // onClick={handleDiscordRedirect}
                                />
                                <img
                                    src={Twitter}
                                    alt=""
                                    onClick={handleTwitterRedirect}
                                />
                                <img
                                    src={Telegram}
                                    alt=""
                                    onClick={handleTelegramRedirect}
                                />
                            </Box>
                        </Box>
                    </Toolbar>
                </Box>
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
                <hr
                    style={{
                        height: '1.5px',
                        border: 'none',
                        backgroundColor: '#444444',
                        opacity: '0.6'
                    }}
                />
                {/* <Box>
                    <Toolbar />
                </Box> */}
            </Box>
            <Box className="content">
                <section>
                    <Grid container className="buy" id="buylink" ref={buyRef}>
                        <Grid item xs={6.5} md={6} className="headerContainer">
                            <Typography
                                variant={isSmallScreen ? 'h4' : 'h3'}
                                sx={{
                                    mb: '6px',
                                    fontWeight: '800',
                                    fontFamily: 'Montserrat'
                                }}
                            >
                                Discover, find,
                            </Typography>
                            <Typography
                                variant={isSmallScreen ? 'h4' : 'h3'}
                                style={gradientTextStyle}
                                sx={{
                                    mb: '6px',
                                    fontWeight: '800',
                                    fontFamily: 'Montserrat',
                                    whiteSpace: ''
                                }}
                            >
                                EXTRAORDINARY
                            </Typography>
                            <Typography
                                variant={isSmallScreen ? 'h4' : 'h3'}
                                sx={{
                                    mb: '30px',
                                    fontWeight: '800',
                                    fontFamily: 'Montserrat'
                                }}
                            >
                                Diaper{' '}
                                <span style={{ color: '#00afff' }}>Coin</span>
                            </Typography>
                            <Typography
                                variant="body2"
                                style={{
                                    // fontSize: '13px',
                                    marginBottom: '5px'
                                }}
                            >
                                Welcome to DiaperCoin!
                            </Typography>
                            <Typography
                                className="paragraph"
                                style={{
                                    // fontSize: '13px',
                                    marginBottom: '30px',
                                    lineHeight: '2',
                                    paddingRight: '1.5rem'
                                }}
                            >
                                Join us on this hilarious journey of DiaperCoin
                                as we embrace the lighter side of crypto.
                                Together, let's create a community like no
                                other, where laughter and success go hand in
                                hand. Stay tuned for more updates and get ready
                                to dive into the diaper meme revolution!
                            </Typography>
                            <Box>
                                <button
                                    variant="contained"
                                    className="left"
                                    onClick={handleBuyNow}
                                    style={{
                                        fontSize: isSmallScreen
                                            ? '14px'
                                            : '16px',
                                        padding: isSmallScreen
                                            ? '5px 20px'
                                            : '5px 35px'
                                    }}
                                >
                                    Buy Now
                                </button>
                                <button
                                    variant="outlined"
                                    className="right"
                                    onClick={handleReadWhitePaper}
                                    style={{
                                        fontSize: isSmallScreen
                                            ? '14px'
                                            : '16px',
                                        padding: isSmallScreen
                                            ? '5px 20px'
                                            : '5px 35px'
                                    }}
                                >
                                    Read White Papper
                                </button>
                            </Box>
                        </Grid>
                        <Grid item xs={5.5} md={6} className="headerImage">
                            <img src={Buygrad} alt="" class="background" />
                            <img src={BuyImage1} alt="" class="foreground" />
                        </Grid>
                    </Grid>
                </section>

                <section>
                    <Grid container className="about">
                        <Grid item xs={6} lg={6} className="headerImage">
                            <img src={Aboutgrad} alt="" class="background" />
                            <img src={AboutImage1} alt="" class="foreground" />
                        </Grid>
                        <Grid item xs={6} lg={6} className="headerContainer">
                            <Typography
                                variant={isSmallScreen ? 'h4' : 'h3'}
                                sx={{
                                    mb: '20px',
                                    fontWeight: '800',
                                    fontFamily: 'Montserrat'
                                }}
                            >
                                About Diaper Inu
                            </Typography>
                            <Typography variant="body2">
                                Unique Story:
                            </Typography>
                            <Typography variant="body2" sx={{ mb: '15px' }}>
                                DiaperCoin is not your ordinary meme token.
                                Inspired by the adorable and humorous aspect of
                                diapers, we aim to bring laughter and fun to the
                                cryptocurrency world. Our unique story started
                                with a group of cryptocurrency enthusiasts and
                                tech wizards who wanted to create a lighthearted
                                and inclusive community while adding a touch of
                                humor to the market.
                            </Typography>
                            <Typography variant="body2">
                                Avax Chain:{' '}
                            </Typography>
                            <Typography variant="body2">
                                DiaperCoin is built on the Avalanche (Avax)
                                blockchain, known for its high-speed
                                transactions and low fees. By leveraging the
                                Avax chain, we ensure a smooth user experience,
                                allowing enthusiasts to trade and interact with
                                ease.
                            </Typography>
                        </Grid>
                    </Grid>
                </section>

                <section>
                    <Box className="solution">
                        <Box className="row">
                            <Box>
                                <Typography
                                    variant={isSmallScreen ? 'h4' : 'h3'}
                                    sx={{
                                        marginBottom: '80px',
                                        fontWeight: '800',
                                        fontFamily: 'Montserrat'
                                    }}
                                >
                                    Complete Solutions for your COIN
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="row">
                            <Box className="solBox">
                                <Box className="solImg">
                                    <img src={Avalanche} alt="" />
                                </Box>
                                <Typography variant="h6">
                                    Exchange Listing
                                </Typography>
                                <Typography
                                    variant="body1"
                                    style={{ marginBottom: '20px' }}
                                >
                                    We understand the importance of
                                    accessibility and liquidity for our token
                                    holders. Therefore, we are actively pursuing
                                    listings on established exchanges to ensure
                                    a seamless trading experience. Stay tuned
                                    for updates on our exchange listings as we
                                    continue to expand our reach.
                                </Typography>
                                <h1 style={{ fontSize: '2.8rem' }}>01</h1>
                            </Box>
                            <Box className="solBox">
                                <Box className="solImg">
                                    <img src={Avalanche} alt="" />
                                </Box>
                                <Typography variant="h6">
                                    Fair Launch Model
                                </Typography>
                                <Typography
                                    variant="body1"
                                    style={{ marginBottom: '20px' }}
                                >
                                    At DiaperCoin, we believe in fairness and
                                    equal opportunities for all. Our token was
                                    launched through a fair and transparent
                                    distribution process. No pre-sales, no
                                    private allocations, and no unfair
                                    advantage. We prioritize putting the power
                                    back into the hands of the community.
                                </Typography>
                                <h1 style={{ fontSize: '2.8rem' }}>02</h1>
                            </Box>
                            <Box className="solBox">
                                <Box className="solImg">
                                    <img src={Avalanche} alt="" />
                                </Box>
                                <Typography variant="h6">
                                    No Taxation
                                </Typography>
                                <Typography
                                    variant="body1"
                                    style={{ marginBottom: '20px' }}
                                >
                                    We understand the frustration surrounding
                                    heavy taxation in the crypto space. To
                                    create a more appealing environment for
                                    investors and traders, DiaperCoin favors a
                                    no-taxation approach. Enjoy the benefits of
                                    your investments without the burden of
                                    excessive taxes.
                                </Typography>
                                <h1 style={{ fontSize: '2.8rem' }}>03</h1>
                            </Box>
                            <Box className="solBox">
                                <Box className="solImg">
                                    <img src={Avalanche} alt="" />
                                </Box>
                                <Typography variant="h6">
                                    Community Driven
                                </Typography>
                                <Typography
                                    variant="body1"
                                    style={{ marginBottom: '20px' }}
                                >
                                    Our community is the heartbeat of
                                    DiaperCoin. We actively encourage our
                                    community members to actively participate in
                                    shaping the future of the token. You can
                                    join our Telegram and Discord channels,
                                    where you'll find engaging discussions,
                                    contests, and opportunities to connect with
                                    like-minded diaper enthusiasts.
                                </Typography>
                                <h1 style={{ fontSize: '2.8rem' }}>04</h1>
                            </Box>
                        </Box>
                    </Box>
                </section>

                <section>
                    <Box className="tokenomic" id="chartlink" ref={chartRef}>
                        <div className="row">
                            <Typography
                                variant={isSmallScreen ? 'h4' : 'h3'}
                                style={{
                                    fontWeight: '800',
                                    fontFamily: 'Montserrat'
                                }}
                            >
                                TOKENOMIC
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontSize: isSmallScreen ? '24px' : '28px',
                                    mb: '22px',
                                    fontFamily: 'Montserrat'
                                }}
                            >
                                TOTAL SUPPLY : 110,000,000,000,000
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    border: '1.5px dotted #00afff',
                                    borderRadius: '22px',
                                    padding: '9px 15px 9px 35px',
                                    marginBottom: '50px',
                                    fontSize: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontFamily: 'Montserrat'
                                }}
                            >
                                <span
                                    style={{ cursor: 'pointer' }}
                                    onClick={handleSnowtrace}
                                >
                                    0x04d7247B43a61923D82612a184069E01f998F479
                                </span>
                                <ContentCopyIcon
                                    sx={{ marginLeft: '100px' }}
                                    onClick={() =>
                                        handleTextClick(
                                            '0x04d7247B43a61923D82612a184069E01f998F479'
                                        )
                                    }
                                    style={{
                                        cursor: 'pointer',
                                        userSelect: 'all'
                                    }}
                                />
                            </Typography>
                        </div>
                        <div className="roadImg">
                            <img src={RoadmapImage} alt="" />
                        </div>
                        <div style={{ marginTop: '70px' }}>
                            <Grid container spacing={2} className="tokpills">
                                <Grid item>
                                    <Typography
                                        variant="body1"
                                        className="pill"
                                    >
                                        <div></div> NO ALLOCATIONS
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant="body1"
                                        className="pill"
                                    >
                                        <div></div> NO PRESALE
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant="body1"
                                        className="pill"
                                    >
                                        <div></div> NO TAXES
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant="body1"
                                        className="pill"
                                    >
                                        <div></div> NO BS
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant="body1"
                                        className="pill"
                                    >
                                        <div></div> POWERED BY AVAX
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>
                    </Box>
                </section>

                <section>
                    <Box className="roadmap" id="roadmaplink" ref={roadmapRef}>
                        <div
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                textAlign: 'center'
                            }}
                        >
                            <Box>
                                <Typography
                                    variant={isSmallScreen ? 'h4' : 'h3'}
                                    sx={{
                                        marginBottom: '150px',
                                        fontWeight: '800',
                                        fontFamily: 'Montserrat'
                                    }}
                                >
                                    ROADMAP
                                    <Typography
                                        variant="body2"
                                        style={{ marginTop: '20px' }}
                                    >
                                        We have an exciting roadmap ahead, with
                                        plans to launch a range of exciting
                                        decentralized products
                                    </Typography>
                                </Typography>
                            </Box>

                            <div className="row">
                                <Box className="solBox">
                                    <div>
                                        <div className="solLine"></div>
                                        <Box className="solNum">
                                            <p>01</p>
                                        </Box>
                                        <Typography variant="h6">
                                            January 2024
                                        </Typography>
                                    </div>
                                    <Typography variant="body2">
                                        Launch of a new decentralized exchange
                                        (DEX) built on blockchain technology.
                                        The DEX aims to provide users with
                                        secure and transparent trading of
                                        various cryptocurrencies without the
                                        need for traditional intermediaries.
                                    </Typography>
                                </Box>
                                <Box className="solBox">
                                    <div>
                                        <div className="solLine"></div>
                                        <Box className="solNum">
                                            <p>02</p>
                                        </Box>
                                        <Typography variant="h6">
                                            March 2024
                                        </Typography>
                                    </div>
                                    <Typography variant="body2">
                                        Introduction of a decentralized lending
                                        platform that allows individuals to lend
                                        and borrow cryptocurrencies without
                                        going through centralized financial
                                        institutions. This platform ensures
                                        trust through the use of smart contracts
                                        and collateralized lending.
                                    </Typography>
                                </Box>
                                <Box className="solBox">
                                    <div>
                                        <div className="solLine"></div>
                                        <Box className="solNum">
                                            <p>03</p>
                                        </Box>
                                        <Typography variant="h6">
                                            June 2024
                                        </Typography>
                                    </div>
                                    <Typography variant="body2">
                                        Release of a decentralized identity
                                        verification system for crypto users.
                                        This system utilizes blockchain
                                        technology to securely verify and
                                        validate user identities, ensuring the
                                        privacy and security of individuals'
                                        personal information.
                                    </Typography>
                                </Box>
                                <Box className="solBox">
                                    <div>
                                        <div className="solLine"></div>
                                        <Box className="solNum">
                                            <p>04</p>
                                        </Box>
                                        <Typography variant="h6">
                                            September 2024
                                        </Typography>
                                    </div>
                                    <Typography variant="body2">
                                        Introduction of a decentralized
                                        prediction market platform. This
                                        platform enables users to make
                                        predictions on various events using
                                        cryptocurrencies as tokens, allowing
                                        participants to leverage their knowledge
                                        and earn rewards based on the outcome of
                                        events.
                                    </Typography>
                                </Box>
                                <Box className="solBox">
                                    <div>
                                        <div className="solLine"></div>
                                        <Box className="solNum">
                                            <p>05</p>
                                        </Box>
                                        <Typography variant="h6">
                                            December 2024
                                        </Typography>
                                    </div>
                                    <Typography variant="body2">
                                        Launch of a decentralized asset
                                        management platform. This platform
                                        enables users to manage and invest in
                                        digital assets, providing them with more
                                        control and ownership over their
                                        investments while reducing the reliance
                                        on traditional intermediaries.
                                    </Typography>
                                </Box>
                            </div>

                            <div
                                style={{
                                    border: '1px solid #9bd8f9',
                                    margin: '2rem 4rem',
                                    borderRadius: '15px',
                                    padding: '16px'
                                }}
                            >
                                <Typography variant="body2">
                                    Throughout the year, regular updates and
                                    improvements will be made to these
                                    decentralized crypto products based on user
                                    feedback and advancements in blockchain
                                    technology. These products aim to empower
                                    individuals by providing them with secure,
                                    transparent, and autonomous financial
                                    solutions.
                                </Typography>
                            </div>
                        </div>
                    </Box>
                </section>

                <section>
                    <Box
                        className="details"
                        id="detailslink"
                        sx={{
                            color: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'center'
                        }}
                        // ref={detailsRef}
                    >
                        <Typography
                            variant={isSmallScreen ? 'h4' : 'h3'}
                            sx={{
                                marginBottom: '60px',
                                fontWeight: '800',
                                fontFamily: 'Montserrat'
                            }}
                        >
                            DINU COIN DETAILS
                        </Typography>
                        <Paper className="detailsRow">
                            <Grid container>
                                <Grid
                                    item
                                    xs={6}
                                    className="detailsImage"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        img: {
                                            width: '100%'
                                        }
                                    }}
                                >
                                    <img src={DetailsImg1} alt="" />
                                </Grid>

                                <Grid
                                    item
                                    xs={6}
                                    className="detailsData"
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        color: 'white'
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        className="coinpill"
                                    >
                                        Launch Rate
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        className="coinpillvalue"
                                    >
                                        1 DINU = 112,302,200,600
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        className="coinpill"
                                    >
                                        Total Token for Available
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        className="coinpillvalue"
                                    >
                                        1 DINU = 112,302,200,600 (50%)
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        className="coinpill"
                                    >
                                        Listing Rate
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        className="coinpillvalue"
                                    >
                                        1 DINU = 50,203,200,435
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Box>
                </section>

                <Box className="footer">
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        {/* <div
                            style={{
                                width: '50px',
                                height: '50px',
                                overflow: 'hidden',
                                borderRadius: '50%',
                                border: '1px solid white',
                                marginRight: '10px'
                            }}
                        >
                            <img
                                src={AboutImage1}
                                alt="logo"
                                height={'50'}
                                style={{
                                    marginLeft: '-30%',
                                    width: '150%',
                                    height: '150%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div> */}
                        <img
                            className="logo"
                            src={NewLogo}
                            alt="logo"
                            style={{ marginRight: '10px' }}
                        />
                        <img src={Name} alt="logo" className="name" />
                    </Typography>
                    <ul className="footer-link">
                        <li>
                            <NavLink activeClassName="active" to={'/'}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="">Explore</NavLink>
                        </li>
                        <li>
                            <NavLink to="">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Collections</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Team</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Contact</NavLink>
                        </li>
                    </ul>
                    <Box
                        className="footer-img"
                        sx={{
                            'img:hover': {
                                filter: 'invert(47%) sepia(54%) saturate(445%) hue-rotate(165deg)',
                                transform: 'translateX(2px)'
                            }
                        }}
                    >
                        <img src={Discord} alt="Discord logo" />
                        <img
                            src={Twitter}
                            alt="Twitter logo"
                            onClick={handleTwitterRedirect}
                        />
                        <img
                            src={Telegram}
                            alt="Telegram logo"
                            onClick={handleTelegramRedirect}
                        />
                    </Box>
                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: '11px',
                            color: 'grey',
                            fontFamily: 'Montserrat'
                        }}
                    >
                        Copyright &copy; 2023, DINU
                    </Typography>
                </Box>
            </Box>
        </Layout>
    );
};

export default Home;
