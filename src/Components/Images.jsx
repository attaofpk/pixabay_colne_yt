import React, { useContext } from 'react'
import PixabayContex from '../Contex/PixabayContex'

function Images() {
    const { imageData } = useContext(PixabayContex)
    return (
        <div className='container my-5'>
            <div className='flex'>
                {imageData.map((image) => <div key={image.id}>
                    <div className='item'>
                        <img src={image.largeImageURL} alt='DSFSDFS' />
                    </div>
                </div>)}</div>
        </div>
    )
}

export default Images