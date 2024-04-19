import React, { Component } from 'react'
import "../styles/BlogStyle.css";
import BlogBanner from "../assets/beigepat.jpg";

export default class Blog1 extends Component {
  render() {
    return (
      <div>
        <div className='blogin'style={{backgroundImage: `url(${BlogBanner})`}}>
              <div className='Blogstuff'>
                    <h1>Week 14 </h1>
                  <h2>React Github Deployment</h2>
                  <p class = "blog1_text">
                  This week is focused on Finishing our website and it is quite the ordeal. I’m working quite hard and putting in all the effort I can afford to I hope that the website comes together well so that I can submit it on time. It’s quite a struggle and I can only imagine that doing a full internet artwork would make this task almost 10 times harder.
                   </p>

                    <p class = "blog1_text">
                    The planning I did was quite decent before starting React I have to say that doing React now really made me feel upset I feel as if I needed more time with it and that we should have practised and refined our skills better I think that the software is amazing and the use is amazing as well, I want to develop my proficiency in using React and hope that one day I can master it properly.


                    </p>

                    <p class = "blog1_text">
                    Deploying to Github is always a problem for me I have no idea why Github hates me I hope I can learn to use it properly so that I have less stress in the future. I’m currently trying to deploy my website to be marked and I hope I can get it down before submission is due.

                    </p>

               
                 
              </div>
            </div>

      </div>
    )
  }
}