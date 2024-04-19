import Timeline1 from "../assets/Timeline1.jpg";
import Timeline2 from "../assets/Timeline2.jpg";
import BlogPic6 from "../assets/blog6.jpg";
import BlogPic7 from "../assets/blog7.jpg";

import {Link, useNavigate} from "react-router-dom";

export const TimelineList = [
    {
        id: 1,
        name:"Internet Art 1",
        image: Timeline1,
        description:"This internet art is a Timeline Unfortunatly i couldnt get the images to load.",
        button:<Link to="/InternetArt1">Read More</Link>
       },
    {
        id:2,
        name:"Internet Art 2",
        image: Timeline2,
        description:"This internet art is a canvas on which the user can draw i wanted to make its so that the user could feel like a painter and so i constructed this artwork.",
        button:<Link to="/InternetArt2">Read More</Link>
      },
   
]