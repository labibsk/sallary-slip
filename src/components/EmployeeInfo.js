import React from 'react'
import { Card } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Dates from './Dates';
import { useDispatch, useSelector } from 'react-redux';
import { updateBankAccountNo, updateBankName, updateEmployeeName } from '../actions';

function EmployeeInfo() {

    const bankName = useSelector(state => state.bankName);
    const bankAccountNo = useSelector(state => state.bankAccountNo);

    const employeeName = useSelector(state => state.employeeName);
    const employeeNameError = useSelector(state => state.employeeNameError);

    const bankNameError = useSelector(state => state.bankNameError);
    const bankAccountNoError = useSelector(state => state.bankAccountNoError);

    const dispatch = useDispatch();

    return (
        <Card className="card">
            <p className="title">Employee Info</p>
            <TextField
                fullWidth={false}
                id="employeeName"
                label="Employee name"
                variant="outlined"
                value={employeeName}
                error={employeeNameError}
                helperText={employeeNameError ? "Please Enter Employee name" : ""}
                onChange={(e) => dispatch(updateEmployeeName(e.target.value))} />
            <Dates />
            <div className="horizontal">
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="bankName"
                    label="Bank name"
                    variant="outlined"
                    value={bankName}
                    error={bankNameError}
                    helperText={bankNameError ? "Please Enter Bank Name" : ""}
                    onChange={(e) => dispatch(updateBankName(e.target.value))} />
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="bankAccountNo"
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
