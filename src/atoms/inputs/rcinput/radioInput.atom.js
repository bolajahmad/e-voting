import React from 'react'

import { Div, Label, Input } from './radioInput.styles'


const RadioInput = ({ children, name, type, ...otherProps }) => {
    return (
        <Div>
            <Label>
                <Input type={type} name={name} {...otherProps} />
                {children}
            </Label>
        </Div>
    )
}

export default RadioInput