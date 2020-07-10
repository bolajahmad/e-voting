import React from 'react';

import { Nav, Menu, NavItem, NavLink } from './nav.styles';


const NavMenu = () => {
    return (
        <Nav>
            <Menu>
                <NavItem>
                    <NavLink to="sponsor">Create A Sponsor</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="sponsor">Login</NavLink>
                </NavItem>
            </Menu>
        </Nav>
    )
};

export default NavMenu;