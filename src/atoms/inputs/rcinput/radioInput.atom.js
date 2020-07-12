import React from 'react'

import { Div, RadioLabel, RadInput } from './radioInput.styles'


const RadioInput = ({ children, name, type, ...otherProps }) => {
    return (
        <RadioLabel>
            <RadInput type={type} name={name} {...otherProps} />
            {children}
        </RadioLabel>
    )
}

export default RadioInput