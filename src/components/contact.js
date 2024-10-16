import React from "react";
import { ReactComponent as EmailIcon } from "../image/email.svg";
const Contact = () => {
  return (
    <div className=" h-auto w-full px-20">
      <div className="bg-background h-auto flex-col w-full mt-20 flex rounded-xl bt-20 ">
        <h1 className="font-broadacre-3 text-4xl sm:text-8xl pb-14 text-background-third ">
          Say Hello!
        </h1>
      </div>
      <div className="bg-shadow-cream rounded-xl">
        <h2 className=" font-broadacre-text text-xs sm:text-xl px-10 py-4 text-dim-gray text-left md:text-right">
          <ul>
            <li>Whether you have an idea for a project or just want to chat</li>
            <li>feel free to shoot me an email!</li>
          </ul>
        </h2>
        <div className="h-auto flex justify-end px-6 py-10">
          <div className="flex bg-background rounded-lg items-start md:items-center self-end mr-2 p-2 mx-2 transition-fill transition duration-1000 ease-in-out hover:scale-110 ">
            <EmailIcon className=" mb-8 h-8 fill-background-third"></EmailIcon>
            <a
              href="mailto:lalmaggy@gmail.com"
              className="text-xl flex justify-end font-broadacre-text text-right text-background-third h-16 "
            >
              GET IN TOUCH!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
