import React from 'react'

import styled from 'styled-components'

import Form from '../../../../organisms/form'

import {P} from '../../../../atoms/paragraph/paragraph.styles'
import InputField from '../../../../atoms/inputs'


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


const EmailInput = () => {
    return (
        <>
            <Heading>
                Nice to have you, Contestant!
            </Heading>

            <Paragraph align="left" size={1.2}>
                Provide your email account for verification
            </Paragraph>

            <Form>
                <InputField id="email" name="email" type="email">Email</InputField>
            </Form>
        </>
    )
}

export default EmailInput