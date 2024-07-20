import React, { useEffect, useState } from 'react'

function Localstore(key,defaultvalue) {

    const [value,setvalue] = useState(()=>{
        let currentvalue;

    try{
        currentvalue = JSON.parse(
            localStorage.getItem(key) || String(defaultvalue))
    }catch(e){
        console.log(e)
        currentvalue = defaultvalue;
    }
    return currentvalue;
    })

 useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(value));
 },[value,key])
  
 return [value,setvalue]
}

export default Localstore;