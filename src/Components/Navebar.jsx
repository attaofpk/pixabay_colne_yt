import React, { useContext } from 'react'
import PixabayContex from '../Contex/PixabayContex'

function Navebar() {
    const{fetchImageByCategory,setQuery}=useContext(PixabayContex)
    return ( 
        <>
        <div className='container text-center my3'>
            <button onClick={()=>fetchImageByCategory('nature')} type="button" className="btn btn-primary">Nature</button>
            <button onClick={()=>fetchImageByCategory('science')} type="button" className="btn btn-secondary">Science</button>
            <button onClick={()=>fetchImagByCategory('computer')} type="button" className="btn btn-light">Computer</button>
            <button onClick={()=>fetchImageByCategory('buildings')} type="button" className="btn btn-danger">Buildings</button>
            <button onClick={()=>fetchImageByCategory('sports')} type="button" className="btn btn-warning">Sport</button>
            <button onclick={()=>fetchImageByCategory('transportation')} type="button" className="btn btn-info">Transportation</button>
            <button onClick={()=>fetchImageByCategory('travel')} type="button" className="btn btn-light">Travel</button>
            <button onClick={()=>fetchImageByCategory('food')} type="button" className="btn btn-dark">Food</button>

            <button type="button" czzlassName="btn btn-link">Link</button></div>
            <div className='container' style={{width:'800px'}}>
            <input type="text" onChange={(e)=>setQuery(e.target.value)} class="form-control bg-dark text-light" />

            </div>
            </>
    )
}

export default Navebar