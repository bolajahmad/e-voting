import React from 'react'

import { Wrapper, Header } from './home.styles'

import Navbar from '../../molecules/navbar'


const Home = () => {
    return (
        <Wrapper>
            <Header>
                <Navbar />
            </Header>
        </Wrapper>
    )
}

export default Home