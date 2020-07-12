import React from 'react'

import { BirthdayInputBox, Fieldset, Legend } from '../slide.styles'

import Form from '../../organisms/form'

import InputField from '../../atoms/inputs'


const BirthdaySlide = () => {
    return (
        <Form direction="row">
            <Fieldset>
                <Legend>Enter your Date of Birth</Legend>

                <BirthdayInputBox>
                    <InputField type="number" name="day" id="day">
                        Day
                    </InputField>

                    <InputField type="number" name="month" id="month">
                        Month
                    </InputField>

                    <InputField type="number" name="year" id="year">
                        Year
                    </InputField>
                </BirthdayInputBox>
            </Fieldset>
        </Form>
    )
}

export default BirthdaySlide
