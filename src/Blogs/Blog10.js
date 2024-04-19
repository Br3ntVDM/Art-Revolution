import React, { Component } from 'react'
import "../styles/BlogStyle.css";
import BlogBanner from "../assets/beigepat.jpg";

export default class Blog1 extends Component {
  render() {
    return (
      <div>
        <div className='blogin'style={{backgroundImage: `url(${BlogBanner})`}}>
              <div className='Blogstuff'>
                    <h1>Week 12 </h1>
                  <h2>AI and Art / React Routing</h2>
                  <p class = "blog1_text">
                  AI and Art are an interesting topics, especially with the rise of AI music this year as I have personally needed many music artists that have passed away to have their voices resurrected to perform a variety of song covers and even new songs that have been written by fans and its quite scary to hear and look at especially when I hear how accurate these voices are. These voices have even been used to make music using current famous artists’ voices to make new songs such as using Drake’s voice and The Weeknd’s voices which are 2 of the biggest stars in the modern era. 
                   </p>

                    <p class = "blog1_text">
                    I have also seen some replies about this due to it technically being copyrighted as studios technically own the music of certain artists and even their “voice” and “sound” so whenever these new songs pop up, they are taken down from the websites they appear on. Kendrick Lamar who is also a big figure in today’s music is a conscious rapper that makes music that talks about certain problems and highlights certain ideas. In a song, Kendrick states that his voice can’t be copied because of this, as a conscious rapper the AI can’t copy his emotions and style and lyricism as he is the only holder of this talent as it is his. It’s his skill that has been developed and honed over the years and that’s not something that can be copied in comparison artists that are listened to for the melody and not their lyrics can be copied as they are not special in that sense.

                    </p>

                    <p class = "blog1_text">
                    It's interesting because even when looking at AI paintings and digital art I’ve realised that it has a very similar style to paintings and while it is impressive it’s lifeless and doesn’t hold an emotion or practice that humans can create. I do however wonder where this technology will be in a few years.

                    </p>

                    <p class = "blog1_text">
                    The React lecture this week was about React Routing and I must say it’s not what I expected as I made a connection between using state to change pages. This seems a lot more intuitive, and I can see the value of having backtracking history of one’s web pages and other things. 


                    </p>

                
                 
              </div>
            </div>

      </div>
    )
  }
}