import React from 'react'
import { Row, Cell } from './tableComponents'

function Note({ netPayable, netPayableInWords }) {
    return (
        <Row>
            <Cell>NOTE</Cell>
            <Cell style={{ flexGrow: '1' }}>TDS calculations are based on Employee’s Self Declaration of Investments.
All Figures in INR.</Cell>
        </Row>
    )
}

export default Note