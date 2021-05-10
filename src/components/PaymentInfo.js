import React from 'react'
import { Card } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { updateDaysMonth, updateDaysPayable, updateMonthlyBasic, updateMonthlyGross, updatePan, updateAadhar } from '../actions';

function PaymentInfo() {
    const daysMonth = useSelector(state => state.daysMonth);
    const daysPayable = useSelector(state => state.daysPayable);
    const monthlyBasic = useSelector(state => state.monthlyBasic);
    const monthlyGross = useSelector(state => state.monthlyGross);
    const pan = useSelector(state => state.pan);
    const aadhar = useSelector(state => state.aadhar);

    const daysMonthError = useSelector(state => state.daysMonthError);
    const daysPayableError = useSelector(state => state.daysPayableError);
    const monthlyBasicError = useSelector(state => state.monthlyBasicError);
    const monthlyGrossError = useSelector(state => state.monthlyGrossError);
    const panError = useSelector(state => state.panError);
    const aadharError = useSelector(state => state.aadharError);

    const dispatch = useDispatch();

    return (
        <Card className="card">
            <p className="title">Payment Info</p>
            <div className="horizontal">
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="daysMonth"
                    label="Days Month"
                    variant="outlined"
                    type="number"
                    autoComplete="off"
                    value={daysMonth}
                    error={daysMonthError}
                    helperText={daysMonthError ? "Please Enter Days Month" : ""}
                    onChange={(e) => dispatch(updateDaysMonth(e.target.value))} />
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="daysPayable"
                    label="Days Payable"
                    variant="outlined"
                    type="number"
                    autoComplete="off"
                    value={daysPayable}
                    error={daysPayableError}
                    helperText={daysPayableError ? "Please Enter Days Payable" : ""}
                    onChange={(e) => dispatch(updateDaysPayable(e.target.value))} />
            </div>
            <div className="horizontal">
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="monthlyBasic"
                    label="Monthly Basic"
                    variant="outlined"
                    type="number"
                    autoComplete="off"
                    value={monthlyBasic}
                    error={monthlyBasicError}
                    helperText={monthlyBasicError ? "Please Enter Monthly Basic" : ""}
                    onChange={(e) => dispatch(updateMonthlyBasic(e.target.value))} />
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="monthlyGross"
                    label="Monthly Gross"
                    variant="outlined"
                    type="number"
                    autoComplete="off"
                    value={monthlyGross}
                    error={monthlyGrossError}
                    helperText={monthlyGrossError ? "Please Enter Monthly Gross" : ""}
                    onChange={(e) => dispatch(updateMonthlyGross(e.target.value))} />
            </div>

            <div className="horizontal">

                <TextField
                    className="horizontalItem"
                    id="pan"
                    label="PAN"
                    variant="outlined"
                    fullWidth={false}
                    value={pan}
                    error={panError}
                    autoComplete="off"
                    helperText={panError ? "Please Enter PAN" : ""}
                    onChange={(e) => dispatch(updatePan(e.target.value))} />
                <TextField
                    className="horizontalItem"
                    id="aadhar"
                    label="Aadhar"
                    variant="outlined"
                    fullWidth={false}
                    value={aadhar}
                    error={aadharError}
                    autoComplete="off"
                    helperText={aadharError ? "Please Enter Aadhar" : ""}
                    onChange={(e) => dispatch(updateAadhar(e.target.value))} />
            </div>
        </Card>
    )
}

export default PaymentInfo
