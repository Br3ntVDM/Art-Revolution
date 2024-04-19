import React, { Component } from 'react'
import Logo from '../assets/logo.jpg';
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";
import ViewListIcon from '@mui/icons-material/ViewList';

export default class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            openlinks : false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState(prevState => ({
            openlinks : !prevState.openlinks
        }));

    }


  render() {
    return (
      <div>
        <div className="navbar">
            <div className="leftside" id={this.state.openlinks ? "open" : "close"}>
                <img src={Logo}/> <h1>Art Revolution</h1>
                <div className="hiddenlinks">
                <Link to='/'>Home</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/design'>Design</Link>
                <Link to='/art'>Art</Link>
            </div>
            </div>
            <div className="rightside">
                <Link to='/'>Home</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/design'>Design</Link>
                <Link to='/art'>Art</Link>
                <button onClick={this.toggleNav}><ViewListIcon/></button>
            </div>

        </div>
      </div>
    )
  }
}


