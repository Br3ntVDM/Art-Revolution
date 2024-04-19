import React, { Component } from 'react'
import "../styles/BlogStyle.css";
import BlogBanner from "../assets/beigepat.jpg";

export default class Blog1 extends Component {
  render() {
    return (
      <div>
        <div className='blogin'style={{backgroundImage: `url(${BlogBanner})`}}>
              <div className='Blogstuff'>
                    <h1>Week 6 </h1>
                  <h2>Code Art / Rendering Basic</h2>
                  <p class = "blog1_text">
                    this week i did very little in terms of work as there werent any reading and no lectures.
                    
                    </p>

                    <p class = "blog1_text">
                    i like dthe video about rendering it was quite helpful and i wouldnt help but get excited to see more. the lecture was ab abit hard to bare though i felt myself drifting away many times and had to bring myself back to consintrate and actually recieve information.
                        
                    </p>

                    <p class = "blog1_text">
                    This week i did narrow my themes down. i was thinking of doing something futuristic in terms of making the website feel like the future. i was thinking about making the internet art a sort of game where by the player would be able to click on parts of a ship that would load the next webpage that shows that part expanded. meaning that each section would have a page and expand as if one is exploring it.

                    </p>

                    <p class = "blog1_text">
                    the secind idea was making the website theme about fogetfulness. meaing that as the user explores the websiyte certain elemants of the wbeiste would dissapear as if they were never there. i found this an interestin concept because then the art would be the website itself and seeing how things slowly degrade and dissappear over time.
                    
                    </p>

                    <p class = "blog1_text">
                    Lastly the idea was of making an art gallery where the user would explore the gallery and be able to see different artworks. This idea is simple but the gallery has many things to hsow so i thinik that this will be really cool aethetically.
                    
                    </p>
                 
              </div>
            </div>

      </div>
    )
  }
}