import React from 'react'
import BankInfo from './BankInfo'
import DaysInfo from './DaysInfo'
import EmployeeInfo from './EmployeeInfo'
import EmployeeName from './EmployeeName'
import LeaveBalance from './LeaveBalance'
import NetPayable from './NetPayable'
import Note from './Note'
import SalaryBreakDown from './SalaryBreakDown'
import { TableBorder, Row, EmptyCell } from "./tableComponents"
import Total from './Total'

function SalarySlipTable({ data }) {
    return (
        <TableBorder>
            <EmployeeName employeeName={data.employeeName} />
            <EmployeeInfo
                companyPan={data.companyPan}
                employeeId={data.employeeId}
                monthlyGross={data.monthlyGross}
                monthlyBasic={data.monthlyBasic}
            />
            <DaysInfo
                dateOfJoining={data.dateOfJoining}
                dateOfSeperation={data.dateOfSeperation}
                daysMonth={data.daysMonth}
                daysPayable={data.daysPayable}
            />
            <BankInfo
                bankName={data.bankName}
                bankAccountNo={data.bankAccountNo}
                pan={data.pan}
                aadhar={data.aadhar}
            />
            <Row>
                <EmptyCell style={{ flexGrow: '1' }} />
            </Row>
            <SalaryBreakDown
                basic={data.basic}
                conveyanceAllowance={data.conveyanceAllowance}
                incentive={data.incentive}
                incomeTax={data.incomeTax}
                arrears={data.arrears}
            />
            <Total
                totalEarnings={data.totalEarnings}
                totalDeductions={data.totalDeductions}
            />
            <NetPayable
                netPayable={data.netPayable}
                netPayableInWords={data.netPayableInWords}
            />
            <Note />
        </TableBorder>
    )
}

export default SalarySlipTable
