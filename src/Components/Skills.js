import React, { useState } from 'react';
import "./skills.css";
import ProgressBar from "@ramonak/react-progress-bar";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const ToggleDivs = () => {
  useEffect(() => {
    Aos.init ({duration: 1000});
  }, [])
  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);

  const toggleDiv1 = () => {
    setShowDiv1(!showDiv1);
    setShowDiv2(false);
  };

  const toggleDiv2 = () => {
    setShowDiv2(!showDiv2);
    setShowDiv1(false);
  };


  return (
    
    <div className='skills' data-aos = "fade-down">
        <h1 className='skills-h1'>My Skills</h1>
        <div className='technical-font'>My Technical Level</div>

        <div className='skills-container'>
        <div>
          <div className='frontend-dev'>
          <div onClick={toggleDiv1}>

            <div className='developer-container'>
              <img src='/brackets.png' className='developer-png'></img>
              <div className='frontend-brackets'>Frontend Developer</div>
              <div>
                <img src='./up-arrow.png' className='up-arrow'></img>
              </div>
            </div>
            

          </div>

            <div onClick={toggleDiv1} className='open-arrow-1'></div>
        </div>
        
        {showDiv1 && (
          <div className='dev-tools'>
            <h5>HTML</h5>
            <ProgressBar completed={90} className='html-progress'
            height='8px'
            width='378px'
            bgColor='rgba(240, 156, 22, 0.842)'/>
            <h5>CSS</h5>
            <ProgressBar completed={80} 
            height='8px'
            width='378px'
            bgColor='rgba(240, 156, 22, 0.842)'/>
            <h5>javaScript</h5>
            <ProgressBar completed={70} 
            height='8px'
            width='378px'
            bgColor='rgba(240, 156, 22, 0.842)'/>
            <h5>React</h5>
            <ProgressBar completed={75} 
            height='8px'
            width='378px'
            bgColor='rgba(240, 156, 22, 0.842)'/>
            {/* Add content for Div 1 */}
          </div>
        )}
      </div>

      <div>
      <div className='frontend-dev' onClick={toggleDiv2}>
          <div>
            <div className='editor-container'>
            <img src='/video-editor.png' className='editor-png'></img>
            <div className='edit-text'>Video Editting</div>
            <div>
                <img src='./up-arrow.png' className='up-arrow'></img>
              </div>
            </div>
            
            {/* <div className='edit-text'>Video Editting</div> */}

          </div>

            <div onClick={toggleDiv2} className='open-arrow-2'></div>
        </div>
        
        {showDiv2 && (
          <div className='editor-tools'>
            <h5>Adobe Premiere Pro</h5>
            <ProgressBar completed={78} className='html-progress'
            height='8px'
            width='378px'
            bgColor='rgba(240, 156, 22, 0.842)'/>
            <h5>Adobe After Effects</h5>
            <ProgressBar completed={85} className='html-progress'
            height='8px'
            width='378px'
            bgColor='rgba(240, 156, 22, 0.842)'/>
            <h5>Davinci Resolve</h5>
            <ProgressBar completed={80} className='html-progress'
            height='8px'
            width='378px'
            bgColor='rgba(240, 156, 22, 0.842)'/>
            <h5>Capcut</h5>
            <ProgressBar completed={90} className='html-progress'
            height='8px'
            width='378px'
            bgColor='rgba(240, 156, 22, 0.842)'/>
            {/* Add content for Div 2 */}
          </div>
        )}
        </div>

       
      </div>
    </div>
  );
};

export default ToggleDivs;
