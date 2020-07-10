import React, { useState, useEffect } from 'react'

import axios from 'axios'
import { useStep } from 'react-hooks-helper'

import { Wrapper, FormBox, Form, SpecialButton } from './createSponsor.styles'

import NameSlide from '../../sponsorSlides/name.slide'
import GenderSlide from '../../sponsorSlides/gender.slide'
import BirthdaySlide from '../../sponsorSlides/birthday.slide'
import ProfessionSlide from '../../sponsorSlides/profession.slide'
import RelationshipSlide from '../../sponsorSlides/relationship.slide'
import ContactSlide from '../../sponsorSlides/contact.slide'
import NationalitySlide from '../../sponsorSlides/nationality.slide'
import AddressSlide from '../../sponsorSlides/address.slide'

import InputField from '../../atoms/inputs'
import TextField from '../../atoms/inputs/textField'
import UploadFile from '../../atoms/inputs/uploadFileInput'

import Navbar from '../../molecules/navbar'


const CreateSponsor = () => {
    const [ sex, setSex ] = useState("");
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
                        <BirthdaySlide />
                    )
                }

                {
                    index === 3 && (
                        <ProfessionSlide />
                    )
                }

                {
                    index === 4 && (
                        <RelationshipSlide />
                    )
                }

                {
                    index === 5 && (
                        <ContactSlide />
                    )
                }

                {
                   index === 6 && (
                       <NationalitySlide />
                   ) 
                }

                {
                    index === 7 && (
                        <AddressSlide />
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