import styled from 'styled-components'

import { Link } from '@reach/router'
import { StyledButton } from '../../atoms/buttons/buttons.styles'

export const Wrapper = styled.div`
    position: relative;
`

export const FormBox = styled.div`
    width: 60%;
    margin: 2em auto;
`

export const UploadArea = styled.div`
    width: 20em;
    background: rgb(220, 220, 220);
    border: 1px dashed pink;
`

export const SpecialButton = styled(StyledButton)`
    width: 40%;
    height: 3em;
    margin-left: 1em;
`

export const StyledLink = styled(Link)`
    margin-top: 3em;
`