import styled from 'styled-components'

import { StyledButton } from '../../atoms/buttons/buttons.styles'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60vw;
    background: rgba(255, 255, 185, 0.342);
    padding: 1em 2em;
    margin: auto;
    min-height: 100vh;
`

export const ButtonBox = styled.div`
    display: grid;
    width: 100%;
    height: 3em;
    grid-template-columns: repeat(2, 1fr);
    gap: 2em;
    margin: 2em auto;
    justify-content: space-between;
`

export const SpecialButton = styled(StyledButton)`
    width: 40%;
    height: 100%;

    &:first-child {
        justify-self: flex-start;
        visibility: ${props => props.index === 0 ? "hidden" : "visible"}
    }

    &:last-child {
        justify-self: flex-end;
    }
`