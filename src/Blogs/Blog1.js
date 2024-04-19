import React, { Component } from 'react'
import "../styles/BlogStyle.css";
import BlogBanner from "../assets/beigepat.jpg";

export default class Blog1 extends Component {
  render() {
    return (
      <div>
        <div className='blogin'style={{backgroundImage: `url(${BlogBanner})`}}>
              <div className='Blogstuff'>
                    <h1>Week 3</h1>
                  <h2>net/web art / Revision - JavaScript Fundamentals</h2>
                        <p class = "blog1_text">
                        The revised videos were quite long but I see the value in their length. For this week I liked the revision videos they helped to bolster my understanding of using JavaScript for my websites and they helped me remember the work we did last year and gave me ideas on my syntax. 
                    
                        </p>

                        <p class = "blog1_text">
                            I really enjoyed the discussion on what art is and the internet’s interaction with art and how it as a medium has produced a very different type of art and how that art is continuously evolving and changing. I like how hard it is to describe art and how everyone’s understanding is personal and subjective to them as viewers of said art. It relates to the I think of art as I believe that art’s existence is most influential to the person viewing it and that their understanding and relation to it is personal and deep. The internet is also an interesting concept and thing as it evolves, and it changes and improves with each passing of time. It’s digital and so the medium is weird due to this because of the changing iterations and ideas that people have that they can upload to the massive network that is the internet.
                        
                        </p>

                        <p class = "blog1_text">
                            I found the technical aspects of Internet art interesting as we are trying to physically describe it in terms of the coding, hardware, software and displays that it is on. I loved the breakdown of media modalities and thinking about the art as it affects the person in terms of its “feel”, the way it feels, what it is made and how it looks. This breakdown forces you to interact with the art digitally and breaks down its components.
                        
                        </p>

                        <p class = "blog1_text">
                            Lastly, I liked looking at the art about the WWW, Art using the WWW and lastly the WWW as art. It’s interesting to see how the medium affects art and vice versa. The production of art using the WWW makes an interesting interaction that can show interesting things.

                        </p>
                 
              </div>
            </div>

      </div>
    )
  }
}
