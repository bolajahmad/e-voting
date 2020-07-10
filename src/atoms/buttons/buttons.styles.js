import styled from 'styled-components'

export const StyledButton = styled.button`
    height: 3em;
    width: 100%;
    background: rgb(237, 25, 68);
    border: 0.05em solid rgb(247, 246, 241);
    border-radius: 0.5em;
    font-size: 1rem;
    color: rgb(247, 246, 241);
    transition: all 1s ease;
    
    :focus, :hover {
        background: rgba(237, 25, 68, 0.85);
        color: rgba(247, 246, 241, 0.675);
    }
`