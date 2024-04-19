import MonaLisa from "../assets/monawallpap.jpg";
import BlogPic1 from "../assets/blog1.jpg";
import BlogPic2 from "../assets/blog2.jpg";
import BlogPic3 from "../assets/blog3.jpg";
import BlogPic4 from "../assets/blog4.jpg";
import BlogPic5 from "../assets/blog5.jpg";
import BlogPic6 from "../assets/blog6.jpg";
import BlogPic7 from "../assets/blog7.jpg";
import {Link, useNavigate} from "react-router-dom";

export const BlogList = [
    {
        name:"Week 3 - net/web art / Revision - JavaScript Fundamentals",
        image: MonaLisa,
        button:<Link to="/blog1">Read More</Link>
    },
    {
        name:"Week 4 - Conceptualising your Artwork / Revision - APIs",
        image: BlogPic1,
        button:<Link to="/blog2">Read More</Link>
    },
    {
        name:"Week 5 - The history of the field / Fetch JSON",
        image: BlogPic2,
        button:<Link to="/blog3">Read More</Link>
    },
    {
        name:"Week 6 - Code Art / Rendering Basic",
        image: BlogPic3,
        button:<Link to="/blog4">Read More</Link>
    },
    {
        name:"Week 7 - African Digital Arts / Arrays",
        image: BlogPic4,
        button:<Link to="/blog5">Read More</Link>
    },
    {
        name:"Week 8 - IxD: Interaction Design / React Introduction",
        image: BlogPic5,
        button:<Link to="/blog6">Read More</Link>
    },
    {
        name:"Week 9 - How we code matters / React Implementation",
        image: BlogPic6,
        button:<Link to="/blog7">Read More</Link>
    },
    {
        name:"Week 10 - Code Art (for real this time) / React Props",
        image: BlogPic7,
        button:<Link to="/blog8">Read More</Link>
    },
    {
        name:"Week 11- Crit / React Introducing State",
        image: MonaLisa,
        button:<Link to="/blog9">Read More</Link>
    },
    {
        name:"Week 12 - AI and Art / React Routing",
        image: BlogPic1,
        button:<Link to="/blog10">Read More</Link>
    },
    {
        name:"Week 13 – Ethno-computing and Digital Art / React Total Build",
        image: BlogPic2,
        button:<Link to="/blog11">Read More</Link>
    },
    {
        name:"Week 14 - React Github Deployment",
        image: BlogPic3,
        button:<Link to="/blog12">Read More</Link>
    },
    {
        name:"2331287 Calvin Van Der Merwe WSOA4175A Assignment 2",
        image: BlogPic4,
        button:<Link to="/essay">Read More</Link>
    },
    {
        name:"Critical reflection on design, UI and UX",
        image: BlogPic5,
        button:<Link to="/theory1">Read More</Link>
    },
    {
        name:"Internet Artwork - Preparatory work",
        image: BlogPic6,
        button:<Link to="/theory2">Read More</Link>
    },
    {
        name:"Internet Artwork - Rationale and Reflection",
        image: BlogPic7,
        button:<Link to="/theory3">Read More</Link>
    },

];