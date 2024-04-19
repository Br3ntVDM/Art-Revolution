import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Design from './pages/Design';
import Art from './pages/Art';
import Footer from './components/Footer';
import Blog1 from './Blogs/Blog1';
import Blog2 from './Blogs/Blog2';
import Blog3 from './Blogs/Blog3';
import Blog4 from './Blogs/Blog4';
import Blog5 from './Blogs/Blog5';
import Blog6 from './Blogs/Blog6';
import Blog7 from './Blogs/Blog7';
import Blog8 from './Blogs/Blog8';
import Blog9 from './Blogs/Blog9';
import Blog10 from './Blogs/Blog10';
import Blog11 from './Blogs/Blog11';
import Blog12 from './Blogs/Blog12';
import Essay from './Theory/Essay';
import Theory1 from './Theory/Theory1';
import Theory2 from './Theory/Theory2';
import Theory3 from './Theory/Theory3';
import InternetArt1 from './Art/InternetArt1';
import InternetArt2 from './Art/InternetArt2';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/design" element={<Design />} />
        <Route path="/art" element={<Art />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
        <Route path="/blog4" element={<Blog4 />} />
        <Route path="/blog5" element={<Blog5 />} />
        <Route path="/blog6" element={<Blog6 />} />
        <Route path="/blog7" element={<Blog7 />} />
        <Route path="/blog8" element={<Blog8 />} />
        <Route path="/blog9" element={<Blog9 />} />
        <Route path="/blog10" element={<Blog10 />} />
        <Route path="/blog11" element={<Blog11 />} />
        <Route path="/blog12" element={<Blog12 />} />
        <Route path="/essay" element={<Essay />} />
        <Route path="/theory1" element={<Theory1 />} />
        <Route path="/theory2" element={<Theory2 />} />
        <Route path="/theory3" element={<Theory3 />} />
        <Route path="/internetart1" element={<InternetArt1 />} />
        <Route path="/internetart2" element={<InternetArt2 />} />
      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
