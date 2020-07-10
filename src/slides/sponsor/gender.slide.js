import React from 'react'

import { RadioBox, Fieldset, Legend } from '../slide.styles'

import Form from '../../organisms/form'
import RadioInput from '../../atoms/inputs/rcinput'
import InputField from '../../atoms/inputs'


const GenderSlide = ({ sex, setSex }) => {
    return (
        <Form>
            <Fieldset>
                <Legend>Select Your Gender:</Legend>

                <RadioBox>
                    <RadioInput type="radio" name="gender"
                    value="male" onChange={e  => setSex(e.target.value)} 
                    checked={sex === "male"}>
                        Male
                    </RadioInput>

                    <RadioInput type="radio" name="gender"
                    value="female" onChange={e  => setSex(e.target.value)} 
                    checked={sex === "female"}>
                        Female
                    </RadioInput>

                    <RadioInput type="radio" name="gender"
                    value="others" onChange={e  => setSex(e.target.value)} 
                    checked={sex === "others"}>
                        Another gender
                    </RadioInput>
                </RadioBox>

                {
                    (sex === "female" || sex === "others") ? (
                        <InputField type="text" name="maidenName" id="maidenName">
                            Maiden Name (If you have one):
                        </InputField>
                        ) : null
                }
            </Fieldset>
        </Form>
    )
}

export default GenderSlide;