import React, { Component } from 'react'
import "../styles/BlogStyle.css";
import BlogBanner from "../assets/beigepat.jpg";

export default class Blog1 extends Component {
  render() {
    return (
      <div>
        <div className='blogin'style={{backgroundImage: `url(${BlogBanner})`}}>
              <div className='Blogstuff'>
                    <h1>Week 13 </h1>
                  <h2>Ethno-computing and Digital Art / React Total Build</h2>
                  <p class = "blog1_text">
                  Ethnoconputing is an interesting study when we look at the future of our civilisation and how computing and culture tie in together right now as they will in the future. Ethnocomputing is defined as the study of the interactions between computing and culture. It’s an interesting concept when we consider how culture is so well woven into our society and now computing and technology are also woven throughout society and are an integral part of not only our infrastructure but also our daily practices. When going through the reading I couldn’t help but think about our future and how computing and culture would either clash with one beating the other or would form some kind of harmony and be integrated into one another. 
                   </p>

                    <p class = "blog1_text">
                    When I think about culture, I think of it as a very personal thing that relies heavily on the interactions between people and things. This means that whenever we perform cultural rituals or norms, we do it with other people or with the inclusion of other people and it’s very personal and happens right in Infront of us whereas thinking about the computing aspect would take away from the intrapersonal bonds we share with others that have our culture. By this, I mean that when using technology is very often done alone and even when we interact with others it’s not face to face but rather through a screen and that takes away from the experience of having someone in our presence. Looking at these two aspects I wonder how they sit in conjunction with one another in the future. 


                    </p>

                    <p class = "blog1_text">
                    Digital Art is also quite weird as its art that has no physical form and that means that it will sort of fade out in a way over time. When creating digital art, it is usually stored and created on technology that is relevant to its time when it was created and now that we live in an era that makes older technology obsolete very fast it’s hard to see how art will be carried throughout time. This especially worrying when we think about how art is relevant to its specific period and so the technology it is made on is also relevant to the art, but technology is not as easily preserved as a painting is meaning that Digital art is constantly adapted to newer formats and so its loses its context in a way.

                    </p>

                    <p class = "blog1_text">
                    This week’s React Lecture is the Total React Build and it’s quite hectic. The lecture is 2 hours long and I couldn’t get the routing to World it is quite stressful. But seeing all the different lecture work together is cool and seeing how the website is created from nothing shows how awesome React is and I feel like I have barely touched the surface.

                    </p>

                    
                 
              </div>
            </div>

      </div>
    )
  }
}