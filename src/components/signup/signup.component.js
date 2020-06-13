import React from 'react'

import { navigate } from '@reach/router'
import { useStep } from 'react-hooks-helper'

import { Wrapper, ButtonBox, SpecialButton } from './signup.styles'

import NameInput from './slides/nameInput'
import EmailInput from './slides/emailInput'
import PasswordInput from './slides/passwordInput'

import Logo from '../../atoms/logo'


const Signup = () => {
    const { index, navigation: { next, previous } } = useStep({steps: 3});
    
    return (
        <Wrapper>
            <Logo />

            {
                index === 0 &&
                <>
                    <NameInput />
                </>
            }

            {
                index === 1 &&
                <>
                    <EmailInput />
                </>
            }

            {
                index === 2 &&
                <>
                    <PasswordInput />
                </>
            }

            <ButtonBox>
                <SpecialButton onClick={e => {
                    e.preventDefault();
                    previous();
                    }} style={{visibility: index===0 ? "hidden" : "visible"}}>
                        Previous
                </SpecialButton>

                <SpecialButton onClick={e => {
                    e.preventDefault();
                    (index !== 2) ? next() : navigate("/voting-page");
                    }} index>
                        {
                            (index !== 2) ? "Next" : "Register"
                        }
                </SpecialButton>
            </ButtonBox>
        </Wrapper>
    )
}

export default Signup