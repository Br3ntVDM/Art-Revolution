import React, { Component } from 'react'
import "../styles/Blogs.css";
import BlogmainBanner from "../assets/angelsky.jpg"
import {BlogList} from '../helpers/BlogList';
import BlogItem from '../components/BlogItem';

export default class Blogs extends Component {
  render() {
    return (
        <div className= "blog"style={{backgroundImage: `url(${BlogmainBanner})`}}>
          <h1 className="blogTitle">Blog Menu</h1>
          <div className='blogList'>
            {BlogList.map((blogItem, value) => {
              return(
                <BlogItem value={value} name={blogItem.name} button={blogItem.button} image={blogItem.image}/>
              )
            })}

          </div>
        </div>
    )
  }
}
