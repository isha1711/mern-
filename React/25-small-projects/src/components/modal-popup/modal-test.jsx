import React, { useState } from 'react'
import Modal from './modal';
import "./style.css"

function Modaltest() {
    const [showmodal,setshowmodal] = useState(false);

    function handlemodal(){
        setshowmodal(!showmodal)
    }

    function onClose() {
      setshowmodal(false);
    }

  return (
    <div>
        <button onClick={handlemodal}>Open Modal</button>
        {
            showmodal&& (<Modal 
            id={"custom-id"}
            onClose={onClose}
            header={"Custom Header"} body={"Custom Body"} footer={"Custom Footer"}
            />)
        }
    </div>
  )
}

export default Modaltest;