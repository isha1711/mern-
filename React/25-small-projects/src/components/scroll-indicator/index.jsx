import React, { useEffect, useState } from 'react'
import "./scroll.css"

function Scroll({url}) {
    const [loading , setloading] = useState(false);
    const [error , seterror] = useState("");
    const [data,setdata ] = useState([]);
    const [scrollper , setscrollper] = useState([]);

    async function fetchdata(geturl){
        try{
            setloading(true);
            const response = await fetch(geturl);
            const data = await response.json();
            if (data && data.products && data.products.length > 0){
                setdata(data.products)
                setloading(false)
            }

            console.log(data)
        }catch(e){
            console.log(e)
            seterror(e.message)
            setloading(false)
        }
    }

    function handlescroll(){
        const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight || document.documentElement.clientHeight;

        setscrollper((scrolled/height) * 100)
    }
    useEffect(()=>{
        fetchdata(url)
    },[])

    useEffect(()=>{
        window.addEventListener("scroll",handlescroll);
        return ()=>{
            window.removeEventListener("scroll" , ()=>{});
    };
    })

    if(loading){
        return <div>Loading Please Wait.</div>
    }

    if(error){
        return <div>Error Occured {error}</div>
    }

  return (
    <div>
         <div>
      <div className="top-container">
        <h1>Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollper}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : "can't able to load data"}
      </div>
    </div>
    </div>
  )
}

export default Scroll;