import React, { Component } from 'react'
import "../styles/BlogStyle.css";
import BlogBanner from "../assets/beigepat.jpg";

export default class Blog1 extends Component {
  render() {
    return (
      <div>
        <div className='blogin'style={{backgroundImage: `url(${BlogBanner})`}}>
              <div className='Blogstuff'>
                    <h1>Week 11 </h1>
                  <h2>Crit / React Introducing State</h2>
                  <p class = "blog1_text">
                  This week we did a crit of our final internet art ideas, and I felt a little intimidated by the fact that this is our last website and it’s such a big undertaking that needs to be constantly worked upon and edited to look good and be interesting.
                   </p>

                    <p class = "blog1_text">
                    For my idea, I am still sticking to the idea of having a website that mimics a gallery especially since I want to display the website as a type of gallery and have a very artistic sense to it so I want to make it feel and look aesthetically pleasing sort of as a museum that has an art focus and that zooms in on the Renaissance period specifically as that is my favourite period of art due to the religious sense it possesses as well as the pure craftsmanship and detail each work holds. When I look at artworld from that period I always feel as if I can see the very sculptors and painters working tirelessly to create their masterpieces. 

                    </p>

                    <p class = "blog1_text">Idea 1:</p>

                    <p class = "blog1_text">
                    I would like to make a gallery that has the information of multiple paintings displayed as a collage type of thing. I was thinking of having about 10-20 paintings and sculptures that have their information such as the author and time it was created as well as any extra information. The main problem and work for this is the sheer amount of research and coding it will take to display all of those.

                    </p>

                    <p class = "blog1_text">Idea 2:</p>

                    <p class = "blog1_text">
                    I want the user of the website to take a picture of themselves and try to draw themselves in the style that the Renaissance had and then display this drawing as part of the art collection that the website has. The main problem is the code to access the camera and take a picture and then the code for the canvas for the user to draw themselves. Also, the idea was to add stickers that the user could put on themselves to make themselves look like they were art from that period.

                    </p>

                    <p class = "blog1_text">Idea 3:</p>

                    <p class = "blog1_text">
                    I want to make a game set in a gallery and display that on the website. In the game, players can walk around in 2d style and interact with paintings on the wall that will activate a pop-up that shows the painting in full detail with the author and date created. I got this idea by seeing another website that had a Unity game on it. The main issues are art making the game and making it look good aesthetically and then actually implementing the website on the site.
                
                   
                    </p>

                    <p class = "blog1_text">
                    All these ideas are good, and I think are doable but a lot of work so I should be decisive and stick to an idea. The React lecture this week was on React State and I liked how useful state looks and how fast and intuitive it is I hope to use it for my gallery idea as I think it could make the whole process many times easier.
                
                   
                    </p>
                 
              </div>
            </div>

      </div>
    )
  }
}