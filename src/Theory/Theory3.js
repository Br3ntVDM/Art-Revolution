import React, { Component } from 'react'
import "../styles/BlogStyle.css";
import BlogBanner from "../assets/beigepat.jpg";

export default class Blog1 extends Component {
  render() {
    return (
      <div>
        <div className='blogin'style={{backgroundImage: `url(${BlogBanner})`}}>
              <div className='Blogstuff'>
                    <h1>Internet art Description</h1>
                  <h2>Internet Artwork - Rationale and Reflection</h2>
                  <p class = "blog1_text">
				My internet art was a half successful in the fact that the first part came out well but the second need more work and need to be amped up to look better.
			
			</p>

			<p class = "blog1_text">
				The timeline I created works great and even displays artworks of the top 10 most expensive artworks ever. I also add the source so that the user may see where the information comes from. I really liked the look and feel of the timeline it was well done and fits seamlessly into the style of the website. The aesthetics and artworks really make one want to keep scrolling and adds a sense of depth into the website.
			
			</p>

			<p class = "blog1_text">
				Secondly the camera and canvas need more work. I got the camera to work and so the is a video that plays in the section as a window that shows the user. The bad think is that it is a video and not an image meaning that its constantly moving and sometimes hard to draw. I tried using this to my advantage by making so that one would be able to see their features live and so will be able to replicate a drawing easier.
			
			</p>

			<p class = "blog1_text">
				The bad part lies with the canvas I could not get it to work as intended and so the bigger picture of the internet art in terms of interactivity failed. The canvas needs more work and so I will be happy to continue to work on it and allow it to look and feel better in the future.

			</p>

			<h3>Reflection</h3>

			<p class = "blog1_text">
				I think that the reason I didn’t achieve the goal was because I didn’t work on the rat long enough. I though the process would be easier, so I didn’t dedicate enough time to fully explore the code and get resources to replicate my vision. I think that if I continue to work on it, I will be able to eventually achieve the desired effect and bring the piece together as a whole.

			</p>
                 
              </div>
            </div>

      </div>
    )
  }
}