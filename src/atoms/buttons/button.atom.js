import React from 'react'

import { StyledButton } from './buttons.styles'


const Button = ({ onClick, children, ...allProps }) => {
    return (
        <StyledButton onClick={onClick} {...allProps}>
            {children}
        </StyledButton>
    )
}

export default Button