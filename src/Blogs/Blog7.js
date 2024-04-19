import React, { Component } from 'react'
import "../styles/BlogStyle.css";
import BlogBanner from "../assets/beigepat.jpg";

export default class Blog1 extends Component {
  render() {
    return (
      <div>
        <div className='blogin'style={{backgroundImage: `url(${BlogBanner})`}}>
              <div className='Blogstuff'>
                    <h1>Week 9 </h1>
                  <h2>How we code matters / React Implementation</h2>
                  <p class = "blog1_text">
                  This week’s lecture was interesting as the overall theme to me was first Code and secondly literacy. The lecture “How we code matters” really put coding in a new light for me especially since I am used to coding alone and figuring out the code I do on my meaning that if I don’t use naming conventions and make up random stuff as I go it’s ok because at the end of the day, I understand the logic and I can see, read and describe what I have done and what the code does.
                   </p>

                    <p class = "blog1_text">
                    This was interesting as in the broader aspects of things I realised how detrimental this could be when working in a group or working with other coders could make me a liability when it comes to working together as we as coders need to be able to communicate through our code as a form of language. This lecture made me realise that code literacy is something that needs to be carried out through each piece of code I make as this code will be seen by others and need to be worked on and edited by other as well and if they cannot read the code then they can’t help or do anything to improve reuse the code that we write. This also means that the best code is the easiest to understand and the most adaptable in terms of future iterations. This helped me realise that critical thinking is integral to coding and that we should logically layout how to code as a road map that we as the creator can understand and so that someone else as an editor can understand.


                    </p>

                    <p class = "blog1_text">
                    This week we started our first React lecture and I realised how daunting React can be it looks tough, but I am excited about the possibilities and the utility React can add to my arsenal. I would like to work towards designing my app and React has that capability I wouldn’t mind being a full-time developer and making websites as well as making apps it looks fun and cool especially when I look at the design aspect of it and how aesthetically pleasing I can make these apps and websites look, functionality is also really important so I want to improve and get good at React.

                    </p>

                 
              </div>
            </div>

      </div>
    )
  }
}