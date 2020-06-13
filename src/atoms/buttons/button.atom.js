import React from 'react'

import { StyledButton } from './buttons.styles'


const Button = ({ onClick, children, otherProps }) => {
    return (
        <StyledButton onClick={onClick} {...otherProps}>
            {children}
        </StyledButton>
    )
}

export default Button