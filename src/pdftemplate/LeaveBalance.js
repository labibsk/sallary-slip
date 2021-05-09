import React from 'react'
import { BoldCell, Cell, Row } from './tableComponents'
import { FlexVertical } from './layouts'

function LeaveBalance({ opening, earned, availed, closing }) {
    return (
        <FlexVertical>
            <Row>
                <BoldCell style={{ fontWeight: 'bold', flexGrow: '1' }}>Leave Balance</BoldCell>
            </Row>
            <Row>
                <Cell>Opening</Cell>
                <Cell>Earned</Cell>
                <Cell>Availed</Cell>
                <Cell>Closing</Cell>
            </Row>
            <Row>
                <Cell>{opening}</Cell>
                <Cell>{earned}</Cell>
                <Cell>{availed}</Cell>
                <Cell>{closing}</Cell>
            </Row>
        </FlexVertical>
    )
}

export default LeaveBalance