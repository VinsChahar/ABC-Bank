import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import isEmpty from 'lodash/fp/isEmpty';
import { fetchUsers } from '../../states'
import { useStyles } from './styles';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


const Login = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const login = useSelector(response => response.login);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const getUserName = event => {
        setUserName(event.target.value);
    };

    const getPassword = event => {
        setPassword(event.target.value);
    };

    const signIn = () => {
        dispatch(fetchUsers({ userName, password }));
    };

    return (
        <div className={classes.app}>
            <header className={classes.appHeader}>
                <div className={classes.Login}>
                    {isEmpty(login.error) ? null : <div style={{ color: 'red', marginBottom: '1px' }}>{login.error}</div>}
                    <TextField
                        className={classes.textField}
                        variant="standard"
                        label="Username"
                        margin="normal"
                        required
                        autoFocus
                        onChange={getUserName}
                        value={userName}
                    />
                    <TextField
                        className={classes.textField}
                        variant="standard"
                        label="Password"
                        margin="normal"
                        required
                        type="password"
                        onChange={getPassword}
                        value={password}
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        size='large'
                        className={classes.button}
                        onClick={() => signIn()}>
                        Log In
                        </Button>
                </div>
            </header>
        </div>
    )
}

export default Login;