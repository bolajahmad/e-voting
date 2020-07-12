import styled from 'styled-components'


export const FormWrapper = styled.form`
    display: flex;
    flex-direction: ${props => props.direction || "column"};
    justify-content: ${props => (props.direction === "row") ? "space-between" : "stretch"};
    padding: 0 5em;
    min-height: 20em;
`

