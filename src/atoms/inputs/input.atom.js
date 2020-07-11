import React from 'react'
import PropTypes from 'prop-types'

import { Div, Label, Input, } from './input.styles'


const InputField = ({ children, id, name, type, ...otherProps }) => {
    return (
        <Div>
            <Label htmlFor={id}>
                {children}
            </Label>

            <Input type={type} name={name} id={id} {...otherProps} />
        </Div>
    )
}

export default InputField

InputField.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string
}