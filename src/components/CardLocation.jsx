import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Loading from './Loading'


const CardLocation = ({ resident }) => {

    const [character, setcharacter] = useState()
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        axios.get(resident)
            .then(res => {
                setcharacter(res.data)
                setisLoading(false)
            })

            .catch(error => console.log(error))
    }, [])

    return (
        <article className='card'>
            {isLoading ?
                <Loading /> :
                <div className='locationCont'>
                    <img src={character.image} alt="" />
                    <div className='statusCont'>
                        <h2><span>Nombre: </span>{character.name}</h2>
                        <h2 id="status"><span>Status: </span>{character.status}</h2>
                        <h2><span>Origen: </span>{character.origin.name}</h2>
                        <h2><span>Episodios: </span>{character.episode.length}</h2>
                    </div>
                </div>
            }

        </article>
    )
}

export default CardLocation