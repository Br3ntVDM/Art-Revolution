import React, { Component } from 'react'
import "../styles/BlogStyle.css";
import BlogBanner from "../assets/beigepat.jpg";

export default class Blog1 extends Component {
  render() {
    return (
      <div>
        <div className='blogin'style={{backgroundImage: `url(${BlogBanner})`}}>
              <div className='Blogstuff'>
                    <h1>Week 5 </h1>
                  <h2>The history of the field / Fetch JSON</h2>
                  <p class = "blog1_text">
                    this week i didnt do much in terms of work ii simply read the reading and looked by some ideas for a theme for my website and started to think about what i could potentially do for my internet artwork.	

                    </p>

                    <p class = "blog1_text">
                    i really liked the first reading of this week and viewing the 10 artistic masterpieces  meants to be experienced online. this showed me how the internet as a medium has developed and become something truly amazing in terms of artistic standing as we as artistic production. This medium has massive potential beacuse its digital meaning that the rate of production adn what it can produce far exceeds those of other mediums. There is a set back though i beive that for my personally physical art is better becaus eof the experience that encompases it meaning that sometimes y0ou are able to feel and circulate an object that represents something. 		
                    </p>

                    <p class = "blog1_text">
                    i think that internet art still has a lot of potential and i cant wait to see more of it. For me i hope that ths artform wont take over all forms of art as i belive that seeing something physically has a different experience and give you this sense of grandness.

                    </p>
                 
              </div>
            </div>

      </div>
    )
  }
}