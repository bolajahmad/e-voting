import React from 'react'

import { Div, Label, TextArea } from './textField.styles'


const TextField = ({ children, id, name, otherProps, value }) => {
    return (
        <Div>
             <Label htmlFor={id}>
                {children}
            </Label>

            <TextArea name={name} id={id} {...otherProps}>
                {value}    
            </TextArea>   
        </Div>
    )
}

export default TextField