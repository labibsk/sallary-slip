import React from 'react'
import { Card } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';

function PaymentInfo({
    monthlyBasic,
    monthlyGross,
    setMonthlyBasic,
    setMonthlyGross,
    daysMonth,
    daysPayable,
    setDaysMonth,
    setDaysPayable,
    pan,
    setPan
}) {
    return (
        <Card className="card">
            <p className="title">Payment Info</p>
            <div className="horizontal">
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="outlined-basic"
                    label="Days Month"
                    variant="outlined"
                    type="number"
                    value={daysMonth}
                    onChange={(e) => setDaysMonth(e.target.value)} />
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="outlined-basic"
                    label="Days Payable"
                    variant="outlined"
                    type="number"
                    value={daysPayable}
                    onChange={(e) => setDaysPayable(e.target.value)} />
            </div>
            <div className="horizontal">
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="outlined-basic"
                    label="Monthly Basic"
                    variant="outlined"
                    type="number"
                    value={monthlyBasic}
                    onChange={(e) => setMonthlyBasic(e.target.value)} />
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="outlined-basic"
                    label="Monthly Gross"
                    variant="outlined"
                    type="number"
                    value={monthlyGross}
                    onChange={(e) => setMonthlyGross(e.target.value)} />
            </div>

            <TextField
                id="outlined-basic"
                label="Pan"
                variant="outlined"
                value={pan}
                onChange={(e) => setPan(e.target.value)} />
        </Card>
    )
}

export default PaymentInfo
