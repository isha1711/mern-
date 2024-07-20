import React from 'react'
import Localstore from './uselocalstorage';

function Theme() {
    const [theme , settheme] = Localstore=("theme" ,"dark");
    function handletheme(){
        settheme(theme === "light" ? "dark" : "light");
    }
    console.log(theme);
  return (
    <div className='Container'>
        <div className="light-dark-mode" data-theme={theme}>
            <p>Hello World!</p>
            <button onClick={handletheme}>Change Theme</button>
        </div>
    </div>
  )
}

export default Theme;