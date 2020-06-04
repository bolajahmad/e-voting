import React from 'react'

import { Div, StyledButton } from './buttons.styles'


const Button = ({ onClick, children }) => {
    return (
        <Div>
            <StyledButton onClick={onClick}>
                {children}
            </StyledButton>
        </Div>
    )
}

export default Button