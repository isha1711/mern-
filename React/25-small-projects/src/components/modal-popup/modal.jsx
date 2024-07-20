import React from 'react'
import "./style.css"

export default function Modal({id,header,body,footer,onClose}) {
  return (
    <div id={id || "Modal"} className='modal'>
        <div className='modal-content'>
            <div className='header'>
                <span onClick={onClose} className='close-modal-icon'>&times;</span>
             <h3>{header? header :" "}</h3> 
            </div>
            <div className='body'>
                {body? (body):(<div>
                    <p>Body</p>
                </div>)}
            </div>
            <div className='footer'>
                {footer? footer :<h3>Footer</h3>}
            </div>
        </div>
    </div>
  )
}


