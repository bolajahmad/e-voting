import styled from 'styled-components'


export const P = styled.p`
    margin: 0;
    padding: 0 auto;
    text-align: ${props => props.align || "left"};
    font-size: ${props => props.size || 1}em;
    font-weight: ${props => props.weight || "normal"};
    width: 100%;
    height: auto;
`