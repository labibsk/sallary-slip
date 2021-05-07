import React from 'react'
import { Card } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Dates from './Dates';

function EmployeeInfo({
    dateOfJoining,
    dateOfSeperation,
    hasSeperated,
    bankName,
    bankAccountNo,
    setDateOfJoining,
    setDateOfSeperation,
    setHasSeperated,
    setBankName,
    setBankAccountNo
}) {
    return (
        <Card className="card">
            <p className="title">Employee Info</p>
            <Dates
                dateOfJoining={dateOfJoining}
                dateOfSeperation={dateOfSeperation}
                setDateOfJoining={setDateOfJoining}
                setDateOfSeperation={setDateOfSeperation}
                hasSeperated={hasSeperated}
                setHasSeperated={setHasSeperated}
            />
            <div className="horizontal">
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="outlined-basic"
                    label="Bank name"
                    variant="outlined"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)} />
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="outlined-basic"
                    label="Bank A/c No"
                    variant="outlined"
                    value={bankAccountNo}
                    onChange={(e) => setBankAccountNo(e.target.value)} />
            </div>
        </Card>
    )
}

export default EmployeeInfo
