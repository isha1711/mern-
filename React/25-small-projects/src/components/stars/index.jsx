import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import './style.css';

function Stars({noofstar=5}) {
    const [star,setstar] = useState(0);
    const [hover,sethover] = useState(0);

    function handleclick(currentindex){
        setstar(currentindex)
    }

    function handlemousemove(currentindex){
        sethover(currentindex)
    }
    function handlemouseleave(currentindex){
        sethover(star)
    }
      return (
    <div className='starrating'>
        {
            [...Array(noofstar)].map((_,index)=>{
                index += 1
               return (<FaStar
               
               key = {index}
               className={index <= (hover || star) ? "active" : "inactive"}
               onClick={()=>handleclick(index)}
               onMouseMove={()=>handlemousemove(index)}
               onMouseLeave={()=>handlemouseleave()}
               size={40}
               />)
            })
            
        }
    </div>
  )
}

export default Stars;