import React from 'react'

function Header({head}) {
  return (
    <div style={{backgroundColor: '#f6f8fc',
    height: '8%'}}>
      <ul style={{listStyle: 'none',
display: 'flex',
justifyContent: 'space-evenly'}}>
        <li><input type='text' placeholder='Search'></input></li>
        <li> <button>Active</button></li>
        {head.map(hm => (
                  <div> <h2>{hm}</h2> </div>
              ))}
      </ul>
      
     

    </div>
  )
}

export default Header;