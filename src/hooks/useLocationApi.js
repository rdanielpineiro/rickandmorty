import axios from 'axios'
import { useState, useEffect } from 'react'

const useLocationApi = (searchLocation) => {

    const [locations, setLocations] = useState()
    const [isLoading, setisLoading] = useState(true)
    const locationsArray = Array.from(Array(126), (el, i) => i + 1)
    useEffect(() => {
        const url = `https://rickandmortyapi.com/api/location/${locationsArray}`
        axios.get(url)
            .then(res => {
                setLocations(res.data)
                setisLoading(false)
            })
            .catch(error => console.log(err))
    }, [])


    return { locations, isLoading }

}

export default useLocationApi