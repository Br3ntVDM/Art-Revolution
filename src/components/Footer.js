import React, { Component } from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import "../styles/Footer.css";


export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
       
        <ul class="social_icon">
        <li>
          <a href="#"><FacebookIcon/></a>
        </li>
        <li>
          <a href="#"><TwitterIcon/></a>
        </li>
        <li>
          <a href="#"><PinterestIcon/></a>
        </li>
        <li>
          <a href="#"><InstagramIcon/></a>
        </li>
      </ul>
      <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <p>&copy;2023 ArtRevolution | All Rights Reserved</p>
      </div>
    )
  }
}
