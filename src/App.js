import React from 'react';
import Home from './Components/Home/Home.js';
import About from './Components/About/About.js';
import Contact from './Components/Contact/Contact.js';
import Projects from './Components/Projects/Projects.js';
import Skillslist from './Components/About/Skillslist.js';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import './App.css';
   
function App() {

 

  return (
   <div>

      <Parallax pages={3.8} style={{ backgroundColor: 'black', top: '0', left: '0'}} class="animation" >
        <ParallaxLayer offset={0} speed={0.25}>
          <div class="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <Home />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.23} style={{ height: '100%' }}>
          <div id='About'>

            <About />
          </div>

        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.25} style={{ height: '100%' }}>
          <div id='Projects'>
          
            <Skillslist/>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.25} style={{ height: '100%' }}>
          <div>
            <Projects />
          </div>
          <div id='Contact'>
          <Contact />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
);
}

export default App;
