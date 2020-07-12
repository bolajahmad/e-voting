import React, { useState, useEffect } from 'react'

import axios from 'axios'


const useFetch = ({ URL }) => {
    const [ response, setResponse ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const getResponseData = async () => {
            await axios.get(URL)
                .then(res => {
                    setResponse(res.data)
                }).catch(err => {
                    setError(err)
                })
        }
        setIsLoading(false);
        getResponseData();
    }, []);

    return {
        response, isLoading, error
    }
}

export default useFetch;