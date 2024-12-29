import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <div className="w-full flex flex-row-reverse mr-2">
      <ScrollLink
        to="experience-section"
        smooth={true}
        duration={1000}
        className="h-[40px] w-fit mr-10 pt-2 font-broadacre-text text-xl text-primary relative border-background-third hover:border-b-[1px] transition duration-1000 ease-in-out overflow-hidden hover:scale-110"
      >
        Experience
      </ScrollLink>
      <ScrollLink
        to="contact-section"
        smooth={true}
        duration={1000}
        className="h-[40px] w-fit mr-10 pt-2 font-broadacre-text text-xl text-primary relative border-background-third hover:border-b-[1px] transition duration-1000 ease-in-out overflow-hidden hover:scale-110"
      >
        Contact
      </ScrollLink>
      <ScrollLink
        to="projects-section"
        smooth={true}
        duration={1000}
        className="h-[40px] w-fit mr-10 pt-2 font-broadacre-text text-xl text-primary relative border-background-third hover:border-b-[1px] transition duration-1000 ease-in-out overflow-hidden hover:scale-110"
      >
        Projects
      </ScrollLink>
      <ScrollLink
        to="about-section"
        smooth={true}
        duration={1000}
        className="h-[40px] w-fit mr-10 pt-2 font-broadacre-text text-xl text-primary relative border-background-third hover:border-b-[1px] transition duration-1000 ease-in-out overflow-hidden hover:scale-110"
      >
        About
      </ScrollLink>
    </div>
  );
};

export default Header;
