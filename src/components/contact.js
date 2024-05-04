import React, { useEffect, useState } from 'react';
import { ReactComponent as EmailIcon } from '../image/email.svg';
const Contact = () => {
return (
    
    <div className=" h-auto">
        <h2 className=" font-broadacre-text text-2xl px-10 text-background text-left md:text-right">
        <ul>
            <li>
                Whether you have an idea for a project or just want to chat
            </li>
            <li>
                feel free to shoot me an email!
            </li>
        </ul>
        </h2>
        <div className="h-auto flex justify-end px-6 py-10">
        <div className="flex bg-indian-red rounded-lg items-start md:items-center self-end mr-2 p-2 mx-2 transition-fill transition duration-1000 ease-in-out hover:scale-110 ">
           <EmailIcon className=" mb-8 h-8 fill-background"></EmailIcon>
            <a href="mailto:lalmaggy@gmail.com" className="text-xl flex justify-end text-background h-16 font-broadacre-text ">
                GET IN TOUCH!
            </a>
        </div>
    </div>
    </div>
      );
    };
    
export default Contact;