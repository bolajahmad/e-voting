import styled from 'styled-components'


export const Div = styled.div`
    display: contents;
`

export const StyledButton = styled.button`
    height: 3em;
    width: 100%;
    background: rgb(236, 226, 132);
    border: 0.05em solid white;
    border-radius: 1em 1em;
    font-size: 1rem;
    color: rgba(129, 33, 129, 1);
    transition: all 1s ease;

    :focus, :hover {
        transform: scale(1.1);
    }
`

/**display: flex;
    align-items: start;
    margin: 1em 0;
    padding: 0.2em;
    height: 3em;
    width: auto; */