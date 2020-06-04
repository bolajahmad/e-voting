import React from 'react'

import { FormWrapper } from './form.styles'


const Form = ({ children }) => {
    return (
        <FormWrapper role="form">
            {children}
        </FormWrapper>
    )
}

export default Form