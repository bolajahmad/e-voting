import React, { useState, useEffect } from 'react'

import axios from 'axios'
import { useStep } from 'react-hooks-helper'

import { Wrapper, FormBox, UploadArea, SpecialButton, Div } from './createSponsor.styles'

import {
    NameSlide, GenderSlide, BirthdaySlide, ProfessionSlide,
    RelationshipSlide, ContactSlide, NationalitySlide, AddressSlide
} from '../../slides/sponsor'

import { Fieldset, Legend } from '../../slides/slide.styles'

import UploadFile from '../../atoms/inputs/uploadFileInput'
import Button from '../../atoms/buttons'
import Navbar from '../../molecules/navbar'
import Form from '../../organisms/form'


const CreateSponsor = () => {
    const [ sex, setSex ] = useState("");
    const [ countries, setCountries ] = useState(null)
    const [ error, setError ] = useState(null)

    const { index, navigation: { next, previous, go } } = useStep({steps: 9});

    useEffect(() => {
        axios.get("http://restcountries.eu/rest/v2/all?fields=name")
            .then(res => {
                setCountries(res.data)
            }).catch(err => {
                setError(err)
            })
    }, [])

    return (
        <Wrapper>
            <Navbar />

            <Div width={"20%"}> 
                <SpecialButton index={index} onClick={e => {
                    e.preventDefault();
                    previous();
                    }}>
                        <img src={require(`../../images/left.svg`)} alt="back arrow icon" height="20" width="20" />Go Back
                </SpecialButton>
            </Div>

            <FormBox>
                {
                    index === 1 && (
                        <NameSlide />
                    )
                }

                {
                    index === 8 && (
                        <GenderSlide sex={sex} setSex={setSex} />
                    )
                }

                {
                    index === 0 && (
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
                       <NationalitySlide countries={countries} error={error} />
                   ) 
                }

                {
                    index === 7 && (
                        <AddressSlide />
                    )
                }

                {
                    index === 2 && (
                        <Form enctype="multipart/form-data">
                            <Fieldset>
                                <Legend>Provide signture, choose either an image, a .PDF or .DOC:</Legend>
                                
                                <UploadArea>
                                    <UploadFile accept="image/*, .pdf, .doc">
                                        Click to select file
                                    </UploadFile>
                                </UploadArea>
                            </Fieldset>
                        </Form>
                    )
                }

                <Div width="30%" margin='1em 3em 0 5em'>
                    <Button onClick={e => {
                        e.preventDefault();
                        (index === 8) ? alert("submitted") : next();
                        }}>
                            {
                                (index === 8) ? "Create Sponsor" : "Continue"
                            }<img src={require(`../../images/right.svg`)} alt="continue arrow icon" height="20" width="20" />
                    </Button>
                </Div>
            </FormBox>
        </Wrapper>
    )
}

export default CreateSponsor
