import {default as styled} from "@react-pdf/styled-components"

export const TableBorder = styled(props => <styled.View {...props} />)`
    border:0.5pt solid #000;
    width:100%;
    margin-top:20pt;
`

export const Row = styled(props => <styled.View {...props} />)`
    display:flex;
    flex-direction:row;
`

export const Cell = styled(props => <styled.Text {...props} />)`
    border:0.5pt solid #000;
    padding:4pt 5.4pt 4pt 5.4pt;
    width:128pt;
    font-size:11pt;
    font-family:'Lora';
    box-sizing:border-box;
`
export const BoldCell = styled(props => <styled.Text {...props} />)`
    border:0.5pt solid #000;
    padding:4pt 5.4pt 4pt 5.4pt;
    width:128pt;
    font-size:11pt;
    font-family:'Lora';
    font-weight:bold;
    box-sizing:border-box;
`

export const TopCell = styled(props => <styled.Text {...props} />)`
    border-left:0.5pt solid #000;
    border-right:0.5pt solid #000;
    border-top:0.5pt solid #000;
    padding:4pt 5.4pt 4pt 5.4pt;
    font-size:11pt;
    width:128pt;
    font-family:'Lora';
    box-sizing:border-box;
`
export const BottomCell = styled(props => <styled.Text {...props} />)`
    border-left:0.5pt solid #000;
    border-right:0.5pt solid #000;
    border-bottom:0.5pt solid #000;
    padding:4pt 5.4pt 4pt 5.4pt;
    font-size:11pt;
    box-sizing:border-box;
    font-family:'Lora';
    width:128pt;
`

export const EmptyBottomCell = styled(props => <styled.Text {...props} />)`
    border-left:0.5pt solid #000;
    border-right:0.5pt solid #000;
    border-bottom:0.5pt solid #000;
    padding:4pt 5.4pt 4pt 5.4pt;
    font-size:11pt;
    box-sizing:border-box;
    font-family:'Lora';
    width:128pt;
    height:20pt;
`
export const MiddleCell = styled(props => <styled.Text {...props} />)`
    border-left:0.5pt solid #000;
    border-right:0.5pt solid #000;
    padding:4pt 5.4pt 4pt 5.4pt;
    font-size:11pt;
    font-family:'Lora';
    width:128pt;
    box-sizing:border-box;
`


export const EmptyMiddleCell = styled(props => <styled.Text {...props} />)`
    border-left:0.5pt solid #000;
    border-right:0.5pt solid #000;
    padding:4pt 5.4pt 4pt 5.4pt;
    height:20pt;
    font-size:11pt;
    font-family:'Lora';
    width:128pt;
    box-sizing:border-box;
`
export const EmptyCell = styled(props => <styled.View {...props} />)`
    border:0.5pt solid #000;
    height:28pt;
    width:128pt;
    box-sizing:border-box;
`