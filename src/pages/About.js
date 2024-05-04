import DiagonalSplitBackground from '../components/background';
import Header from '../components/header';
import React, { useEffect, useState } from 'react';
import meghna from '../image/meghna_lal.png'
import { ReactComponent as PythonIcon } from '../image/python.svg';
import { ReactComponent as LinuxIcon } from '../image/linux.svg';
import { ReactComponent as ReactIcon } from '../image/react.svg';
import { ReactComponent as MatlabIcon } from '../image/matlab.svg';
import { ReactComponent as JavaIcon } from '../image/java.svg';
import { ReactComponent as PhotoshopIcon } from '../image/photoshop.svg';
import { ReactComponent as TerminalIcon } from '../image/terminal.svg';
import { ReactComponent as JavascriptlIcon } from '../image/javascript.svg';
import { ReactComponent as ApiIcon } from '../image/api.svg';
import { ReactComponent as LightroomIcon } from '../image/lightroom.svg';
function About () {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isVisible, setIsVisible] = useState(false);


    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
      };
    useEffect(() => {
        window.addEventListener('resize',updateScreenWidth) 
    }) 
    useEffect(() => {
        
        setIsVisible(true);
      }, []);
    return (
        
      <DiagonalSplitBackground>
        <div className="flex flex-col font-thin h-screen  ">
         <Header/>
         <p className={`font-mainFont  pl-16 text-start text-8xl text-primary border-b-2 border-primary w-2/3 transform transition duration-1000 ease-in-out ${
          isVisible ? 'translate-x-5 opacity-100 ' : 'translate-x-full opacity-0'
        }`} >
            ABOUT </p>
        <div className={`flex flex-row  items-top justify-center h-screen transform transition-transform duration-1000 ease-in-out ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`} >
          <div className="flex flex-col font-thin h-screen w-2/3 ">
          <h1 className={`font-mainFont pr-16 mb-8 pt-14 text-justify text-xl text-primary  transform transition-transform duration-1000 ease-in-out ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`} >
                Hello! 
                I dont like to define myself by the work i've done . 
                I define myself by the work I want to do. Skills can 
                be thouht but personality is inherent.
                I prefer to keep learning, continue challenging myself, 
                and do interesting things that matter.
                I dont like to define myself by the work i've done . 
                I define myself by the work I want to do. Skills can 
                be thouht but personality is inherent.
                I prefer to keep learning, continue challenging myself, 
                and do interesting things that matter.
                I dont like to define myself by the work i've done . 
                I define myself by the work I want to do. Skills can 
                be thouht but personality is inherent.
                I prefer to keep learning, continue challenging myself, 
                and do interesting things that matter.
                I dont like to define myself by the work i've done . 
                I define myself by the work I want to do. Skills can 
                be thouht but personality is inherent.
                I prefer to keep learning, continue challenging myself, 
                and do interesting things that matter.
                I dont like to define myself by the work i've done . 
                I define myself by the work I want to do. Skills can 
                be thouht but personality is inherent.
                I prefer to keep learning, continue challenging myself, 
                and do interesting things that matter.
                I dont like to define myself by the work i've done . 
                I define myself by the work I want to do. Skills can 
                be thouht but personality is inherent.
                I prefer to keep learning, continue challenging myself, 
                and do interesting things that matter.  
          </h1>
          <div className="flex flex-col font-thin h-[250px] " >
          <div className="flex flex-row font-thin justify-between h-[250px] " >
          <PythonIcon  className="ml-6 rounded-full p-2 grayscale hover:grayscale-0 mr-6  hover:scale-110"></PythonIcon>
          <LinuxIcon className="grayscale hover:grayscale-0 transition duration-1000 ease-in-out mr-6 hover:scale-110"></LinuxIcon>
          <ReactIcon className="grayscale hover:grayscale-0 mr-6 hover:scale-110"></ReactIcon>
          <JavascriptlIcon className="grayscale hover:grayscale-0 mr-6 hover:scale-110"></JavascriptlIcon>
          <MatlabIcon className="grayscale hover:grayscale-0 mr-6 hover:scale-110"></MatlabIcon>
         </div>
         <div className="flex flex-row font-thin justify-between h-[250px]" >
          <JavaIcon className="grayscale ml-6  justify-between hover:grayscale-0 transition duration-1000 ease-in-out mr-6 hover:scale-110"></JavaIcon>
          <PhotoshopIcon className="grayscale hover:grayscale-0 transition duration-1000 ease-in-out mr-6 hover:scale-110"></PhotoshopIcon>
          <LightroomIcon className="grayscale hover:grayscale-0 transition duration-1000 ease-in-out mr-6 hover:scale-110"></LightroomIcon>
          <TerminalIcon className="grayscale hover:grayscale-0 transition duration-1000 ease-in-out mr-6 hover:scale-110"></TerminalIcon>
          <ApiIcon className="grayscale hover:grayscale-0 transition duration-1000 ease-in-out mr-6 hover:scale-110"></ApiIcon>
         </div>
          </div>
        </div >
        <img
          className="h-screen w-1/4 object-contain text-primary mt-[-7%] "
          src={meghna}
          alt="me"
       />
        </div>
        <style>
      {`
        .grayscale {
          filter: grayscale(100%);
          transition: filter 0.3s ease-in-out;
        }

        .grayscale:hover {
          filter: grayscale(0%);
        }
      `}
    </style>
        </div> 
      </DiagonalSplitBackground>
      
    );
  }
  
  export default About;
  