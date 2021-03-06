import React from 'react'
import { Card } from "@material-ui/core";
import convertToWords from '../convertToWords'
import { useSelector } from 'react-redux';

function Total() {
    const basic = useSelector(state => state.basic);
    const conveyanceAllowance = useSelector(state => state.conveyanceAllowance);
    const incentive = useSelector(state => state.incentive);
    const incomeTax = useSelector(state => state.incomeTax);
    const arrears = useSelector(state => state.arrears);

    const totalEarnings = ((parseFloat(basic) || 0) + (parseFloat(conveyanceAllowance) || 0) + (parseFloat(incentive) || 0)).toFixed(2)
    const totalDeductions = ((parseFloat(incomeTax) || 0) + (parseFloat(arrears) || 0)).toFixed(2)
    return (
        <Card className="card">
            <div className="horizontal">
                <div className="info">
                    <p className="title">Total Earnings</p>
                    <p className="value">{totalEarnings}</p>
                </div>

                <div className="info">
                    <p className="title">Total Deductions</p>
                    <p className="value">{totalDeductions}</p>
                </div>
            </div>

            <div className="info">
                <p className="title">Net Payable</p>
                <p className="value">{totalEarnings - totalDeductions}</p>
                <p className="subValue">Rupees {convertToWords(totalEarnings - totalDeductions)} Only</p>
            </div>
        </Card>
    )
}

export default Total
