import React from "react";
import { useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import toUpper from 'lodash/fp/toUpper';
import { useStyles } from './styles';


const Dashboard = () => {
    const classes = useStyles();
    const { login } = useSelector(response => response);
    const user = login.users[0];

    return (
        <div className={classes.root}>
            <div className={classes.cards}>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContant}>
                        <Avatar alt="Vishnu Kumar" src="avatar.png" className={classes.large} />
                        <Typography variant="heading" component="h3" className={classes.typography}>
                            Hello, {toUpper(user.userName) || 'user name'}
                        </Typography>
                        <Typography variant="body" component="h6" className={classes.typography}>
                            {'Last login at 10:20AM'}
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContant}>
                        <AccountBalanceWalletOutlinedIcon className={classes.large} color="secondary" />
                        <Typography variant="heading" component="h1">
                            $ {user.accountBalance || '10000.00'}
                        </Typography>
                        <Typography variant="body" component="h6">
                            Available Balance
                    </Typography>
                        <hr />
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="secondary">Withdraw</Button>
                        <Button size="small" color="secondary">Diposit</Button>
                    </CardActions>
                </Card>
            </div>
            <div className={classes.boxes}>
                <Card className={classes.box}>
                    <CardContent className={classes.boxContant}>
                        <div className={classes.edit}>
                            <Typography gutterBottom variant="heading" component="h2">Personal Details</Typography>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div className={classes.details}>
                                <Typography className={classes.detailsHeader} gutterBottom variant="heading" component="h4">Name: </Typography>
                                <Typography className={classes.detailsHeader} gutterBottom variant="heading" component="h4">Account Number: </Typography>
                                <Typography className={classes.detailsHeader} gutterBottom variant="heading" component="h4">Account Type: </Typography>
                                <Typography className={classes.detailsHeader} gutterBottom variant="heading" component="h4">Address: </Typography>

                            </div>
                            <div className={classes.details}>
                                <Typography className={classes.detailsHeader} gutterBottom variant="heading" component="h4">{user.personalDetails.name}</Typography>
                                <Typography className={classes.detailsHeader} gutterBottom variant="heading" component="h4">{user.personalDetails.accountNumber} </Typography>
                                <Typography className={classes.detailsHeader} gutterBottom variant="heading" component="h4">{user.personalDetails.accountType} </Typography>
                                <Typography className={classes.detailsHeader} gutterBottom variant="heading" component="h4"> {user.personalDetails.address}</Typography>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div >
    )
}

export default Dashboard;