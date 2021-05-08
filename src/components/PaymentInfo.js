import React from 'react'
import { Card } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { updateDaysMonth, updateDaysPayable, updateMonthlyBasic, updateMonthlyGross, updatePan } from '../actions';

function PaymentInfo() {
    const daysMonth = useSelector(state => state.daysMonth);
    const daysPayable = useSelector(state => state.daysPayable);
    const monthlyBasic = useSelector(state => state.monthlyBasic);
    const monthlyGross = useSelector(state => state.monthlyGross);
    const pan = useSelector(state => state.pan);

    const daysMonthError = useSelector(state => state.daysMonthError);
    const daysPayableError = useSelector(state => state.daysPayableError);
    const monthlyBasicError = useSelector(state => state.monthlyBasicError);
    const monthlyGrossError = useSelector(state => state.monthlyGrossError);
    const panError = useSelector(state => state.panError);

    const dispatch = useDispatch();

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
                    error={daysMonthError}
                    helperText={daysMonthError ? "Please Enter Days Month" : ""}
                    onChange={(e) => dispatch(updateDaysMonth(e.target.value))} />
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="outlined-basic"
                    label="Days Payable"
                    variant="outlined"
                    type="number"
                    value={daysPayable}
                    error={daysPayableError}
                    helperText={daysPayableError ? "Please Enter Days Payable" : ""}
                    onChange={(e) => dispatch(updateDaysPayable(e.target.value))} />
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
                    error={monthlyBasicError}
                    helperText={monthlyBasicError ? "Please Enter Monthly Basic" : ""}
                    onChange={(e) => dispatch(updateMonthlyBasic(e.target.value))} />
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="outlined-basic"
                    label="Monthly Gross"
                    variant="outlined"
                    type="number"
                    value={monthlyGross}
                    error={monthlyGrossError}
                    helperText={monthlyGrossError ? "Please Enter Monthly Gross" : ""}
                    onChange={(e) => dispatch(updateMonthlyGross(e.target.value))} />
            </div>

            <TextField
                id="outlined-basic"
                label="PAN"
                variant="outlined"
                value={pan}
                error={panError}
                helperText={panError ? "Please Enter PAN" : ""}
                onChange={(e) => dispatch(updatePan(e.target.value))} />
        </Card>
    )
}

export default PaymentInfo
