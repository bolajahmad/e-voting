import React from 'react'

import { Wrapper } from './navbar.styles'

import Logo from '../../atoms/logo'
import NavMenu from '../../organisms/nav'


const Navbar = () => {
    return (
        <Wrapper>
            <Logo />

            <NavMenu />
        </Wrapper>
    )
}

export default Navbar