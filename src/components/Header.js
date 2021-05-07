import React from 'react';
import { Card, TextField } from "@material-ui/core";
import EmployeeId from './EmployeeId';
import SlipFor from './SlipFor';

function Header({
    employeeIds,
    payslipFor,
    setPayslipFor,
    employeeId,
    employeeIdError,
    setEmployeeId,
    companyPan,
    companyPanError,
    setCompanyPan
}) {
    return (
        <Card className="card">
            <div className="horizontal">
                <SlipFor className="horizontalItem"
                    payslipFor={payslipFor}
                    setPayslipFor={setPayslipFor} />

                <TextField
                    className="horizontalItem"
                    id="outlined-basic"
                    label="Company Pan"
                    variant="outlined"
                    fullWidth={true}
                    value={companyPan}
                    onChange={(e) => setCompanyPan(e.target.value)} />
            </div>

            <EmployeeId
                className="employeeId"
                employeeIds={employeeIds}
                employeeId={employeeId}
                helperText={employeeIdError ? "Please enter Employee Id" : "   "}
                error={employeeIdError}
                setEmployeeId={setEmployeeId} />
        </Card>
    )
}

export default Header
