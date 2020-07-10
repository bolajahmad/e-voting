import styled from 'styled-components'


export const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    margin: 1em 0;
    justify-content: space-between;
    padding: 0 1em;
    width: auto;
    height: auto;
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