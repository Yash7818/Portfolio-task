import Home from './Components/home';
import Side from './Components/side';
import About from './Components/About';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import './App.css';

function App() {
  return (
    <div className="main">
      <div className="side" id="side_menu">
        <Side/>
      </div>
      <div className="right-side">
        <div className="intro-f" id="home"> 
          <Home />
        </div>
        <div className="resume-p" id="resume">
          <Resume />
        </div>
        <div className="contact-p" id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
