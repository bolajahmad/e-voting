import React, { useState, useEffect } from 'react'

import axios from 'axios'
import { useStep } from 'react-hooks-helper'

import useFetch from '../../hooks/useFetch.hook'

import { Wrapper, FormBox, UploadArea, SpecialButton, Div } from './createSponsor.styles'

import {
    NameSlide, GenderSlide, BirthdaySlide, ProfessionSlide,
    RelationshipSlide, ContactSlide, NationalitySlide, AddressSlide
} from '../../slides/sponsor'

import UploadFile from '../../atoms/inputs/uploadFileInput'
import Button from '../../atoms/buttons'
import Navbar from '../../molecules/navbar'
import Form from '../../organisms/form'


const CreateSponsor = () => {
    const [ sex, setSex ] = useState("");

    const { response, error } = useFetch("http://restcountries.eu/rest/v2/all?fields=name");

    const { index, navigation: { next, previous, go } } = useStep({steps: 9});

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
                       <NationalitySlide countries={response} error={error} />
                   ) 
                }

                {
                    index === 7 && (
                        <AddressSlide />
                    )
                }

                {
                    index === 8 && (
                        <Form enctype="multipart/form-data">
                            <UploadArea>
                                <UploadFile accept="image/*, .pdf, .doc">
                                    Click to select file
                                </UploadFile>
                            </UploadArea>
                        </Form>
                    )
                }

                <Div width="40%" margin='1em 3em 0'>
                    <Button onClick={e => {
                        e.preventDefault();
                        (index === 8) ? go() : next();
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