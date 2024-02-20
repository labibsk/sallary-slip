import { Image } from '@react-pdf/renderer'
import React from 'react'
import logo from '../assets/digital_wolf_logo.png'
import { FlexHorizontal } from './layouts'
import { CompanyName, AddressLine } from './text'
import styled from '@react-pdf/styled-components'

function Header({ companyName, addressLine1, addressLine2, addressLine3, date }) {
    return (
        <FlexHorizontal>
            <Image src={logo} style={{ width: '65.05pt', height: '54pt' }} />
            <CompanyAddress>
                <CompanyName>
                    {companyName}
                </CompanyName>
                <AddressLine>
                    {addressLine1}
                </AddressLine>
                <AddressLine>
                    {addressLine2}
                </AddressLine>
                <AddressLine>
                    {addressLine3}
                </AddressLine>
            </CompanyAddress>
            <PaySlipTitle>
                <TitleLine>
                    Pay Slip
                </TitleLine>
                <SubTitleLine>
                    {date}
                </SubTitleLine>
            </PaySlipTitle>
        </FlexHorizontal>
    )
}

export default Header

const CompanyAddress = styled(props => <styled.View {...props} />)`
    display:flex;
    flex-direction:column;
    flex-grow:1;
`
const PaySlipTitle = styled(props => <styled.View {...props} />)`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
`
const TitleLine = styled(props => <styled.Text {...props} />)`
    font-family:'Lora';
    font-size:14pt;
    font-weight:bold;
`
const SubTitleLine = styled(props => <styled.Text {...props} />)`
    font-family:'Lora';
    font-size:11pt;
    font-weight:bold;
`