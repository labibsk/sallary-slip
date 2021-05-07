import React from 'react'
import { Card } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';

function SalaryStructureInfo({
    basic,
    conveyanceAllowance,
    incentive,
    incomeTax,
    arrears,
    setBasic,
    setConveyanceAllowance,
    setIncentive,
    setIncomeTax,
    setArrears,
}) {
    return (
        <Card className="card">
            <p className="title">Salary Breakdown</p>
            <div className="horizontal">
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="outlined-basic"
                    label="Basic"
                    variant="outlined"
                    type="number"
                    value={basic}
                    onChange={(e) => setBasic(e.target.value)} />
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="outlined-basic"
                    label="Conveyance Allowance"
                    variant="outlined"
                    type="number"
                    value={conveyanceAllowance}
                    onChange={(e) => setConveyanceAllowance(e.target.value)} />
            </div>

            <TextField
                id="outlined-basic"
                label="Incentive"
                variant="outlined"
                type="number"
                value={incentive}
                onChange={(e) => setIncentive(e.target.value)} />

            <div className="horizontal">
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="outlined-basic"
                    label="Income Tax (TDS)"
                    variant="outlined"
                    type="number"
                    value={incomeTax}
                    onChange={(e) => setIncomeTax(e.target.value)} />
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="outlined-basic"
                    label="Arrears"
                    variant="outlined"
                    type="number"
                    value={arrears}
                    onChange={(e) => setArrears(e.target.value)} />
            </div>
        </Card>
    )
}

export default SalaryStructureInfo
