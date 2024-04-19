import React, { Component } from 'react'
import "../styles/Home.css";
import HomepageBanner from "../assets/design4.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className='home'style={{backgroundImage: `url(${HomepageBanner})`}}>
        <div className='headerContainer'>
          <h1>The Renaissance</h1>
          <p>Art Revolution is a website aimed at showcaseing the arts and bringing about a sense of enthusiasism to the arts. The revolution is to reiginite the passion that people had for the older arts such as oil painting and sculpting. therfore the main theme and focus of this website is to relive the Renaissance and bring about a new evolution to artistic mind. This website is meant to show information regarding the arts as well as to show them off.</p>

        </div>
      </div>
    )
  }
}
