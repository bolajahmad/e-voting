import styled from 'styled-components'

/**
 * I have a feeling i will end up  confusing myself wuth these styling
 * basically what i did was set the default flow placement of the foirm element to display flex
 * it displays as a flex-column by default unless I overwrite it with the direction prop
 * if the direction is set to row, there should be space between the elements
 * hennce the need for ${props => (props.direction === "row") ? "space-between" : "stretch"}
 * since the form has a minimum height I also want to always place the element at the center
 * but the reverse justify-content acts like an align-items if the flex-dirtection is switched
 * 
 */
export const FormWrapper = styled.form`
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: ${props => (props.direction === "row") ? "space-between" : "center"};
    align-items: ${props => (props.direction === "row") ? "center" : "space-between"};
    padding: 0 10em;
    min-height: 15em;
`

