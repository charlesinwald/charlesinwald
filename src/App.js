import './App.css';
import React, {useRef} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button';

import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import {motion} from "framer-motion"
import SmoothScroll from "./SmoothScroll.component"
import Carousel from "react-material-ui-carousel";
import Paper from "@material-ui/core/Paper";
import TopBar from './components/TopBar';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    ProfilePic: {
        width: theme.spacing(50),
        height: theme.spacing(50),
    },
    LandingGrid: {
        margin: '3rem',
        height: theme.spacing(90),
        flexGrow: 1,
    },
    LandingText: {
        color: 'white',
        textAlign: 'center',
    },
    LandingBodyText: {
        color: 'white',
        // textSize: '3.75rem',
        maxWidth: theme.spacing(65),
        textAlign: 'center',
        margin: 'auto'
    },
    LandingBodyTextWrapper: {
        flex: 1,
    },
    MenuButton: {
        marginLeft: theme.spacing(2),
        color: 'white',
    },
    ToolBar: {
        flexGrow: 1,
    },
    PortfolioGrid: {
        // backgroundColor: 'white',
        // paddingInline: '2rem',
    },
    ContactGrid: {
        // marginTop: '4rem',
    },
    SocialButton: {
        marginInlineEnd: '3rem',
        fontSize: '3rem',
        backgroundColor: 'white'
    }
}))

const scrollToPortfolio = () => {
    // const y = portfolioRef.current.getBoundingClientRect().top + window.pageYOffset;
    const y = window.innerHeight / 2.2;
    window.scrollTo({top: y, behavior: 'smooth'});
}

function App() {
    const classes = useStyles();


    return (
        <Grid className="App">
            <TopBar/>
            <SmoothScroll>
                <Grid container spacing={3} fluid className={classes.LandingGrid}>
                    <Grid item xs={8} style={{flexGrow: 1}}>
                        <motion.h1
                            textAlign='center'
                            className={classes.LandingText} animate={{scale: 2}}>
                            Hey, I'm Charles.
                        </motion.h1>
                        <div className={classes.LandingBodyTextWrapper}>
                        <motion.h1 className={classes.LandingBodyText} animate={{scale: 1.3}}>
                            Motivated Software Developer trained in frontend and backend.</motion.h1>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <motion.div animate={{scale: 1.2}}>
                            <Avatar src='profile.jpg' className={classes.ProfilePic}/>
                        </motion.div>
                    </Grid>
                </Grid>
                <Grid container spacing={3} fluid className={classes.PortfolioGrid}>
                        <section className='portfolio-container'>
                            <motion.h1 className='heading' whileHover={{ y: -10 }}
                                whileTap={{ y: 5 }} onClick={() => {
                                scrollToPortfolio()
                            }}>Portfolio</motion.h1>

                        <Grid container fluid>
                            <div className='inner-container'>
                                <a href='https://github.com/charlesinwald/csvtordf' target="_blank"
                                   ><motion.img whileHover={{ scale: 1.1 }}
                                         whileTap={{ scale: 0.9 }} src='csv2rdf.gif'/></a>
                                {/*Todo add whitepaper button that has the paper for this project*/}
                            <a href='https://github.com/charlesinwald/AmazonFakeReviewSpotter/tree/master' target="_blank"><motion.img whileHover={{ scale: 1.1 }}
                                                                                                                       whileTap={{ scale: 0.9 }} src={'fakereviewspotter.gif'}/></a>

                            <a href='https://github.com/charlesinwald/DevWorthy' target="_blank"><motion.img whileHover={{ scale: 1.1 }}
                                                                                             whileTap={{ scale: 0.9 }} src={'devworthy.gif'}/></a>
                            </div>

                            {/*</Paper>*/}
                        </Grid>
                        {/*<Carousel navButtonsAlwaysVisible>*/}
                        {/*    {*/}
                        {/*        items.map((item, i) => <Item key={i} item={item}/>)*/}
                        {/*    }*/}
                        {/*</Carousel>*/}
                    </section>
                </Grid>
                <Grid container spacing={3} fluid className={classes.ContactGrid}>
                    <section className='contact-container'>
                        <h1 className='heading'>Contact</h1>
                        <Button elevation={24} variant='contained' className={classes.SocialButton} href='https://github.com/charlesinwald' target="_blank">Github<GitHubIcon style={{ fontSize: '10rem', padding: '1rem' }}/></Button>
                        <Button variant='contained' className={classes.SocialButton} href='https://www.linkedin.com/in/charles-inwald/' target="_blank" style={{ color: '#0072b1'}}>LinkedIn<LinkedInIcon style={{ fontSize: '10rem', padding: '1rem' }}/></Button>

                    </section>
                </Grid>
            </SmoothScroll>
        </Grid>
    );
}

export default App;
