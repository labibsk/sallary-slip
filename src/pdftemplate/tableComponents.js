import styled from "@react-pdf/styled-components"

export const TableBorder = styled.View`
    border:0.5pt solid #000;
    width:100%;
    margin-top:20pt;
`

export const Row = styled.View`
    display:flex;
    flex-direction:row;
`

export const Cell = styled.Text`
    border:0.5pt solid #000;
    padding:4pt 5.4pt 4pt 5.4pt;
    width:128pt;
    font-size:11pt;
    font-family:'Lora';
    box-sizing:border-box;
`
export const BoldCell = styled.Text`
    border:0.5pt solid #000;
    padding:4pt 5.4pt 4pt 5.4pt;
    width:128pt;
    font-size:11pt;
    font-family:'Lora';
    font-weight:bold;
    box-sizing:border-box;
`

export const TopCell = styled.Text`
    border-left:0.5pt solid #000;
    border-right:0.5pt solid #000;
    border-top:0.5pt solid #000;
    padding:4pt 5.4pt 4pt 5.4pt;
    font-size:11pt;
    width:128pt;
    font-family:'Lora';
    box-sizing:border-box;
`
export const BottomCell = styled.Text`
    border-left:0.5pt solid #000;
    border-right:0.5pt solid #000;
    border-bottom:0.5pt solid #000;
    padding:4pt 5.4pt 4pt 5.4pt;
    font-size:11pt;
    box-sizing:border-box;
    font-family:'Lora';
    width:128pt;
`

export const EmptyBottomCell = styled.Text`
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
export const MiddleCell = styled.Text`
    border-left:0.5pt solid #000;
    border-right:0.5pt solid #000;
    padding:4pt 5.4pt 4pt 5.4pt;
    font-size:11pt;
    font-family:'Lora';
    width:128pt;
    box-sizing:border-box;
`


export const EmptyMiddleCell = styled.Text`
    border-left:0.5pt solid #000;
    border-right:0.5pt solid #000;
    padding:4pt 5.4pt 4pt 5.4pt;
    height:20pt;
    font-size:11pt;
    font-family:'Lora';
    width:128pt;
    box-sizing:border-box;
`
export const EmptyCell = styled.View`
    border:0.5pt solid #000;
    height:28pt;
    width:128pt;
    box-sizing:border-box;
`