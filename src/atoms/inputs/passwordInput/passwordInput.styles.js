import styled from 'styled-components'


export const Wrapper = styled.div`
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
    margin-bottom: 0.1em;
`

export const Div = styled.div`
    width: auto;
    display: flex;
    gap: 0;
`

export const Input = styled.input`
    width: 80%;
    height: 3em;
    font-size: 1rem;
    background: rgba(236, 226, 132, 0.425);
    border: 0.02em solid rgba(129, 33, 129, 0.675);
    transition: all 0.5s ease;

    &:focus, &:hover {
        outline: 0.02em solid rgba(129, 33, 129, 0.675);
        background: rgba(236, 226, 132, 0.825);
    }
`

export const Button = styled.button`
    width: 20%;
    background: rgb(236, 226, 132);
    border: 0.02em solid rgba(129, 33, 129, 0.675);
    font-size: 1rem;
    color: rgb(129, 33, 129);
    transition: all 1s ease;

    &[aria-pressed="true"] {
        box-shadow: inset 0 0 0 0.15rem #000, inset 0.25em 0.25em 0 #fff;
    }
`