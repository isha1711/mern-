import React, { useEffect, useState } from 'react'
import User from './user';
import "./style.css"

function Github() {
const [userdata,setuserdata] = useState(null)
const [loading,setloading] = useState(false);
const [username,setusername] = useState('')

async function fetchgithub(){
    try{
        setloading(true)
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json();

        console.log(data)
        if(data){
            setusername('')
            setuserdata(data)
            setloading(false)
        }
    }catch(e){
        console.log(e)
    }
}

function handlesubmit(){
    fetchgithub()
}

    useEffect(()=>{
        fetchgithub();
    },[])

    if (loading){
        return <div><h3>Loading Please Wait.</h3></div>
    }
  return (
    <div className='github-profile-container'>
        <div>
            <input
            name='search-by-username'
            type='text'
            placeholder='Search Username'
            value={username}
            onChange={(e)=>setusername(e.target.value)}
            />
            <button onClick={handlesubmit}>Search </button>
            {
                userdata !== null ? <User user={userdata} /> :null
            }
        </div>
    </div>
  )
}

export default Github;