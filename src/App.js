import './App.css';
import React, {useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import {motion} from "framer-motion"
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
import Typography from "@material-ui/core/Typography";
import {responsiveFontSizes} from "@material-ui/core";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const useStyles = makeStyles((theme) => ({
    ProfilePic: {
        width: theme.spacing(40),
        height: theme.spacing(40),
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        },
    },
    LandingGrid: {
        // margin: '3rem',
        margin: theme.spacing(3),

        // height: theme.spacing(90),
        flexGrow: 1,
    },
    LandingText: {
        color: 'white',
        textAlign: 'center',
        maxWidth: theme.spacing(40),
        margin: 'auto',
        [theme.breakpoints.down("sm")]: {
            marginLeft: '1rem',
            fontSize: '1.2rem',
            textAlign: 'center',
            width: '100%',
            padding: '0 calc(50% - 160px)'
        },
    },
    LandingBodyText: {
        color: 'white',
        marginTop: theme.spacing(5),
        maxWidth: theme.spacing(55),
        textAlign: 'center',
        margin: 'auto',
        [theme.breakpoints.down("sm")]: {
            fontSize: '1rem',
            marginLeft: '1rem',
            textAlign: 'center',
            width: '100%',
            padding: '0 calc(50% - 160px)'
        },
        // fontSize: "x-large",
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
        // fontSize: "xx-large"
    },
    ToolBar: {
        flexGrow: 1,
    },
    PortfolioGrid: {
        zIndex: 99,
        // backgroundColor: 'white',
        // paddingInline: '2rem',
    },
    PortfolioActivity: {
        [theme.breakpoints.down("sm")]: {
            margin: 'auto',
            width: '100%',
            padding: '0 calc(50% - 160px)'
}
    },
    PortfolioImage: {
        [theme.breakpoints.down("sm")]: {
            maxWidth: theme.spacing(40),
            margin: 'auto',
        }
    },
    ContactGrid: {
        // marginTop: '4rem',
    },
    ResumeGrid: {

    },
    SocialButton: {
        marginInlineEnd: '3rem',
        fontSize: '3rem',
        backgroundColor: 'white',
        [theme.breakpoints.down("sm")]: {
            marginLeft: '1rem',
            fontSize: '1.2rem',
        },
    },
    SocialButtonIcon: {
        fontSize: '10rem',
        [theme.breakpoints.down("sm")]: {
            fontSize: '3rem',
            padding: '.5rem'
        },
    },
    EmailButton: {
        fontSize: '2rem',
        backgroundColor: 'white',
        textTransform: "lowercase",
        [theme.breakpoints.down("sm")]: {
            fontSize: '1rem',
            padding: '.5rem'
        },
},
    languageLogos: {
        color: 'white',
        marginTop: theme.spacing(5)
    },
    languageLogo: {
        color: 'white',
        margin: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
           visibility: 'hidden'
        },
    },
    resumeActivityRoot: {
        backgroundSize: 'contain',
        // minWidth: theme.spacing(10),
        minHeight: theme.spacing(20)
    },
    resumeActivityCard: {
        maxWidth: theme.spacing(50),
    },
    resumeActivity: {
        minWidth: '15rem',
        maxWidth: theme.spacing(50),
        margin: theme.spacing(3),
        // padding: theme.spacing(10),
        [theme.breakpoints.down("sm")]: {
            minWidth: '5rem',
            maxWidth: '90%',
            // margin: '2rem',
        },
        resumeActivityContent: {
            maxWidth: theme.spacing(1),
            padding: theme.spacing(2)
        }
}
}))



function EmailButton(props) {
    const [copied, setCopied] = useState(false);

    return <Button className={props.classes.EmailButton}
                   onClick={async () => {
                       navigator.clipboard.writeText('charlesinwald@gmail.com');
                       setCopied(true);
                       await new Promise(r => setTimeout(r, 2000));
                       setCopied(false);
                   }}>{copied ? '  copied to clipboard  ' : 'charlesinwald@gmail.com'} <MailOutlineIcon className={props.classes.SocialButtonIcon}/></Button>;
}

EmailButton.propTypes = {
    classes: PropTypes.any,
};

function WorkExperienceCard(props) {
    const descriptionList = props.description.map((item) => <Typography style={{marginTop: '.5rem'}}>{item}</Typography>)
    return <Card className={props.classes.resumeActivity}>
        <CardActionArea>
            <CardMedia
                image={props.image}
                className={props.classes.resumeActivityRoot}
            />
            <CardContent className={props.classes.resumeActivityContent}>
                <Typography variant="h6">{props.title}</Typography>
                <Typography variant="h5">{props.position}</Typography>

                <Typography>{descriptionList}</Typography>

            </CardContent>
        </CardActionArea>
    </Card>;
}

WorkExperienceCard.propTypes = {classes: PropTypes.any};

function App() {
    const classes = useStyles();
    const contactRef = React.useRef(null);
    const portfolioRef = React.useRef(null);
    const scrollToRef = ref => {
        ref.current.scrollIntoView({ block: "end", behavior: "smooth" });
    }

    let SvadhiDescription = ['Engineered data visualization dashboard for college admissions profiling using Express, React and D3.', 'Worked collaboratively, leading front-end team.'];
    let CiamtisDescription = ['Developed crowdsensing mobile app for pavement monitoring using mobile\n' +
    'camera and accelerometer in Java', 'Prototyped Python cryptocurrency for distributed computer vision\n' +
    'processing and crowdsensing incentive mechanism'];
    let TaDescription = ['Mentored over 80 students on app development projects\n' +
    'written in Java, JavaScript, and SQL', 'Redesigned course curriculum to integrate software design patterns;\n' +
    'recorded instructional videos', 'Held office hours to assist students in solving technical and conceptual\n' +
    'issues'];
    let EyDescription = ['Wrote Linux shell scripts for security analysis of mobile apps','Designed guides and testing environments for iOS and Android','Developed Python framework for generating security reports for iOS apps']
    let OlympusDescription = ['Built custom software for image and voice recognition on augmented reality\n' +
    'glasses for medical use','Full-stack application built with Node.js and Google Cloud Platform backend,\n' +
    'and Android/Java frontend']
    let CSBDescription = ['3.29 GPA, Deans List']
    // 'Director of Alumni Relations Computer Science and Business Association','Cryptocurrency Club',
    // 'Programming Club']
    let MastersDescription = ['3.81 GPA, Elizabeth Major Nevius Award']
    return (
        <Grid >
            <TopBar contactRef={contactRef} portfolioRef={portfolioRef}/>
            {/*<SmoothScroll>*/}
                <Grid container spacing={3} fluid className={classes.LandingGrid}>
                    <Grid item xs={8} style={{flexGrow: 1}}>
                        <motion.h1
                            textAlign='center'
                            className={classes.LandingText} animate={{scale: 2}}>
                            Hey, I'm Charles
                        </motion.h1>
                        <div className={classes.LandingBodyTextWrapper}>
                            <motion.h1 className={classes.LandingBodyText} animate={{scale: 1.3}}>
                                A full stack software developer with demonstrated expertise in front end and back end development
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
                        <motion.h1 className='heading' whileHover={{y: -10}} ref={portfolioRef}
                                   whileTap={{y: 5}} onClick={() => {
                            scrollToRef(portfolioRef)
                        }}>Portfolio
                        </motion.h1>

                        <Grid container fluid>
                            <div className='inner-container'>
                                <a href='https://github.com/charlesinwald/csvtordf' target="_blank"
                                   className={classes.PortfolioActivity}
                                >
                                    <motion.img className={classes.PortfolioImage} whileHover={{scale: 1.1}}
                                                whileTap={{scale: 0.9}} src='csv2rdf.gif'/>
                                </a>
                                {/*Todo add whitepaper button that has the paper for this project*/}
                                <a href='https://github.com/charlesinwald/AmazonFakeReviewSpotter/tree/master'
                                   target="_blank"
                                   className={classes.PortfolioActivity}>
                                    <motion.img className={classes.PortfolioImage} whileHover={{scale: 1.1}}
                                                whileTap={{scale: 0.9}} src={'fakereviewspotter.gif'}/>
                                </a>

                                <a href='https://github.com/charlesinwald/DevWorthy' target="_blank"
                                   className={classes.PortfolioActivity}>
                                    <motion.img className={classes.PortfolioImage} whileHover={{scale: 1.1}}
                                                whileTap={{scale: 0.9}} src={'devworthy.gif'}/>
                                </a>
                                <a href='https://github.com/charlesinwald/SegAN' target="_blank"
                                   className={classes.PortfolioActivity}>
                                    <motion.img className={classes.PortfolioImage} whileHover={{scale: 1.1}}
                                                whileTap={{scale: 0.9}} src={'covid.png'}/>
                                </a>
                                <a href='https://github.com/charlesinwald/clockchain' target="_blank"
                                   className={classes.PortfolioActivity}>
                                    <motion.img className={classes.PortfolioImage} whileHover={{scale: 1.1}}
                                                whileTap={{scale: 0.9}} src={'ClockChain2.png'}/>
                                </a>
                                <a href='https://github.com/charlesinwald/leanhash' target="_blank"
                                   className={classes.PortfolioActivity}>
                                    <motion.img className={classes.PortfolioImage} whileHover={{scale: 1.1}}
                                                whileTap={{scale: 0.9}} src={'leanhash.png'}/>
                                </a>
                                <a href='https://github.com/charlesinwald/DOT-Application' target="_blank"
                                   className={classes.PortfolioActivity}>
                                    <motion.img className={classes.PortfolioImage} whileHover={{scale: 1.1}}
                                                whileTap={{scale: 0.9}} src={'crowdsensing.png'}/>
                                </a>
                            </div>
                        </Grid>
                    </section>
                </Grid>
                <Grid container spacing={3} fluid className={classes.ResumeGrid}>
                    <section className='resume-container'>
                        <motion.h1 className='heading'
                                   style={{marginTop: '4rem',     transform: 'skewY(-5deg)'}}
                                   whileHover={{y: -10}}
                                   whileTap={{y: 5}} onClick={() => {
                        }}>Resume
                        </motion.h1>
                        <Grid container fluid className='resume-inner-container'>
                            <WorkExperienceCard classes={classes} title='Svadhi'
                                                position='Full-Stack Development Intern'
                                                description={SvadhiDescription}
                                                image="svadhi.png"/>
                           <WorkExperienceCard classes={classes} title='Pennsylvania Department of Transportation' position='Research Fellowship' description={CiamtisDescription} image="ciamtis.png"/>
                            <WorkExperienceCard classes={classes} title='Lehigh University' position='Software Engineering Teaching Assistant' image="lehigh.png" description={TaDescription}/>
                            <WorkExperienceCard classes={classes} title='EY, Prague, Czech Republic' position='Cybersecurity Intern' image="ey.png" description={EyDescription}/>
                            <WorkExperienceCard classes={classes} title='Olympus Corporation' position='Capstone Project' image="olympus.png" description={OlympusDescription}/>
                        </Grid>
                        <motion.h1 className='heading'
                                   style={{transform: 'skewY(-5deg)'}}
                                   whileHover={{y: -10}}
                                   whileTap={{y: 5}} onClick={() => {
                        }}>Education
                        </motion.h1>
                        <Grid container fluid className='education-inner-container' justify="center">
                            <WorkExperienceCard classes={classes} title='Lehigh University' position='M.S Computer Science' image="lehigh.png" description={MastersDescription}/>
                            <WorkExperienceCard classes={classes} title='Lehigh University' position='B.S Computer Science and Business' image="lehigh.png" description={CSBDescription}/>
                        </Grid>
                    </section>
                    <Grid container spacing={3} fluid className={classes.ContactGrid}>
                        <section className='contact-container'>
                            <motion.h1 className='heading' whileHover={{y: -10}}
                                       whileTap={{y: 5}} ref={contactRef} onClick={() => {
                                scrollToRef(contactRef)
                            }}>Contact
                            </motion.h1>
                            <Button elevation={24} variant='contained' className={classes.SocialButton}
                                    href='https://github.com/charlesinwald' target="_blank">Github<GitHubIcon
                                className={classes.SocialButtonIcon}/></Button>
                            <Button variant='contained' className={classes.SocialButton}
                                    href='https://www.linkedin.com/in/charles-inwald/' target="_blank"
                                    style={{color: '#0072b1'}}>LinkedIn<LinkedInIcon
                                className={classes.SocialButtonIcon}/></Button>
                            <EmailButton classes={classes}/>
                        </section>
                    </Grid>

                </Grid>
            {/*</SmoothScroll>*/}
        </Grid>
    );
}

export default App;
