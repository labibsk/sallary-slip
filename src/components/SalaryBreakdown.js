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
                    id="basic"
                    label="Basic"
                    variant="outlined"
                    type="number"
                    autoComplete="off"
                    value={basic}
                    onChange={(e) => dispatch(updateBasic(e.target.value))} />
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="outlined-basic"
                    label="Conveyance Allowance"
                    variant="outlined"
                    type="number"
                    autoComplete="off"
                    value={conveyanceAllowance}
                    onChange={(e) => dispatch(updateConveyanceAllowance(e.target.value))} />
            </div>

            <TextField
                id="incentive"
                label="Incentive"
                variant="outlined"
                type="number"
                autoComplete="off"
                value={incentive}
                onChange={(e) => dispatch(updateIncentive(e.target.value))} />

            <div className="horizontal">
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="incomeTax"
                    label="Income Tax (TDS)"
                    variant="outlined"
                    type="number"
                    autoComplete="off"
                    value={incomeTax}
                    onChange={(e) => dispatch(updateIncomeTax(e.target.value))} />
                <TextField
                    className="horizontalItem"
                    fullWidth={false}
                    id="arrears"
                    label="Arrears"
                    variant="outlined"
                    type="number"
                    autoComplete="off"
                    value={arrears}
                    onChange={(e) => dispatch(updateArrears(e.target.value))} />
            </div>
        </Card>
    )
}

export default SalaryBreakdown
