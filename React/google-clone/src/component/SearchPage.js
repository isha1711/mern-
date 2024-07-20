import React, { useEffect, useState } from 'react';
import '../pages/searchpage.css';
import { useStateValue } from "../StateProvider";
import useGoogleSearch from '../useGoogleSearch';
import { Link } from 'react-router-dom';
import Search from '../component/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // const [debouncedTerm, setDebouncedTerm] = useState(term);
  const { data, error } = useGoogleSearch(term);

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setDebouncedTerm(term);
  //   }, 300); // Debounce time set to 500ms

  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, [term]);

  if (error) {
    console.error('Error fetching search data:', error);
  }

  // console.log('Data in component:', data); 

  return (
    <div className='searchpage'>
      <div className='searchpage_header'>
        <Link to="/">
          <img
            className='searchpage_logo'
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
          />
        </Link>
        <div className='searchpage_body'>
          <Search hideButtons/>
          <div className='search_options'>
            <div className='search_pageleft'>
              <div className='search_option'><Link to='/all'>All</Link></div>
              <div className='search_option'><Link to='/news'>News</Link></div>
              <div className='search_option'><Link to='/images'>Images</Link></div>
              <div className='search_option'><Link to='/shopping'>Shopping</Link></div>
              <div className='search_option'><Link to='/videos'>Videos</Link></div>
              <div className='search_option'><Link to='/maps'>Maps</Link></div>
              <div className='search_option'><Link to='/books'>Books</Link></div>
              <div className='search_option'><MoreVertIcon /><Link to='/more'>More</Link></div>
            </div>
            <div className='search_pageright'>
              <div className='search_option'><Link to='/tools'>Tools</Link></div>
            </div>
          </div>
        </div>
      </div>
      {term && data?.items?.length > 0 && (
        <div className='result'>
          {data.items.map((item, index) => (
            <div key={index} className='searchPage_result'>
              <a href={item.link}>
                {item.pagemap?.metatags?.length > 0 && item.pagemap?.metatags[0]['og:site_name'] && (
                  <div className="searchPage_siteName">{item.pagemap.metatags[0]['og:site_name']}</div>
                )}
                <img className='search_image' src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt='' />
                {item.displayLink}
              </a>
              <a className="searchPage_resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage_resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;

