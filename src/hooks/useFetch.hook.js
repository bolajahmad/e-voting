import React, { useState, useEffect } from 'react'

import axios from 'axios'


const useFetch = ({ URL }) => {
    const [ response, setResponse ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);

    const getResponseData = () => {
setIsLoading(true);
            axios.get(URL)
                .then(res => {
                    setResponse(res.data);
                    setIsLoading(false);
                }).catch(err => {
                    setError(err)
                })
        }

    useEffect(() => {

        getResponseData();
        
    }, []);

    return {
        response, isLoading, error
    }
}

export default useFetch;
