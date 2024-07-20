import React, { useState } from 'react'
import QRCode from 'react-qr-code'

function Qrcode() {
    const [qrcode,setqrcode] = useState("")
    const [data,setdata] = useState("")

    function handleqrcode(){
        setqrcode(data)
        setdata('')
    }
  return (
    <div>
        <h1>Qrcode Generator.</h1>
        <div>
            <input type="text" name='qr-code' placeholder='Enter Your Name Here!' value={data} onChange={(e)=>setdata(e.target.value)} />
            <button onClick={handleqrcode}
            disabled={data && data.trim() !== "" ? false : true}>Generate</button>
        </div>
       
        <div>
        <QRCode id="qr-code-value" value={qrcode} bgColor='#fff' size={400}/>
        </div>
    </div>
   
  )
}

export default Qrcode;