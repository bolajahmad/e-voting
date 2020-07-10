import axios from 'axios'

export function getCountries() {

    axios.get("http://restcountries.eu/rest/v2/all")
        .then(res => console.log(res.data))
}