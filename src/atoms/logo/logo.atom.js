import React from 'react'

import { Div, StyledLink } from './logo.styles'


export const Logo = () => {
    return (
        <Div>
            <StyledLink to="/">
                <img src={require("../../images/logo.png")} alt="logo" height="50px" width="200px" />
            </StyledLink>
        </Div>
    )
}

export default Logo