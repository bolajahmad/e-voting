import React from 'react'

import useFetch from '../../hooks/useFetch.hook'

import Form from '../../organisms/form'
import InputField from '../../atoms/inputs'


const NationalitySlide = ({ countries }) => {
    const { response, error } = useFetch("http://restcountries.eu/rest/v2/all?fields=name");

    return (
        <Form>
            <InputField type="text" id="country" name="country" list="countries">
                Nationality
            </InputField>

            <datalist id="countries">
                {
                    (response) ? (
                        response.map((country, index) => {
                            return <option value={country.name} key={index} />
                        })
                    ) : (
<>
<option value="Germany" />
    <option value="France" />
    <option value="Nigeria" />
    <option value="China" />
</>

)
                }
            </datalist>
        </Form>
    )
}

export default NationalitySlide
