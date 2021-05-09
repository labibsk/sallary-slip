import React from 'react'
import { Row, Cell, BoldCell } from "./tableComponents"

function EmployeeName({ employeeName }) {
    return (
        <Row>
            <BoldCell>Name of Employee</BoldCell>
            <Cell style={{ flexGrow: '1' }}>{employeeName}</Cell>
        </Row>
    )
}

export default EmployeeName
