import React from 'react'
import { Card } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { updateArrears, updateBasic, updateConveyanceAllowance, updateIncentive, updateIncomeTax } from '../actions';

function SalaryBreakdown() {

    const basic = useSelector(state => state.basic);
    const conveyanceAllowance = useSelector(state => state.conveyanceAllowance);
    const incentive = useSelector(state => state.incentive);
    const incomeTax = useSelector(state => state.incomeTax);
    const arrears = useSelector(state => state.arrears);

    const dispatch = useDispatch();

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
                    onChange={(e) => dispatch(updateBasic(e.target.value))} />
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="outlined-basic"
                    label="Conveyance Allowance"
                    variant="outlined"
                    type="number"
                    value={conveyanceAllowance}
                    onChange={(e) => dispatch(updateConveyanceAllowance(e.target.value))} />
            </div>

            <TextField
                id="outlined-basic"
                label="Incentive"
                variant="outlined"
                type="number"
                value={incentive}
                onChange={(e) => dispatch(updateIncentive(e.target.value))} />

            <div className="horizontal">
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="outlined-basic"
                    label="Income Tax (TDS)"
                    variant="outlined"
                    type="number"
                    value={incomeTax}
                    onChange={(e) => dispatch(updateIncomeTax(e.target.value))} />
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="outlined-basic"
                    label="Arrears"
                    variant="outlined"
                    type="number"
                    value={arrears}
                    onChange={(e) => dispatch(updateArrears(e.target.value))} />
            </div>
        </Card>
    )
}

export default SalaryBreakdown
