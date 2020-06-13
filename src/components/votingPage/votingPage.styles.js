import styled from 'styled-components'


export const Wrapper = styled.div`
    min-height: 100%;
    padding: 3em;
`

export const UploadBox = styled.div`
    width: 70%;
    height: 20em;
    display: grid;
    align-items: center;
    justify-items: center;
    margin: 3em auto;
    background: blue;
`

export const Span = styled.span`
    font-size: ${props => props.hint ? "1em" : "1.2em"};
    padding: 1em;
    margin: 2em 0;
`

