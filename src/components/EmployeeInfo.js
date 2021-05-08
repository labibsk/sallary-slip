import React from 'react'
import { Card } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Dates from './Dates';
import { useDispatch, useSelector } from 'react-redux';
import { updateBankAccountNo, updateBankName } from '../actions';

function EmployeeInfo() {

    const bankName = useSelector(state => state.bankName);
    const bankAccountNo = useSelector(state => state.bankAccountNo);

    const bankNameError = useSelector(state => state.bankNameError);
    const bankAccountNoError = useSelector(state => state.bankAccountNoError);

    const dispatch = useDispatch();

    return (
        <Card className="card">
            <p className="title">Employee Info</p>
            <Dates />
            <div className="horizontal">
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="outlined-basic"
                    label="Bank name"
                    variant="outlined"
                    value={bankName}
                    error={bankNameError}
                    helperText={bankNameError ? "Please Enter Bank Name" : ""}
                    onChange={(e) => dispatch(updateBankName(e.target.value))} />
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="outlined-basic"
                    label="Bank A/c No"
                    variant="outlined"
                    value={bankAccountNo}
                    error={bankAccountNoError}
                    helperText={bankAccountNoError ? "Please Enter Bank A/c No" : ""}
                    onChange={(e) => dispatch(updateBankAccountNo(e.target.value))} />
            </div>
        </Card>
    )
}

export default EmployeeInfo
