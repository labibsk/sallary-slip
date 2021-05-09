import React from 'react'
import { FlexVertical } from './layouts'
import { TopCell, MiddleCell, Row } from './tableComponents'

function EmployeeInfo({ companyPan, employeeId, monthlyGross, monthlyBasic }) {
    return (
        <FlexVertical>
            <Row>
                <TopCell>Company PAN</TopCell>
                <TopCell>{companyPan}</TopCell>
                <TopCell>Monthly Gross</TopCell>
                <TopCell>{monthlyGross}</TopCell>
            </Row>
            <Row>
                <MiddleCell>Employee ID</MiddleCell>
                <MiddleCell>{employeeId}</MiddleCell>
                <MiddleCell>Monthly Basic</MiddleCell>
                <MiddleCell>{monthlyBasic}</MiddleCell>
            </Row>
        </FlexVertical>
    )
}

export default EmployeeInfo
