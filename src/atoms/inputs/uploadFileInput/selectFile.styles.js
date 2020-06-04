import styled from 'styled-components'


export const Div = styled.div`
    display: flex;
    justify-content: center;
    width: auto;
    height: auto;
`

export const Label = styled.label`
    display: inline-block;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    color: white;
    background: red;

    &:focus, &:hover {
        outline: 1px solid blue;
        outline: -webkit-focus-ring-color auto 5px;
        background: yellow;
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