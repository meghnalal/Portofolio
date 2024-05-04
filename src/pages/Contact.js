import React, { useEffect, useState } from 'react';
import DiagonalSplitBackground from '../components/background';
import { ReactComponent as EmailIcon } from '../image/email.svg';
import Header from '../components/header';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);


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
    
     <div className="flex flex-col font-mainFont p-4 justify-between font-thin h-screen border-2 border-primary ">
    <Header/> 
    <p className={`font-mainFont border-b-2  pl-16 text-start text-8xl text-primary border-primary w-11/12 transform transition duration-1000 ease-in-out ${
          isVisible ? 'translate-x-5 opacity-100 ' : 'translate-x-full opacity-0'
        }`} >
        CONTACT 
     </p>
    <div className="flex flex-row items-center w-auto justify-center rounded-full mr-2 p-2 mx-2 transition-fill transition duration-1000 ease-in-out hover:scale-110 hover:fill-primary ">
           <EmailIcon className="mt-4 h-16 fill-text-contrast-green hover:fill-primary"></EmailIcon>
        <a href="mailto:lalmaggy@gmail.com" className="text-7xl text-text-contrast-green  hover:text-primary  h-16 flex">
            GET IN TOUCH!
        </a>
    </div>

        <h2 className="text-4xl text-center  text-primary">
        <ul>
            <li>
                Whether you have an idea for a project or just want to chat
            </li>
            <li>
                feel free to shoot me an email!
            </li>
        </ul>
        </h2>
    </div>
    </DiagonalSplitBackground>
  ); 
};

export default Contact;