import styled from 'styled-components'
import { Link } from '@reach/router'


export const Wrapper = styled.div`
    display: flex;
    padding: 1em 2em;
    max-width: 100%;
    background: rgba(236, 23, 67, 0.675);
    box-shadow: 0.2em 0.2em 0.5em 0 rgba(150, 120, 100, 0.5);
`

export const StyledLink = styled(Link)`
    padding: 0.5em 1em;
    margin: auto 1em;

    &:hover, &:focus {
        color: silver;
        border-color: silver;
    }

    &:nth-child(2) {
        border: 2px solid white;
        border-radius: 2em;
    }
`

export const Nav = styled.nav`
    margin: auto 0 auto auto;
`

export const List = styled.ul`
    list-style: none;
    display: flex;
`

export const ListItem = styled.li`
    list-style: none;
    display: contents;
`