import styled from 'styled-components'

import { StyledButton } from '../../atoms/buttons/buttons.styles'

export const Wrapper = styled.div`
    
`

export const FormBox = styled.div`
    width: 60%;
    margin: 2em auto;
`

export const SelectBox = styled.div`
    width: 30%;
`

export const Form = styled.form`
    width: 100%;
    padding: 2em;
`

export const SpecialButton = styled(StyledButton)`
    width: 40%;
    height: 3em;
    margin-left: 1em;
`

export const Label = styled.label`
    width: 100%;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
`

export const Input = styled.input`
    box-sizing: border-box;
    width: auto;
    height: 3em;
    font-size: 1rem;
    background: rgba(187, 191, 209, 0.425); 
    border: 0.02em solid rgba(129, 33, 129, 0.675);
    transition: all 0.5s ease;
    color: rgb(99, 46, 27);
    padding: 1em;

    &:focus, &:hover {
        outline: 0.02em solid rgba(129, 33, 129, 0.675);
        background: rgba(187, 191, 209, 0.825);
    }
`