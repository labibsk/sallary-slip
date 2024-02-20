import {default as styled} from '@react-pdf/styled-components'

export const Border = styled(props => <styled.View {...props} />)`
        width:100%;
        height:100%;
        border:1px solid #000;
        display:flex;
        padding:16pt;
        flex-direction:column;
`

export const FlexHorizontal = styled(props => <styled.View {...props} />)`
        width:100%;
        display:flex;
        flex-direction:row;
`

export const FlexVertical = styled(props => <styled.View {...props} />)`
    display:flex;
    flex-direction:column;
`