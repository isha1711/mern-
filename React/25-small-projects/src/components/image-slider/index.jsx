import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css"

function Image({url,limit=5,page=1}) {
    const [loading,setloading] = useState(false)
    const [error , seterror] = useState(null)
    const [currentslide,setcurrentslide] = useState(0)
    const [images,setimages] = useState([])
    
    async function fetchimage(geturl){
        try{
            setloading(true)
            const response = await fetch(`${geturl}?page=${page}&limit=${limit}`)
            const data = await response.json();

            if(data){
                setimages(data)
                setloading(false)
            }

        }catch(e){
            seterror(e.message)
            setloading(false)
        }
    }

    function handleleft(){
        setcurrentslide(currentslide === 0 ? images.length - 1 : currentslide - 1)
    }

    function handleright(){
        setcurrentslide(currentslide === images.length - 1 ? 0 : currentslide + 1)
    }

    useEffect(()=>{
        if(url !== '') fetchimage(url)
    },[url]);

    if(loading){
        return <div>Loading please wait.</div>
    }

    if(error !== null){
        return <div>Error loading {error}</div>
    }
  return (
    <div className="container">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handleleft}/>
        {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentslide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
        <BsArrowRightCircleFill  className="arrow arrow-right" onClick={handleright}/> 
        <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentslide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setcurrentslide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  )
}

export default Image;