import React, { useRef } from "react";
import Header from "../components/header";
import { ReactComponent as ArrayIcon } from "../image/arrow_down.svg";
import About from "../components/about";
import Image from "../components/image";
import Experiences from "../components/experiences";
import Contact from "../components/contact";
import LogoSlider2 from "../components/slider";
import Achievements from "../components/achievements";
import Info from "../components/info";
import SubSkills from "../components/subskills";
import HomePagePic from "../components/homepagepic";

function Home() {
  const iconAboutRef = useRef(null);

  const handleClick = () => {
    if (iconAboutRef.current) {
      iconAboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-background h-auto flex font-thin flex-col justify-center items-center space-y-24  ">
      <Header />
      <HomePagePic />
      <div className="flex flex-col h-[80vh] sm:h-[50vh] items-center font-mainFont">
        <LogoSlider2 />
        <SubSkills />
      </div>
      <div className="bg-background-third h-auto flex-col w-11/12 flex rounded-xl items-center">
        <div className=" border-b-[1px] border-background">
          <h2 className="text-xl text-center text-background pt-4 ">
            <ul>
              <li className="inline-block mr-4">
                a{" "}
                <p className="font-broadacre-text text-2xl inline">
                  Full Stack Developer
                </p>
                <p className=" font-broadacre text-xl inline px-1">
                  {" "}
                  passionate about turning ideas into powerful tech solutions.
                </p>
              </li>
              <li className="mr-4 font-broadacre">
                From crafting{" "}
                <p className="font-broadacre-text text-2xl inline">
                  innovative SaaS products{" "}
                </p>
                for JaguarLandRover to{" "}
                <p className="font-broadacre  text-xl inline">
                  {" "}
                  developing software
                </p>{" "}
                that delivers in cars
              </li>
              <li className="text-2xl font-broadacre-text mb-4">
                I bring concepts to life through code.
              </li>
            </ul>
          </h2>
          <div className="flex justify-center items-center pb-6 ">
            <div className="animate-bounce flex justify-center items-center h-[33px] w-[60px] border-[1px] rounded-2xl fill-background hover:cursor-pointer ">
              <ArrayIcon ref={iconAboutRef} onClick={handleClick} />
            </div>
          </div>
        </div>
        {/* ABOUT SECTION */}
        <div className="flex justify-start w-11/12 pt-4">
          <div className="flex-col w-3/12 pt-4 ">
            <h1 className="font-broadacre-3 text-8xl mb-6 text-background  ">
              My Story
            </h1>
            <Image />
          </div>
          <section id="about-section">
            <About />
          </section>
        </div>
        {/* <SkillsIcon /> */}
      </div>
      <section id="experience-section">
        <div className="flex-col font-mainFont w-11/12 pt-5 px-4 border-t-[1px] border-background-third mx-auto">
          <h3 className=" font-broadacre-text text-xl text-text-contrast-green  ">
            The companies I worked with
          </h3>
          <h1 className="font-broadacre-3 text-8xl pb-14 text-background-third ">
            Experiences
          </h1>
          {/* EXPERIENCE */}\
          <Experiences />
          {/* DOWNLOAD CV SECTION */}
          <div className="pb-4 text-center">
            <a
              href="/MeghnaLalCVOct.pdf" // Update with the actual path to your CV file
              download="MeghnaLalCV.pdf" // This is the filename when the user downloads the file
              className="inline-block font-broadacre-text bg-background-third text-background font-bold py-3 px-6 rounded hover:bg-secondary transition duration-300 ease-in-out"
            >
              Download My CV
            </a>
          </div>
          {/* ACHIEVEMENTS */}
          <Achievements />
        </div>
      </section>
      <div>
        <div className="w-screen h-[320px] flex justify-between ">
          <div className="w-[100px] h-[400px] rounded-tr-xl bg-background-third"></div>
          <section id="contact-section">
            <Contact />
          </section>
          <div className="w-[100px] h-[400px] rounded-tl-xl bg-background-third"></div>
        </div>

        <div className="w-screen h-[400px] rounded-l-xl p-2 bg-background-third flex items-end justify-center ">
          <Info />
        </div>
      </div>
    </div>
  );
}

export default Home;
