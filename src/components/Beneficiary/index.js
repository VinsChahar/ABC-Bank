import React, { useState } from "react";
import MaterialTable from 'material-table';

import { useStyles } from './styles';


const Beneficiary = () => {
    const classes = useStyles();

    const [state, setState] = useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Account Number', field: 'accountNumber', type: 'numeric' },
            { title: 'Account Type', field: 'accountType' },
        ],
        data: [
            { name: 'Vishnu Kumar', accountNumber: 3403040030440, accountType: 'Savings' },
            { name: 'Dinesh Kumar', accountNumber: 3232173746453, accountType: 'Current' },
            { name: 'Mahesh Kumar', accountNumber: 1392922635352, accountType: 'Savings' },
            { name: 'Suresh Kumar', accountNumber: 1237377377377, accountType: 'Savings' },
            { name: 'Vishnu Kumar', accountNumber: 3403040030440, accountType: 'Savings' },
            { name: 'Dinesh Kumar', accountNumber: 3232173746453, accountType: 'Current' },
            { name: 'Mahesh Kumar', accountNumber: 1392922635352, accountType: 'Savings' },
            { name: 'Suresh Kumar', accountNumber: 1237377377377, accountType: 'Savings' },
        ],
    });

    return (
        <div className={classes.root}>
            <MaterialTable className={classes.table}
                title="Beneficiary Details"
                columns={state.columns}
                data={state.data}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.push(newData);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    setState((prevState) => {
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        return { ...prevState, data };
                                    });
                                }
                            }, 600);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                }}
            />
        </div>
    )
}

export default Beneficiary;