import React, { useState } from 'react'

import axios from 'axios'
import { useStep } from 'react-hooks-helper'

import { Wrapper, FormBox, SpecialButton, StyledLink } from './createSponsor.styles'

import {
    NameSlide, GenderSlide, BirthdaySlide, ProfessionSlide, 
    RelationshipSlide, ContactSlide, NationalitySlide, AddressSlide
} from '../../slides/sponsor'

import Form from '../../organisms/form'
import UploadFile from '../../atoms/inputs/uploadFileInput'

import Navbar from '../../molecules/navbar'


const CreateSponsor = () => {
    const [ sex, setSex ] = useState("");
    const [ countries, setCountries ] = useState([]);

    const { index, navigation: { next } } = useStep({steps: 9});

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

            <StyledLink to="/" /* onClick={e => {
                e.preventDefault();
                previous();
                }} */>
                    <img src={require(`../../images/left.svg`)} alt="back arrow icon" height="20" width="20" />Go Back
            </StyledLink>

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
                            <UploadFile accept="image/*, .pdf">Upload your signature</UploadFile>
                        </Form>
                    )
                }

                <SpecialButton onClick={e => {
                    e.preventDefault();
                    next();
                    }}>
                        Continue<img src={require(`../../images/right.svg`)} alt="continue arrow icon" height="20" width="20" />
                </SpecialButton>
            </FormBox>
        </Wrapper>
    )
}

export default CreateSponsor