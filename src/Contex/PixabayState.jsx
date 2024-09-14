import React, { useEffect, useState } from 'react'
import PixabayContex from './PixabayContex'

function PixabayState(props) {
    const [imageData, setImageData] = useState([])
    const [query, setQuery] = useState(['london'])
    const api_key='45979742-a04d381677a8eedaba7204206'
    useEffect(() => {
        const fectcData=async()=>{
            const api=await fetch(`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true`)
        const data=await api.json()
        setImageData(data.hits)
            console.log(data.hits)
        }
        fectcData();
      
     
     
    }, [query])
    const fetchImageByCategory =async(cat)=>{
        const api=await fetch(`https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&
            pretty=true`);
            const data=await api.json();
            setImageData(data.hits);
            console.log(data.hits);
    };
    

  return (
    <PixabayContex.Provider value={{imageData,fetchImageByCategory,setQuery}}>{props.children}</PixabayContex.Provider>
  )
}

export default PixabayState