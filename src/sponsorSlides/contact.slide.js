import React from 'react'

import { Fieldset, Legend, ContactInputBox } from './slide.styles'

import Form from '../organisms/form'
import InputField from '../atoms/inputs'


const ContactSlide = () => {
    return (
        <Form>
            <Fieldset>
                <Legend>How can our team contact you?</Legend>

                <ContactInputBox>
                    <InputField type="email" name="email" id="email">
                        Email
                    </InputField>

                    <InputField type="tel" name="tel" id="telephone">
                        Phone number (OPTIONAL)
                    </InputField>
                </ContactInputBox>
            </Fieldset>
        </Form>
    )
}

export default ContactSlide