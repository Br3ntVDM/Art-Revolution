import React, { Component } from 'react'
import "../styles/BlogStyle.css";
import BlogBanner from "../assets/beigepat.jpg";

export default class Blog1 extends Component {
  render() {
    return (
      <div>
        <div className='blogin'style={{backgroundImage: `url(${BlogBanner})`}}>
              <div className='Blogstuff'>
                    <h1>Internet Art Brainstorm</h1>
                  <h2>Internet Artwork - Preparatory work</h2>
                        <p class = "blog1_text">
                        So far, my idea is first to add a timeline-style animation that flows down vertically as the user scrolls through the website. This creates an interesting experience and makes it so that more things get revealed through continuous scrolling by the user.
                        
                        </p>

                        <p class = "blog1_text">
                            I decided to use this because it also symbolises a trip through time whereby the user investigates the last to see the arts of the old and sees my favourite period in art that being the Renaissance. The user can see how a lot of the artworks from then are present and how these are the most beautified and art pieces that are not abstract. These art pieces make sense as they represent someone as well as a theme of who they represent. 
                        
                        </p>

                        <p class = "blog1_text">
                            After that I plan to bring the user into the future by the last section as the user will be able to draw themselves and so they too become an artwork thereby completing the experience of the internet art as well as allowing them to have meaningful participation on the website. The picture they draw will also be saved and displayed after this as “The best painting in the world”.
                        
                        </p>

                        <p class = "blog1_text">
                            The real challenge for this is to make the camera work to take a picture and then save that picture. Then the next part is for the canvas to feel good and look good as well as being interactable to allow the user to draw themselves. Lastly the picture on the canvas must then be saved and then framed to produce a framed artwork in the section after that.

                        </p>

                        <p class = "blog1_text">
                            Note: I would like to add a sort of filter or drag and drop so that the user may customise themselves on screen to look like they are from the renaissance period. I would also like the use to be able to trace the picture they too of themselves if they want meaning that they can place their picture under the canvas to trace.

                        </p>
                 
              </div>
            </div>

      </div>
    )
  }
}