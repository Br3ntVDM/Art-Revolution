import React, { Component } from 'react'
import "../styles/BlogStyle.css";
import BlogBanner from "../assets/beigepat.jpg";

export default class Blog1 extends Component {
  render() {
    return (
      <div>
        <div className='blogin'style={{backgroundImage: `url(${BlogBanner})`}}>
              <div className='Blogstuff'>
                    <h1>Week 10 </h1>
                  <h2>Code Art (for real this time) / React Props</h2>
                  <p class = "blog1_text">
                  This topic was exceptional, and it opened my eyes to the potential that can be grasped as code art is something that can be expanded on and evolve to great levels. When thinking about code art I never really imagined that the boundaries between them we so blurred I never really considered Digital art as “Art” per se because to me art was always something physical more than anything else especially when looking at things like painting, sculpture, and more abstract things like setting up scenes. 
                   </p>

                    <p class = "blog1_text">
                    I have always had this bias, especially in high school when I was trying to get into the National School of Arts, I always looked at art as a physical medium and less as a digital medium. This is also because whenever I made art, I would always have to pick up a pen or a paintbrush and draw the art out or create a sculpture of some sort so to be the fine arts was always what I considered to be art but ever since starting varsity this concept has been broadly expanded on as now I look at games as art and now I look at digital art in a new light. For me, the digital medium was always meant for entertainment in some form but not as “Art” Now that I have a deeper look at the behind-the-scenes of the construction of digital art I always think that technology has come a long way and that art is now such a broad concept to me cause even things like poems and literature is art now.


                    </p>

                    <p class = "blog1_text">
                    Code art is so unique because it is a language, digital and Art all at the same time and looking at its potential it’s difficult to see where this medium will end up one day, especially with the rise of VR and AR in the technology world. Code art provides a new unique look at art that is easily accessible and provides a different viewing pleasure. I find this medium hard to critique and I think that once we see the larger potential of it art will blossom into something very different shortly.

                    </p>

                    <p class = "blog1_text">
                    I enjoyed looking at the reading by Brand, S. – 2019 Codeart I saw some interesting concepts and pieces that I would never have thought of by myself and I found myself wondering how much effort and thought was put into each detail of code. The React lecture this week was about props and I was a little confused, but I can see the use of props and can’t wait to start using them to create my website, though I must say it looks like a great undertaking. 


                    </p>

                
                 
              </div>
            </div>

      </div>
    )
  }
}