import React from 'react'
import { FlexVertical } from './layouts'
import { Row, MiddleCell } from "./tableComponents"

function DaysInfo({ dateOfJoining, dateOfSeperation, daysMonth, daysPayable }) {
    return (
        <FlexVertical>
            <Row>
                <MiddleCell>
                    Date of Joining
                </MiddleCell>
                <MiddleCell>
                    {dateOfJoining}
                </MiddleCell>
                <MiddleCell>
                    Days Month
                </MiddleCell>
                <MiddleCell>
                    {daysMonth}
                </MiddleCell>
            </Row>
            <Row>
                <MiddleCell>
                    Date of Seperation
                </MiddleCell>
                <MiddleCell>
                    {dateOfSeperation}
                </MiddleCell>
                <MiddleCell>
                    Days Payable
                </MiddleCell>
                <MiddleCell>
                    {daysPayable}
                </MiddleCell>
            </Row>
        </FlexVertical>
    )
}

export default DaysInfo
