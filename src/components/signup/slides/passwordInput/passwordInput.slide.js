import React from 'react'

import styled from 'styled-components'

import Form from '../../../../organisms/form'

import {P} from '../../../../atoms/paragraph/paragraph.styles'
import PasswordInputField from '../../../../atoms/inputs'


const Heading = styled.h1`
    color: rgb(99, 46, 27);
    font-size: 2.5rem;
    margin: 0 1em 1em;
    width: 100%;
`

const Paragraph = styled(P)`
    margin: 0 2em 1em;
    width: 100%
`


const PasswordInput = () => {
    return (
        <>
            <Heading>
                Complete the last step
            </Heading>

            <Paragraph align="left" size={1.2}>
                Choose a password to secure your account
            </Paragraph>
            
            <Form>
                <PasswordInputField>Password</PasswordInputField>
            </Form>
        </>
    )
}

export default PasswordInput