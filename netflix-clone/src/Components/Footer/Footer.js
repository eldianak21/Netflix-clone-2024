import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './footer.css';

const Footer = () => {
  return (
   <div className='footer_outer_container'>
    <div className='footer_inner_container'>
      <div className='footer_icons'>
        <FacebookOutlinedIcon/>
        <InstagramIcon/>
        <YouTubeIcon/>
      </div>  
      <div className='footer_data'>
        <div>
          <ul>
            <li>Audio Discription</li> 
            <li>Investor Relations</li> 
            <li>Legal Notice</li> 
          </ul>
        </div> 
        <div>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookies Preference</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Gift Card</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className='Service_code'>
        <p>Service Code</p>
      </div>
      <div className='Copy-write'>
        &copy; 1997-2024 Netflix, Inc
      </div>
    </div>
   </div>
  )
}
export default Footer
