import React from "react";
import Navigation from '../Navigation';
import AccountSummary from '../AccountSummary';
import FundTransfer from '../FundTransfer';
import Beneficiary from "../Beneficiary";
import { useStyles } from './styles';

import { useSelector } from 'react-redux';


const Dashboard = () => {
    const classes = useStyles();
    const { dashboard } = useSelector(res => res);
    const { selectedIndex } = dashboard;

    const renderSwitch = (index) => {
        switch (index) {
            case 0:
                return <AccountSummary />;
            case 1:
                return <Beneficiary />;
            case 2:
                return <FundTransfer />
            default:
                return <AccountSummary />;
        }
    }


    return (
        <div className={classes.root}>
            <Navigation />
            {renderSwitch(selectedIndex)}
        </div >
    )
}

export default Dashboard;