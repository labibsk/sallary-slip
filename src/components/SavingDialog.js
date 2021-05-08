import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import './SavingDialog.css';

function SavingDialog() {
    const message = useSelector(state => state.savingMessage);

    return (
        <div className="SavingDialog">
            <CircularProgress />
            <p className="message">{message}</p>
        </div>
    )
}

export default SavingDialog
