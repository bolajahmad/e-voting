import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './buttons.styles'


const Button = ({ onClick, children, ...allProps }) => {
    return (
        <StyledButton onClick={onClick} {...allProps}>
            {children}
        </StyledButton>
    )
}

export default Button


Button.propTypes = {
    onClick: PropTypes.func
}