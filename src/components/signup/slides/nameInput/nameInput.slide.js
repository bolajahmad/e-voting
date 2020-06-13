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
    width: auto;
`


const NameInput = () => {
    return (
        <>
        <Heading>
            Welcome contestant,
        </Heading>

        <Paragraph align="left" size="1.2">
            Enter your name to continue, last name first then first name. 
            If you have a middle name, you can add it to the first name field
        </Paragraph>

        <Form>
            <InputField id="lastName" name="lastName" type="text">Last Name</InputField>

            <InputField id="firstName" name="firstName" type="text">First Name</InputField>
        </Form>
        </>
    )
}

export default NameInput