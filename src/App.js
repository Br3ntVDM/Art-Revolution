import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Design from './pages/Design';
import Art from './pages/Art';
import Footer from './components/Footer';
import Blog1 from './Blogs/Blog1.js';
import Blog2 from './Blogs/Blog2.js';
import Blog3 from './Blogs/Blog3.js';
import Blog4 from './Blogs/Blog4.js';
import Blog5 from './Blogs/Blog5.js';
import Blog6 from './Blogs/Blog6.js';
import Blog7 from './Blogs/Blog7.js';
import Blog8 from './Blogs/Blog8.js';
import Blog9 from './Blogs/Blog9.js';
import Blog10 from './Blogs/Blog10.js';
import Blog11 from './Blogs/Blog11.js';
import Blog12 from './Blogs/Blog12.js';
import  Essay from './Theory/Essay';
import Theory1 from './Theory/Theory1';
import Theory2 from './Theory/Theory2';
import Theory3 from './Theory/Theory3';
import IArt1 from './Art/InternetArt1';
import IArt2 from './Art/InternetArt2';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
