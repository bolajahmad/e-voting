import React from 'react'
import PropTypes from 'prop-types'

import { FormWrapper } from './form.styles'


const Form = ({ children, direction }) => {
    return (
        <FormWrapper direction={direction} role="form">
            {children}
        </FormWrapper>
    )
}

export default Form


Form.propTypes = {
    direction: PropTypes.oneOf(["row", "column", "row-reverse", "column-reverse"])
}