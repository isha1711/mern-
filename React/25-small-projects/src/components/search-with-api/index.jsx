import React, { useEffect, useState } from 'react'
import Data from './user'

function Search() {
    const [loading,setloading] = useState(false)
    const [error,seterror] = useState(null)
    const [user,setuser] = useState([])
    const [searchparam,setsearchparam] = useState("")
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);
  

    async function fetchuser(){
        try{
            setloading(true)
            const res = await fetch("https://dummyjson.com/users")
            const data = await res.json()

            console.log(data)
            if(data && data.users && data.users.length){
                setuser(data.users.map((userItem) => userItem.firstName))
                setloading(false)
            }
        }catch(e){
            seterror(false)
            setloading(false)
            console.log(e)
        }
    }
    function handlechange(e){
        const query = e.target.value.toLowerCase();
        setsearchparam(query);
        if (query.length > 1) {
          const filteredData =
            user && user.length
              ? user.filter((item) => item.toLowerCase().indexOf(query) > -1)
              : [];
          setFilteredUsers(filteredData);
          setShowDropdown(true);
        } else {
          setShowDropdown(false);
        }
    }

    function handleClick(event){
        setShowDropdown(false)
        setsearchparam(event.target.innerText)
        setFilteredUsers([])
      }

    useEffect(()=>{
        fetchuser()
    },[])

    // if(loading){
    //     return <div>loading please wait</div>
    // }
  return (
    <div>
         
        <input
          value={searchparam}
          name="search-users"
          placeholder="Search Users here..."
          onChange={handlechange}
        />
      
        {showDropdown && <Data handleClick={handleClick} data={filteredUsers} />}
    </div>
  )
}

export default Search;