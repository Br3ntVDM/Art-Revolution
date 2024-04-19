import React, { Component } from 'react';
import "../styles/Design.css";
import DesignBanner from "../assets/design3.jpg";
import DesignBanner2 from "../assets/design2.jpg";
import DesignBanner3 from "../assets/design1.jpg";
import HwireFrame1 from "../assets/wireframe1-home.jpg";
import HwireFrame2 from "../assets/wireframe2- home.jpg";
import HwireFrame4 from "../assets/wireframe4 home.jpg";
import BwireFrame1 from "../assets/wireframe1-blog.jpg";
import BwireFrame2 from "../assets/wireframe2- blog.jpg";
import StyleImg1 from "../assets/style1.jpg";
import StyleImg2 from "../assets/style2.jpg";
import StyleImg3 from "../assets/style3.jpg";

export default class Design extends Component {
  render() {
    return (
        <div >
            <div className='design'style={{backgroundImage: `url(${DesignBanner})`}}>
              <h1>My Design section</h1>
              <div className='pagewireframes'>
                <h2>My Homepage Wireframes</h2>
                <img src={HwireFrame1}/>
                <img src={HwireFrame2}/>
                <img src={HwireFrame4}/>


              </div>
              <div className='blogwireframes'>
              <h2>My Blog page Wireframes</h2>
              <img src={BwireFrame1}/>
              <img src={BwireFrame2}/>
s
              </div>

            </div>

            <div className='design'style={{backgroundImage: `url(${DesignBanner2})`}}>
              <div className='stylepics'>
                  <h2>Style Guide</h2>
                  <img src={StyleImg1} />
                  <p>i played around with the different font and i really liked new roman times so i decided to use it. It gave of a very fantasy and a vibe that reminded me of "TYPO" so i felt like it fit well. i tried to emulate the website of apple becaus ei liked the aethetic feel and th esections that it used in order to make the website feel professionally done.</p>
                  <img src={StyleImg2} />
                  <img src={StyleImg3} />
              </div>
            </div>

            <div className='design'style={{backgroundImage: `url(${DesignBanner3})`}}>
              <div className='IxDstuff'>
                  <h2>IxD Process</h2>
                  <p>Goal alignment. My Goal is to create a website that emulates the feeling of walking through a gallery that later becomes a studio.</p>
                  <p>Conetnt Maping and user flow: The website starts at the hompage that shares the websites purpose and goals. the user can enter thier information on this page but it doesnt do anything yet its meant as a way to sign up forwebsite services. the top of each page has a nav bar that will allow th user to go throough each page. on the blog page there is a list of cards that the user can click on to eneter specific blog posts.</p>
                  <p>Interface Elements : i added the cards in the blog sections for easier navigation to specific blog posts and the  user input on the homepage to stay true to the theme lastly i added an image scroll bar to the wireframes so that the looked and felt better. i added a timeline to the internet art section as well as a camera function.</p>
                  <p>Style process: This website was inspire by an experience i had when i visited the standard bank gallery and it got be thinking of the arts. the experience made me feel like drawing and so i drew a few things that made me think of the past. One of those things being the Assassins creed games and my favourite title in this being the ezio collection which took place in the renaissance period.</p>
                  
                 
              </div>
            </div>

            <div className='design'style={{backgroundImage: `url(${DesignBanner})`}}>
              <div className='IxDstuff'>
                  <h2>Thoughts and Reflection</h2>
                  <p>
                  This time around I really struggled to recreate my website as it was out of React. The main challenge is the packages and important and exporting things. I really need a lot more practice redoing my website and getting used to React. I got confused with the mixing of CSS and JavaScript and it threw me off completely, but I did manage to put something together.
                  </p>
                  <p>
                  My next goals are first to make my website more aesthetically pleasing. Secondly, learn how to implement code better for images and paragraphs. Thirdly start planning for my Internet art and lastly to make my website more interactive.
                  </p>
                 
              </div>
            </div>

            <div className='design'style={{backgroundImage: `url(${DesignBanner2})`}}>
              <div className='IxDstuff'>
                  <h2>internet Artwork</h2>
                  <p>
                    This time around i found that creating an internet artwork was really difficult and i just struggled my way through almost everything. i wanted to include a game i made on unity but i could not find any useful tutorilas and guides so i ultimately gave up on doing that and instead opted to make a canvas as in my original idea but even then my artworks did not turn out how i would of liked them to. I wish i actually figured out how to implement the unity game properly but no matter how i tried i just could not get it to work as i wanted it to the game would have many compling errors
                 
                   </p>
                  <p>
                    i did learn quite alot about react through the process of created my artworks. The power and variety that this software holds is really amazing and one can really see that if a person knows what they are dowing with react the things they can create will have massive potential and they can truly make very facinating things.
            
                   </p>

                   <h2>added</h2>

                   <p>
                    i decided to redo the footer of the website and make the blog size more justified to the content. i started another website becaus ei thought of rebulding from scratch but that endevour was useless and i messed up the cod on that website so i continued building here. i can say that i am atleast happy at how this website turned out and i cant wait to see what else i can do using react. I hope i can build a very useful portfolio with this knowledge.

                   </p>
                 
              </div>
            </div>

        </div>
    )
  }
}
