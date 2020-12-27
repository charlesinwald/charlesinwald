import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    MenuButton: {
        marginLeft: theme.spacing(2),
        color: 'white',
        fontSize: "x-large",
        fontFamily: [
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),

},
    ToolBar: {
        flexGrow: 1,
        // position: "fixed"
    },
}));


const scrollToContact = () => {
    // const y = portfolioRef.current.getBoundingClientRect().top + window.pageYOffset;
    const y = window.innerHeight / 1.2;
    window.scrollTo({top: y, behavior: 'smooth'});
}

const scrollToPortfolio = () => {
    // const y = portfolioRef.current.getBoundingClientRect().top + window.pageYOffset;
    const y = window.innerHeight / 2.2;
    window.scrollTo({top: y, behavior: 'smooth'});
}

export default function TopBar(props) {
    const classes = useStyles();

    return <AppBar position="static" style={{background: "transparent", boxShadow: "none", flexGrow: 1}}>
        <Toolbar className={classes.ToolBar}>
            <h1 style={{margin: "1rem", flexGrow: 1, fontSize: 'xxx-large'}}>Charles Inwald</h1>
            <Button className={classes.MenuButton} onClick={() => scrollToPortfolio()}>Portfolio</Button>
            <Button className={classes.MenuButton} onClick={() => scrollToContact()}>Contact</Button>
        </Toolbar>
    </AppBar>;
}
