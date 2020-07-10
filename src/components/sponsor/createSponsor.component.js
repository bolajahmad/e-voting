import React, { useState, useEffect } from 'react'

import axios from 'axios'
import { useStep } from 'react-hooks-helper'

import { Wrapper, FormBox, Form, SpecialButton } from './createSponsor.styles'

import NameSlide from '../../sponsorSlides/name.slide'
import GenderSlide from '../../sponsorSlides/gender.slide'

import InputField from '../../atoms/inputs'
import TextField from '../../atoms/inputs/textField'
import UploadFile from '../../atoms/inputs/uploadFileInput'

import Navbar from '../../molecules/navbar'


const CreateSponsor = () => {
    const [ sex, setSex ] = useState("")
    const [ isFemale, setIsFemale ] = useState(false);
    const [ countries, setCountries ] = useState([]);

    const { index, navigation: { next, previous } } = useStep({steps: 10});

    /* useEffect(() => {
        axios.get("http://restcountries.eu/rest/v2/all?fields=name")
        .then(res => {
            let countryData = res.data;
            console.log(countryData)
            
            setCountries(countries => [...countries, countryData]);
        }
       }, [countries]) */

       const getCountries = () => {
           axios.get("http://restcountries.eu/rest/v2/all?fields=name")
            .then(res => {
                let countryData = res.data;
                console.log(countryData);

                setCountries(countries => [...countries, countryData]);
                console.log(countries);
            })
       }

    return (
        <Wrapper>
            <Navbar />

            <SpecialButton onClick={e => {
                    e.preventDefault();
                    previous();
                    }}>
                        Go Back
                </SpecialButton>

            <FormBox>
                {
                    index === 0 && (
                        <NameSlide />
                    )
                }

                {
                    index === 1 && (
                        <GenderSlide sex={sex} setSex={setSex} />
                    )
                }

                {
                    index === 2 && (
                        <Form>
                            <fieldset>
                                <legend>Enter your Date of Birth</legend>

                                <InputField type="number" name="day" id="day">
                                    Day
                                </InputField>

                                <InputField type="number" name="month" id="month">
                                    Month
                                </InputField>

                                <InputField type="number" name="year" id="year">
                                    Year
                                </InputField>
                            </fieldset>
                        </Form>
                    )
                }

                {
                    index === 3 && (
                        <Form>
                            <InputField type="text" name="occupation" id="occupation">
                                Profession
                            </InputField>
                        </Form>
                    )
                }

                {
                    index === 4 && (
                        <Form>
                            <InputField type="text" name="maritalStatus" id="maritalStatus" list="marital-status">
                                Relationship Status
                            </InputField>

                            <datalist id="marital-status">
                                <option value="single" />
                                <option value="married" />
                                <option value="divorced" />
                            </datalist>
                        </Form>
                    )
                }

                {
                    index === 5 && (
                        <Form>
                            <fieldset>
                                <legend>How can our team contact you?</legend>

                                <InputField type="email" name="email" id="email">
                                    Email
                                </InputField>

                                <InputField type="tel" name="tel" id="telephone">
                                    Phone number (OPTIONAL)
                                </InputField>
                            </fieldset>
                        </Form>
                    )
                }

                {
                   index === 6 && (
                       <Form>
                           <InputField type="text" id="country" name="country"
                           onFocus={getCountries} list="countries">
                               Nationality
                           </InputField>

                           <datalist id="countries">
                               {
                                   countries.map((country, i) => {
                                       return (
                                           <option value={country} key={i} />
                                       )
                                   })
                               }
                           </datalist>
                       </Form>
                   ) 
                }

                {
                    index === 7 && (
                        <Form>
                            <TextField name="address" id="address">
                                Residential Address
                            </TextField>

                            <label>
                                <input type="checkbox" value="permanetAdd" />
                                Use as my permanent address
                            </label>
                        </Form>
                    )
                }

                {
                    index === 8 && (
                        <Form>
                            <UploadFile accept="image/*">Upload a Picture</UploadFile>
                        </Form>
                    )
                }

                {
                    index === 9 && (
                        <Form>
                            <UploadFile accept="image/*, .pdf">Upload your signature</UploadFile>
                        </Form>
                    )
                }

                <SpecialButton onClick={e => {
                    e.preventDefault();
                    next();
                    }}>
                        Continue
                </SpecialButton>
            </FormBox>
        </Wrapper>
    )
}

export default CreateSponsor