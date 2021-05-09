import React from 'react'
import { Row, BottomCell, TopCell, MiddleCell, EmptyMiddleCell, EmptyBottomCell, Cell } from './tableComponents'
import { FlexVertical } from './layouts'

function SalaryBreakDown({ basic, incomeTax, conveyanceAllowance, arrears, incentive, totalEarnings, totalDeductions, netPayable, netPayableInWords }) {
    return (
        <FlexVertical>
            <Row>
                <Cell>Earning Head</Cell>
                <Cell>Currently Monthly Earnings</Cell>
                <Cell>Deduction Head</Cell>
                <Cell>{"Currently Monthly \nDeductions"}</Cell>
            </Row>
            <Row>
                <TopCell>Basic</TopCell>
                <TopCell>{basic}</TopCell>
                <TopCell>Income Tax (TDS)</TopCell>
                <TopCell>{incomeTax}</TopCell>
            </Row>
            <Row>
                <MiddleCell>Conveyance Allowance</MiddleCell>
                <MiddleCell>{conveyanceAllowance}</MiddleCell>
                <MiddleCell>Arrears</MiddleCell>
                <MiddleCell>{arrears}</MiddleCell>
            </Row>
            <Row>
                <MiddleCell>Incentive</MiddleCell>
                <MiddleCell>{incentive}</MiddleCell>
                <MiddleCell />
                <MiddleCell />
            </Row>
            <Row>
                <EmptyMiddleCell />
                <EmptyMiddleCell />
                <EmptyMiddleCell />
                <EmptyMiddleCell />
            </Row>
            <Row>
                <EmptyBottomCell />
                <EmptyBottomCell />
                <EmptyBottomCell />
                <EmptyBottomCell />
            </Row>
        </FlexVertical>
    )
}

export default SalaryBreakDown
