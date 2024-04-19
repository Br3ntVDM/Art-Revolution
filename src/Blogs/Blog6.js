import React, { Component } from 'react'
import "../styles/BlogStyle.css";
import BlogBanner from "../assets/beigepat.jpg";

export default class Blog1 extends Component {
  render() {
    return (
      <div>
        <div className='blogin'style={{backgroundImage: `url(${BlogBanner})`}}>
              <div className='Blogstuff'>
                    <h1>Week 8 </h1>
                  <h2>IxD: Interaction Design / React Introduction</h2>
                  <p class = "blog1_text">
                  I enjoyed looking at the slides for interaction design as it helped me refine my work progress and set up a plan for what I wanted to do and what I wanted my website to do. I listen to the lecture, but I struggled to get through it. Defining interaction and what it means for something to be interactive is an interesting topic as there are so many ways one could go about discussing these topics.
                   </p>

                    <p class = "blog1_text">
                    Interaction to me is something that responds to an input that you as the user provides meaning that you input data or action and the thing you input that into will give back a response of some kind. For instance, if I press the space bar which is the input that I am giving the computer will process the action I did and give out a response in the context of whatever program or system I’m using, meaning that if I am using Microsoft word it will make space between letters but if I am playing a game it will make the player character jump. Now we are talking about interaction in terms of web development, and I think a good example of this is the UI of a website. Like when I click a tab and then the tab loads that is interaction but because a website isn’t necessarily a game the website needs to be more interactive in other ways. For my website, I included a space where the user can input their data to sign up for the newsletter which is some interaction and I added blog cards that light up when the mouse hovers over them which adds more interaction.

                    </p>

                    <p class = "blog1_text">
                    In the slides, I liked following the process to make my website ad this form of planning made me make smoother progress and have a clearer vision for my future website. Laying out a step-by-step basis is useful and the fact that each step is clearly defined makes sure that I didn’t get lost in thought or within the process itself.

                    </p>

                
                 
              </div>
            </div>

      </div>
    )
  }
}