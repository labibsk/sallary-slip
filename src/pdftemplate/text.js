import { default as styled } from '@react-pdf/styled-components'
import { Font } from '@react-pdf/renderer'

const basePath = "https://labibsk.github.io/invoicegen/fonts/"
const regular = basePath + "Lora-Regular.ttf"
const medium = basePath + "Lora-Medium.ttf"
const bold = basePath + "Lora-Bold.ttf"

Font.register({
        family: 'Lora', fonts: [
                { src: regular, fontStyle: 'normal', fontWeight: 'normal' },
                { src: medium, fontStyle: 'normal', fontWeight: 'medium' },
                { src: bold, fontStyle: 'normal', fontWeight: 'bold' }
        ]
})

export const LabelText = styled(props => <styled.Text {...props} />)`
        font-family:'Lora';
        font-size:11pt;
        color:#000;
        font-weight:bold;
`

export const CompanyName = styled(props => <styled.Text {...props} />)`
        color:#000;
        font-family:'Lora';
        font-size:14pt;
        font-weight:bold;
        margin-left:8pt;
`
export const InvoiceTitle = styled(props => <styled.Text {...props} />)`
        color:#000;
        font-family:'Lora';
        font-size:14pt;
        font-weight:bold;
        flex-grow:1;
        margin-top:4pt;
`

export const AddressLine = styled(props => <styled.Text {...props} />)`
        color:#000;
        font-family:'Lora';
        font-size:11pt;
        font-weight:normal;
        margin-left:8pt;
`