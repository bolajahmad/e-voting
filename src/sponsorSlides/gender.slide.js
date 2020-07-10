import React from 'react'

import { RadioBox, Fieldset, Legend } from 'slide.styles'

import Form from '../organisms/form'
import InputField from '../atoms/inputs'


const GenderSlide = ({ sex, setSex }) => {
    return (
        <Form>
            <Fieldset>
                <Legend>Select Your Gender:</Legend>

                <RadioBox>
                    <InputField type="radio" name="gender" id="male" 
                    value="male" onChange={e  => setSex(e.target.value)} 
                    checked={sex === "male"}>
                        Male
                    </InputField>

                    <InputField type="radio" name="gender" id="female" 
                    value="female" onChange={e  => setSex(e.target.value)} 
                    checked={sex === "female"}>
                        Feale
                    </InputField>

                    <InputField type="radio" name="gender" id="others" 
                    value="others" onChange={e  => setSex(e.target.value)} 
                    checked={sex === "others"}>
                        Another gender
                    </InputField>
                </RadioBox>

                {
                    (sex !== "male") ? (
                        <InputField type="text" name="maidenName" id="maidenName">
                            Maiden Name (If you have one):
                        </InputField>
                        ) : null
                }
            </Fieldset>
        </Form>
    )
}