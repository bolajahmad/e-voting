import styled from 'styled-components'

import {StyledButton} from '../../atoms/buttons/buttons.styles'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60vw;
    margin: auto;
    min-height: 100vh;
`

export const ButtonBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2em;
    margin: 3em 0;
    padding: 0 1em;
    justify-content: space-between;
`

export const SpecialButton = styled(StyledButton)`
    width: 40%;
    min-height: 40%;

    &:first-child {
        justify-self: flex-start;
        visibility: ${props => props.index === 0 ? "hidden" : "visible"}
    }

    &:last-child {
        justify-self: flex-end;
    }
`