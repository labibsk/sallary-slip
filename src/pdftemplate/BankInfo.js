import React from 'react'
import { FlexVertical } from './layouts'
import { Row, MiddleCell, BottomCell } from "./tableComponents"

function BankInfo({ bankName, bankAccountNo, pan }) {
    return (
        <FlexVertical>
            <Row>
                <MiddleCell>Bank Name</MiddleCell>
                <MiddleCell>{bankName}</MiddleCell>
                <MiddleCell>PAN</MiddleCell>
                <MiddleCell>{pan}</MiddleCell>
            </Row>
            <Row>
                <BottomCell>Bank A/c No</BottomCell>
                <BottomCell>{bankAccountNo}</BottomCell>
                <BottomCell />
                <BottomCell />
            </Row>
        </FlexVertical>
    )
}

export default BankInfo
