import React, { Component } from 'react'
import "../styles/Blogs.css";
import BlogmainBanner from "../assets/angelsky.jpg"
import {TimelineList} from '../helpers/TimelineArt';
import ArtItem from '../components/ArtItem';

export default class Art extends Component {
  render() {
    return (
        <div className= "art"style={{backgroundImage: `url(${BlogmainBanner})`}}>
          <h1 className="artTitle">Blog Menu</h1>
          <div className='artList'>
            {TimelineList.map((artItem, value) => {
              return(
                <ArtItem value={value} name={artItem.name} button={artItem.button} image={artItem.image} discription={artItem.description}/>
              )
            })}

          </div>
        </div>
    )
  }
}
