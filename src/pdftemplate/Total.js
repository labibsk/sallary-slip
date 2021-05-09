import React from 'react'
import { BoldCell, Cell, EmptyCell, Row } from './tableComponents'

function Total({ totalEarnings, totalDeductions }) {
    return (
        <Row>
            <BoldCell>Total</BoldCell>
            <Cell>{totalEarnings}</Cell>
            <EmptyCell />
            <Cell>{totalDeductions}</Cell>
        </Row>
    )
}

export default Total
