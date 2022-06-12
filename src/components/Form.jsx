import React, { useState } from 'react'
import Loading from './Loading'

const Form = ({ locations, setsearchLocation }) => {
    const [filterData, setfilterData] = useState([])
    const [wordEntered, setWordEntered] = useState("")


    const locationId = (nameChange) => {
        for (let i = 0; i < 125; ++i) {
            if (locations[i].name === nameChange) {
                return i
            }

        }
    }
    const onSubmitFunction = e => {
        e.preventDefault()
        setsearchLocation(locationId(e.target.firstChild.data))
        setfilterData([])
        setWordEntered("")

    }
    const handleFilter = (e) => {
        const nameSearch = e.target.value
        setWordEntered(nameSearch)
        const newFilter = locations.filter((value) => {
            return value.name.toLowerCase().includes(nameSearch.toLowerCase())
        })
        setfilterData(newFilter)
        console.log(newFilter)
    }
    return (
        <div className='imageContainer'>
            <form action='' className='form'>
                <div className=''>
                    <input type="text" placeholder='Nombre' onChange={handleFilter} value={wordEntered} />
                    {filterData.length != 0 && (
                        <div className='dataResults' >
                            {filterData
                                .map((item) => {
                                    return (
                                        <div key={item.id} className='dataResultName'>
                                            <p onClick={onSubmitFunction}>{item.name}</p>
                                        </div>
                                    )
                                }
                                )
                            }
                        </div>
                    )
                    }
                </div>
            </form>
        </div>
    )
}

export default Form