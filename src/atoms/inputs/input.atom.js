import React from 'react'
import PropTypes from 'prop-types'

import { Label, Input, } from './input.styles'


const InputField = ({ children, id, name, type, ...otherProps }) => {
    return (
        <>
            <Label htmlFor={id}>
                {children}
            </Label>

            <Input type={type} name={name} id={id} {...otherProps} />
        </>
    )
}

export default InputField

InputField.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string
}