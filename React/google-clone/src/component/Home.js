import React from 'react'
import {Link} from 'react-router-dom'
import '../pages/Home.css'
import AppsIcon from '@mui/icons-material/Apps'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ScienceIcon from '@mui/icons-material/Science';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import Search from '../component/Search'


function Home() {
  return (
    <div className='home'>
        <div className='header'>
            <div className='header_right'>
            <div className='book'>
                <FolderOutlinedIcon fontSize='small' className='folder'/>
                <Link to="/bookmark">All Bookmarks</Link>
            </div>
            <div className='link'>
            <Link to="/gmail">Gmail</Link>
            <Link to="/images">Images</Link>
            <ScienceIcon className='searchlab'/>
            <AppsIcon className='appicon'/>
            <AccountCircleIcon fontSize='large' className='avatar'/>
              
                </div>
            </div>
        </div>
        <div className='homebody'>
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
       <div className='inputcontainer'>
       <Search/>
       </div>
        </div>
    </div>
  )
}

export default Home;