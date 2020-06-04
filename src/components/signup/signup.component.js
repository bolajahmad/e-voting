import React from 'react'

import { useStep } from 'react-hooks-helper'

import { Wrapper, ButtonBox, SpecialButton } from './signup.styles'

import Form from '../../organisms/form'

import Logo from '../../atoms/logo'
import Paragraph from '../../atoms/paragraph'
import InputField from '../../atoms/inputs'
import PasswordInputField from '../../atoms/inputs/passwordInput'


const Signup = () => {
    const { index, navigation: {next, previous, go} } = useStep({steps: 3});
    
    return (
        <Wrapper>
            <Logo />

            <Paragraph align="center" size={3} weight={700}>
                Welcome contestant,
            </Paragraph>

            <Paragraph align="center" size={2} weight={700}>
                Enter your name to continue
            </Paragraph>

            <Form>
                {
                    index === 0 &&
                    <>
                        <InputField id="lastName" name="lastName" type="text">last name</InputField>

                        <InputField id="firstName" name="firstName" type="text">first name</InputField>
                    </>
                }

                {
                    index === 1 &&
                    <>
                        <InputField id="email" name="email" type="email">email</InputField>
                    </>
                }

                {
                    index === 2 &&
                    <>
                        <PasswordInputField>
                            password
                        </PasswordInputField>
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
                        (index !== 2) ? next() : go();
                        }} index>
                            {
                                (index !== 2) ? "Next" : "Register"
                            }
                    </SpecialButton>
                </ButtonBox>
            </Form>
        </Wrapper>
    )
}

export default Signup