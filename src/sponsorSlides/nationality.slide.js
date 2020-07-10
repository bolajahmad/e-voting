import React from 'react'

import Form from '../organisms/form'
import InputField from '../atoms/inputs'


const NationalitySlide = () => {
    return (
        <Form>
            <InputField type="text" id="country" name="country" list="countries">
                Nationality
            </InputField>

            <datalist id="countries">
                {/* {
                    countries.map((country, i) => {
                        return (
                            <option value={country} key={i} />
                        )
                    })
                } */}
                <option value="Afghanistan" />
                <option value="Libya" />
                <option value="China" />
                <option value="Japan" />
                <option value="Nigeria" />
            </datalist>
        </Form>
    )
}

export default NationalitySlide