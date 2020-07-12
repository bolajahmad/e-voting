import React from 'react'

import { BirthdayInputBox, Div, Fieldset, Legend } from '../slide.styles'

import Form from '../../organisms/form'

import InputField from '../../atoms/inputs'


const BirthdaySlide = () => {
    return (
        <Form>
            <Fieldset>
                <Legend>Enter your Date of Birth</Legend>

                <BirthdayInputBox>
                    <Div width="30%">
                       <InputField type="number" name="day" id="day">
                          Day
                       </InputField>
                    </Div>

                    <Div width="30%">
                    <InputField type="number" name="month" id="month">
                        Month
                    </InputField>
                    </Div>

                    <Div width="30%">
                    <InputField type="number" name="year" id="year">
                        Year
                    </InputField>
                    </Div>
                </BirthdayInputBox>
            </Fieldset>
        </Form>
    )
}

export default BirthdaySlide
