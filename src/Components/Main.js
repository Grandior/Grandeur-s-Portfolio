import react, { useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';
import Aos from 'aos'
import 'aos/dist/aos.css'

import "./main.css";

const AnimationComponent = () => {
  useEffect(() => {
    Aos.init ({duration: 1000});
  }, [])
  return (
    <div className="container" data-aos = "fade-up">
      <img src="/avatar.jpg" alt="Your Image" className="static-image" />

      <div className="text-animation">
        
        <div>

            {/* <h3>
            Hi, my name is Grandeur.
            <br></br> I'm the digital architect behind eye-catching websites and seamless online experiences. 
            <br></br> I'm a web developer who loves to craft digital magic, turning lines of code into stunning virtual realities.
            <br></br> Ready to code your vision into reality?"
            </h3> */}

            <TypeAnimation className="type-animation"
            style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
            sequence={[
                `Hi, my name is Grandeur.\nI'm the digital architect behind eye-catching websites and seamless online experiences. \nI'm a web developer who loves to craft digital magic, turning lines of code into stunning virtual realities.\n
                
                Ready to code your vision into reality?`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
                1000,
                '',
            ]}
            repeat={Infinity}/>

        </div>

        
    
      </div>

      <div className="stack">

        <div className="logos">
          <img src="/html logo.png" />
        </div>

        <div className="logos">
          <img src="/css logo.png" />
        </div>

        <div className="logos">
          <img src="/js logo.png" />
        </div>

        <div className="logos">
          <img src="/react logo.png" />
        </div>
      </div>



      <div className="socials">
        
        <img src="/instagram.png"/>
        <img src="/linkedin.png"/>
        <img src="/twitter.png"/>
        <img src="/whatsapp.png"/>

      </div>
    </div>
  );
};



export default AnimationComponent;



