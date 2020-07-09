import styled from 'styled-components'

import { Link } from '@reach/router'


export const Nav = styled.nav`
    display: flex;
    margin: auto 0 auto auto;
`

export const Menu = styled.ul`
    display: contents;
`

export const NavItem = styled.ul`

`

export const NavLink = styled(Link)`
    padding: 0.5em 1em;
    margin: auto 1em;
`