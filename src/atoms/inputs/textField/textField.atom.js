import React from 'react'

import { Label, TextArea } from './textField.styles'


const TextField = ({ children, id, name, otherProps, value }) => {
    return (
        <>
            <Label htmlFor={id}>
                {children}
            </Label>

            <TextArea name={name} id={id} {...otherProps}>
                {value}    
            </TextArea>   
        </>
    )
}

export default TextField