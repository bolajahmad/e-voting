import React from 'react'
import PropTypes from 'prop-types'

import { FormWrapper } from './form.styles'


const Form = ({ children, ...otherProps }) => {
    return (
        <FormWrapper {...otherProps} role="form">
            {children}
        </FormWrapper>
    )
}

export default Form