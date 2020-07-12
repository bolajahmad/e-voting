import React from 'react'

import Form from '../../organisms/form'
import InputField from '../../atoms/inputs'


const NationalitySlide = ({ countries }) => {
    return (
        <Form>
            <InputField type="text" id="country" name="country" list="countries">
                Nationality
            </InputField>

            <datalist id="countries">
                {
                    (countries) ? (
                        countries.map((country, index) => {
                            return <option value={country.name} key={index} />
                        })
                    ) : null
                }
            </datalist>
        </Form>
    )
}

export default NationalitySlide