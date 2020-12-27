import './App.css';
import React, {useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button';

import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import {motion} from "framer-motion"
import SmoothScroll from "./SmoothScroll.component"
import TopBar from './components/TopBar';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CardActionArea from '@material-ui/core/CardActionArea';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import * as PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import {SiJavascript, SiPython, SiReact} from "react-icons/si";
import {DiJava} from "react-icons/di";

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
        marginTop: theme.spacing(5),
        maxWidth: theme.spacing(65),
        textAlign: 'center',
        margin: 'auto',
        fontSize: "x-large",
        fontFamily: [
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'],
        fontWeight: 50
    },
    LandingBodyTextWrapper: {
        flex: 1,
    },
    MenuButton: {
        marginLeft: theme.spacing(2),
        color: 'white',
        fontSize: "xx-large"
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
    ResumeGrid: {

    },
    SocialButton: {
        marginInlineEnd: '3rem',
        fontSize: '3rem',
        backgroundColor: 'white'
    },
    EmailButton: {
        fontSize: '2rem',
        backgroundColor: 'white',
        textTransform: "lowercase"
},
    languageLogos: {
        color: 'white',
        marginTop: theme.spacing(5)
    },
    languageLogo: {
        color: 'white',
        margin: theme.spacing(2)
    },
    resumeActivityRoot: {
        backgroundSize: 'contain',
        minWidth: theme.spacing(10),
        minHeight: theme.spacing(10)
    },
}))

const scrollToPortfolio = () => {
    // const y = portfolioRef.current.getBoundingClientRect().top + window.pageYOffset;
    const y = window.innerHeight / 2.2;
    window.scrollTo({top: y, behavior: 'smooth'});
}
const scrollToContact = () => {
    // const y = portfolioRef.current.getBoundingClientRect().top + window.pageYOffset;
    const y = window.innerHeight / 1.75;
    window.scrollTo({top: y, behavior: 'smooth'});
}

function EmailButton(props) {
    const [copied, setCopied] = useState(false);

    return <Button className={props.classes.EmailButton}
                   onClick={async () => {
                       navigator.clipboard.writeText('charlesinwald@gmail.com');
                       setCopied(true);
                       await new Promise(r => setTimeout(r, 2000));
                       setCopied(false);
                   }}>{copied ? '  copied to clipboard  ' : 'charlesinwald@gmail.com'} <MailOutlineIcon style={{fontSize: "10rem", padding: "1rem"}}/></Button>;
}

EmailButton.propTypes = {
    classes: PropTypes.any,
};

function WorkExperienceCard(props) {
    return <Card className='resume-activity'>
        <CardActionArea>
            <CardMedia
                image="svadhi.png"
                className={props.classes.resumeActivityRoot}
            />
            <CardContent>
                Svadhi
            </CardContent>
        </CardActionArea>
    </Card>;
}

WorkExperienceCard.propTypes = {classes: PropTypes.any};

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
                                A full stack software developer with demonstrated expertise in front end and back end development.
                            </motion.h1>
                        </div>
                        <Grid container fluid justify='center'>

                        <motion.div className={classes.languageLogo} animate={{scale: 1.3}}>
                            <SiJavascript className={classes.languageLogo} size='2rem'/>
                            <SiReact className={classes.languageLogo} size='2rem'/>
                            <DiJava className={classes.languageLogo} size='2rem'/>
                            <SiPython className={classes.languageLogo} size='2rem'/>
                        </motion.div>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <motion.div animate={{scale: 1.2}}>
                            <Avatar src='profile.jpg' className={classes.ProfilePic}/>

                        </motion.div>
                    </Grid>
                </Grid>
                <Grid container spacing={3} fluid className={classes.PortfolioGrid}>
                    <section className='portfolio-container'>
                        <motion.h1 className='heading' whileHover={{y: -10}}
                                   whileTap={{y: 5}} onClick={() => {
                            scrollToPortfolio()
                        }}>Portfolio
                        </motion.h1>

                        <Grid container fluid>
                            <div className='inner-container'>
                                <a href='https://github.com/charlesinwald/csvtordf' target="_blank"
                                >
                                    <motion.img whileHover={{scale: 1.1}}
                                                whileTap={{scale: 0.9}} src='csv2rdf.gif'/>
                                </a>
                                {/*Todo add whitepaper button that has the paper for this project*/}
                                <a href='https://github.com/charlesinwald/AmazonFakeReviewSpotter/tree/master'
                                   target="_blank">
                                    <motion.img whileHover={{scale: 1.1}}
                                                whileTap={{scale: 0.9}} src={'fakereviewspotter.gif'}/>
                                </a>

                                <a href='https://github.com/charlesinwald/DevWorthy' target="_blank"
                                   className='portfolio-project'>
                                    <motion.img whileHover={{scale: 1.1}}
                                                whileTap={{scale: 0.9}} src={'devworthy.gif'}/>
                                </a>
                                <a href='https://github.com/charlesinwald/SegAN' target="_blank"
                                   className='portfolio-project'>
                                    <motion.img whileHover={{scale: 1.1}}
                                                whileTap={{scale: 0.9}} src={'covid.png'}/>
                                </a>
                            </div>
                        </Grid>
                    </section>
                </Grid>
                <Grid container spacing={3} fluid className={classes.ResumeGrid}>
                    <section className='resume-container'>
                        <motion.h1 className='heading' whileHover={{y: -10}}
                                   whileTap={{y: 5}} onClick={() => {
                            scrollToContact()
                        }}>Resume
                        </motion.h1>
                        <Grid container fluid className='resume-inner-container'>
                            <WorkExperienceCard classes={classes}/>
                            <WorkExperienceCard classes={classes}/>
                            <WorkExperienceCard classes={classes}/>
                        </Grid>
                    </section>
                </Grid>
                <Grid container spacing={3} fluid className={classes.ContactGrid}>
                    <section className='contact-container'>
                        <motion.h1 className='heading' whileHover={{y: -10}}
                                   whileTap={{y: 5}} onClick={() => {
                            scrollToContact()
                        }}>Contact
                        </motion.h1>
                        <Button elevation={24} variant='contained' className={classes.SocialButton}
                                href='https://github.com/charlesinwald' target="_blank">Github<GitHubIcon
                            style={{fontSize: '10rem', padding: '1rem'}}/></Button>
                        <Button variant='contained' className={classes.SocialButton}
                                href='https://www.linkedin.com/in/charles-inwald/' target="_blank"
                                style={{color: '#0072b1'}}>LinkedIn<LinkedInIcon
                            style={{fontSize: '10rem', padding: '1rem'}}/></Button>
                        <EmailButton classes={classes}/>
                    </section>
                </Grid>
            </SmoothScroll>
        </Grid>
    );
}

export default App;
