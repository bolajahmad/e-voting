import styled from 'styled-components'

import { Link } from '@reach/router'
import { StyledButton } from '../../atoms/buttons/buttons.styles'

export const Wrapper = styled.div`
    position: relative;
`

export const FormBox = styled.div`
    padding: 2em;
    margin: 2em auto;
`

export const UploadArea = styled.div`
    width: 50%;
    height: 15em;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(240, 220, 210);
    border: 1px dashed pink;
`

export const Div = styled.div`
    width: ${props => props.width};
    margin: ${props => props.margin};
`

export const SpecialButton = styled(StyledButton)`
    background: rgba(255, 229, 229, 0.85);
    color: rgba(237, 25, 68, 0.675);
    border: 0.05em solid rgb(237, 25, 68);
    visibility: ${props => (props.index === 0) ? "visible" : "visible"};

    &:hover, &:focus {
        background: rgb(255, 229, 229);
        color: rgb(237, 25, 68);
    }
`

export const ReversedSpecialButton = styled(StyledButton)`

`

export const StyledLink = styled(Link)`
    margin-top: 3em;
`