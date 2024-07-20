
import React, { useEffect, useState } from 'react'

function Randomcolor() {
    const [typeofcolor , settypeofcolor] = useState('hex');
    const [color,setcolor] = useState('#000000');

    function randomcolor(length){
        return( 
            Math.floor(Math.random()*length)
        )
    }
    function handlehex(){
        const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexcolor = '#';
        let i;
        for(i=0;i<6;i++){
            hexcolor += hex[randomcolor(hex.length)]
        }
        console.log(hexcolor)
         setcolor(hexcolor)

    }

    function handlergb(){
        const r = randomcolor(256)
        const g = randomcolor(256)
        const b = randomcolor(256)
        console.log(`rgb(${r},${g},${b})`)
        setcolor(`rgb(${r},${g},${b})`);

    }

    useEffect(
        ()=>{
            if(typeofcolor === "rgb") handlergb();
            else handlehex();
        },[typeofcolor]
    )
  return (
    <div style={{height: '100vh',
        width: '100vw',
        background: color,
    }}>
        <button onClick={()=> settypeofcolor=("hex")}>Hex</button>
        <button onClick={()=> settypeofcolor=("rgb")}>Rgb</button>
        <button onClick={typeofcolor === "hex" ? handlehex : handlergb}>Random color</button>

        <div>
            <h3>{typeofcolor === "rgb" ? "rgb color":"hex color"
        } </h3>
            <h3>{color}</h3>
            </div>
    </div>
  )
}

export default Randomcolor;