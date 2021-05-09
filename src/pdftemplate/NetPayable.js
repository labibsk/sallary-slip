import React from 'react'
import { FlexVertical } from './layouts'
import { Row, EmptyCell, BoldCell } from './tableComponents'

function NetPayable({ netPayable, netPayableInWords }) {
    return (
        <FlexVertical>
            <Row>
                <BoldCell>Net Payable</BoldCell>
                <BoldCell style={{ flexGrow: '1' }}>{netPayable}</BoldCell>
            </Row>
            <Row>
                <EmptyCell style={{ alignSelf: 'flex-stretch' }}></EmptyCell>
                <BoldCell style={{ flexGrow: '1' }}>{netPayableInWords}</BoldCell>
            </Row>
        </FlexVertical>
    )
}

export default NetPayable
