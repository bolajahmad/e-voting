import styled from 'styled-components'

import { StyledButton } from '../../buttons/buttons.styles'


export const Form = styled.form`
    display: flex;
    justify-content: center;
    width: auto;
    height: auto;
`

export const Label = styled(StyledButton)`
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    color: rgb(99, 46, 27);
    background: rgba(99, 46, 27, 0.265);
    border-radius: 1em;
    padding: auto;

    &:focus, &:hover {
        outline: 1px solid blue;
        outline: -webkit-focus-ring-color auto 5px;
        background: rgba(99, 46, 27, 0.675);
        color: white;
    }
`

export const Input = styled.input.attrs({
    type: "file"
})`
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;

    &::before {
        contents: "
    }
`