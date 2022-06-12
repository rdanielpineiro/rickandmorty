import React from 'react'

const CardLocationHeader = ({ locations }) => {
    return (
        <div className='containerHeader'>
            <div className='cardLocationHeader'>
                <h2>{locations.name}</h2>
            </div>
            <div className='contLocationHeader'>
                <h3><b>Tipo: </b>{locations.type}</h3>
                <h3><b>Dimension: </b>{locations.dimension}</h3>
                <h3><b>Habitantes: </b>{locations.residents.length}</h3>
            </div>
        </div>
    )
}

export default CardLocationHeader