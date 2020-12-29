import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    Name: {
        flexGrow: 1,
        margin: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            margin: 'auto'
        },
    },
    MenuButton: {
        marginLeft: theme.spacing(2),
        color: 'white',
        fontSize: "x-large",
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        },
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



export default function TopBar(props) {
    const classes = useStyles();
    const contactRef = props.contactRef;
    const portfolioRef = props.portfolioRef;
    const scrollToRef = ref => {
        ref.current.scrollIntoView({ block: "center", behavior: "smooth" });
    }
    return <AppBar position="static" style={{background: "transparent", boxShadow: "none", flexGrow: 1}}>
        <Toolbar className={classes.ToolBar}>
            <h1 className={classes.Name}>Charles Inwald</h1>
            <Button className={classes.MenuButton} onClick={() => scrollToRef(portfolioRef)}>Portfolio</Button>
            <Button className={classes.MenuButton} onClick={() => scrollToRef(contactRef)}>Contact</Button>
        </Toolbar>
    </AppBar>;
}
