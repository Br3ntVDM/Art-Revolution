import React, { Component } from 'react'
import "../styles/BlogStyle.css";
import BlogBanner from "../assets/beigepat.jpg";

export default class Blog1 extends Component {
  render() {
    return (
      <div>
        <div className='blogin'style={{backgroundImage: `url(${BlogBanner})`}}>
              <div className='Blogstuff'>
                    <h1>Week 7 </h1>
                  <h2>African Digital Arts / Arraysc</h2>
                  <p class = "blog1_text">
                        this week i decide to focus on the Art gallery theme and so i visited the standard bank gallery and it was an awesome experience.
                    </p>

                    <p class = "blog1_text">
                    when art comes to mind i always think about the mona lisa and the last supper so in inspiration i decided to make the website about the rennaissance as i think it would be an intersting theme to explore and would make the experience really broad and fascinating.
                        
                    </p>

                    <p class = "blog1_text">
                    in terms of work ii focussed mainly on layering out my website and looking at the aethetic aspect of the website. i also wanted to decdie on a bigger internetart piece so research is the main theme of the week.
                    
                    </p>

                    <p class = "blog1_text">
                    i really like the arrays lecture i thick that arrays are quite useful when coding and cant wait to put the in practice.
                    
                    </p>

                    <p class = "blog1_text">
                This week i was quite lazy and hoped to do more work but unforumantly i was lazy and underachieved hopefully the following weeks i could be busier and more motivated to work in gernal.
                    
                    </p>
                 
              </div>
            </div>

      </div>
    )
  }
}