import React, { useState, useEffect } from 'react'

import axios from 'axios'
import { useStep } from 'react-hooks-helper'

import { getCountries } from '../../helper-functions/get-countries'

import { Wrapper, FormBox, Form, SelectBox, SpecialButton } from './createSponsor.styles'

import InputField from '../../atoms/inputs'
import TextField from '../../atoms/inputs/textField'
import UploadFile from '../../atoms/inputs/uploadFileInput'

import Navbar from '../../molecules/navbar'


const CreateSponsor = () => {
    const [ isFemale, setIsFemale ] = useState(false);
    const [ countries, setCountries ] = useState([]);

    const { index, navigation: { next, previous } } = useStep({steps: 10});

    useEffect(() => {
        axios.get("http://restcountries.eu/rest/v2/all")
        .then(res => {
            var countryData = res.data;
            /* console.log(countryData); */
            countryData.map((country, index) => {
                console.log(country.name);
                
                setCountries(countries => [...countries, country.name]);
                console.log(countries);
            })
            console.log(countries)
        })
    }, [countries])

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
                        <Form>
                            <SelectBox>
                                <InputField type="text" name="title" id="title" list="choose-title">
                                    Title
                                </InputField>

                                <datalist id="choose-title">
                                    <option value="Mr." />
                                    <option value="Mrs." />
                                    <option value="Miss" />
                                </datalist>
                            </SelectBox>

                            <InputField type="text" name="lastName" id="lastName">
                                Last Name
                            </InputField>

                            <InputField type="text" name="firstName" id="firstName">
                                First Name
                            </InputField>
                        </Form>
                    )
                }

                {
                    index === 1 && (
                        <Form>
                            <fieldset>
                                <legend>Select Your Gender:</legend>

                                <div>
                                    <input type="radio" name="gender" id="male" value="Male" onClick={e => {
                                        e.preventDefault();
                                        setIsFemale(true);
                                    }} />
                                    <label htmlFor="male"> Male</label>

                                    
                                    <input type="radio" name="gender" id="female" value="Female" onClick={e => {
                                        e.preventDefault();
                                        setIsFemale(true);}} />
                                    <label htmlFor="female">
                                        Female
                                    </label>

                                    <input type="radio" name="gender" id="others" value="Others"
                                        onClick={e => {
                                            e.preventDefault();
                                            setIsFemale(true);
                                    }} />
                                    <label htmlFor="others">Others</label>
                                </div>
                                
                                {
                                    (!isFemale) ? null : (
                                        <InputField type="text" id="maidenName" name="maidenName">
                                            Maiden name
                                        </InputField>
                                    )
                                }
                            </fieldset>
                        </Form>
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
                           <InputField type="text" id="country" name="country" list="countries">
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