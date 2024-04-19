import React, { Component } from 'react'
import "../styles/BlogStyle.css";
import BlogBanner from "../assets/beigepat.jpg";

export default class Blog1 extends Component {
  render() {
    return (
      <div>
        <div className='blogin'style={{backgroundImage: `url(${BlogBanner})`}}>
              <div className='Blogstuff'>
                    <h1>Week 4 </h1>
                  <h2>Conceptualising your Artwork / Revision - APIs</h2>
                        <p class = "blog1_text">
                            The technical video this week was extremely helpful, and it aided me a lot in my understanding of APIs. Last year I struggled to grasp how APIs work and how to use them it was a real problem that cost me a lot of marks. Now that I have a better grasp on APIs, I think I will be able to incorporate them a lot better into my website and use them to a fuller potential.
                        
                        </p>

                        <p class = "blog1_text">
                            So far, I like the revision videos they help me to solidify the work we did last year, and it makes me feel more secure in the fact that I have done the coding work before but just did not understand the logic and flow as well as these revision videos help me do. The more we do, the better I think I will become, and it will help me in the long term to catch up to industry standards and produce better pieces of work.
                        
                        </p>

                        <p class = "blog1_text">
                            In terms of brainstorming, I was thinking about art in the sense of the Renaissance era, and it came to my mind to make a website based on that period. Meaning that the website would be filled with all the old oil painting styles that were popular around that period. I thought this would look cool in terms of the look and aesthetic feel of the website. I was thinking of exploring the old artwork we see in movies, such as the popular Mona Lisa, and using that artwork as a basis for designing the web pages for my website. It would feature a border and look like the content would be on a canvas or old scroll-type vibes.
                        
                        </p>

                        <p class = "blog1_text">
                            I was also thinking of having a scrolling timeline when things pop up the more you scroll down as I think this would be an interesting display of art as the pieces come together and fall into view. Like pieces of art and different patterns and special painters.
                        
                        </p>

                        <p class="blog1_text">
                            My thoughts on the Internet are that it never seems to stop surprising me with how it changes and evolves and how it becomes something newer and better within such a small passing of time. The web is interesting because it is such a huge network that spreads and spans the entire world, allowing for innovation and things to be wide-ranging. Net art fascinates me in terms of how it is made and just how pleasing it is. I never thought of the web art that I see nowadays it’s an interesting medium with loads of potential and it can become bigger and better at any moment.

                        </p>
                 
              </div>
            </div>

      </div>
    )
  }
}