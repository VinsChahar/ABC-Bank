import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './styles';
import { logout } from '../../states'
import Button from "@material-ui/core/Button";


const Header = () => {
    const classes = useStyles();
    const user = useSelector(response => response.login);
    const dispatch = useDispatch();

    const logoutUser = () => {
        dispatch(logout());
    }

    return (
        <div className={classes.root}>
            <img src="logo.png" alt="logo" className={classes.logo} />
            <div className={classes.lists}>
                <Button href="#text-buttons" className={classes.href}>
                    Contact Us
            </Button>
                <Button href="#text-buttons" className={classes.href}>
                    Help
            </Button>
                {user.isLoggedin && <Button
                    variant="contained"
                    color="secondary"
                    onClick={logoutUser}
                    className={classes.button}
                >
                    Sign Off
            </Button>}
            </div>
        </div>
    )
}

export default Header;