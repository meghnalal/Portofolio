import React, { useState } from "react";

const Experiences = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="mb-16">
      <div
        className="flex-col w-full pb- border-b-[1px] justify-center items-center border-background-third "
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className=" w-full justify-center items-center ">
          <div className="flex justify-center items-center">
            <div className=" text-3xl flex w-4/6 text-dim-gray font-broadacre-text  ">
              JaguarLandRover
            </div>
            <div className=" font-broadacre-text text-xl flex w-2/6 text-dim-gray  ">
              Jan 2017 - Present
            </div>
          </div>
          <div className=" font-broadacre-text text-base w-full  text-dim-gray   ">
            Full Stack Software Developer
          </div>
        </div>
        {/* <ul className={`text-base  text-text-contrast-green transition-opacity duration-1000 ease-out opacity-0 hover:opacity-100`}></ul> */}
        <div
          className=" font-broadacre-text menu-dropdown top-full left-0 overflow-hidden w-full bg-shadow-cream  
         rounded-md transition-all"
          style={{
            height: hover ? "270px" : "0",
            transitionDuration: hover ? "0.8s" : "0.5s"
          }}
        >
          <ul className="text-background-third p-4">
            <li>
              Spearheaded the development of a cloud-based SAAS platform
              specializing in analyzed acquired ECU and sensor data from
              automotive systems.
            </li>
            <li>
              Architected and implemented a responsive web interface enabling
              users to visualize and analyze real-time data from onboard ECUs
              and sensors.
            </li>
            <li>
              Designed and integrated robust data acquisition pipelines,
              ensuring the seamless ingestion of diverse data sources into the
              cloud platform.
            </li>
            <li>
              Implemented advanced analytics features, empowering users to
              derive insights and make data-driven decisions based on the
              measured data.
            </li>
            <li>
              Guided best practices around inclusive design and accessible,
              semantic UI.
            </li>
            <li>
              Mentored junior developers and helped new hires onboard and
              succeed.
            </li>
          </ul>
        </div>
      </div>
      <div
        className="flex-col w-full pb-2 border-b-[1px] justify-center items-center border-background-third "
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className=" w-full 
     justify-center items-center "
        >
          <div className="flex justify-center items-center">
            <div className="text-3xl flex w-4/6 text-dim-gray font-broadacre-text  ">
              Lufthansa
            </div>
            <div className=" font-broadacre-text text-xl flex w-2/6 text-dim-gray  ">
              Jan 2017 - Present
            </div>
          </div>
          <div className=" font-broadacre-text text-base w-full text-2xl text-dim-gray   ">
            Full Stack Software Developer
          </div>
        </div>
        {/* <ul className={`text-base  text-text-contrast-green transition-opacity duration-1000 ease-out opacity-0 hover:opacity-100`}></ul> */}
        <div
          className=" font-broadacre-text menu-dropdown top-full left-0 overflow-hidden w-full bg-shadow-cream  
    rounded-b-md transition-all"
          style={{
            height: hover ? "270px" : "0",
            transitionDuration: hover ? "0.8s" : "0.5s"
          }}
        >
          <ul className="text-background-third p-4">
            <li>
              Spearheaded the development of a cloud-based SAAS platform
              specializing in analyzed acquired ECU and sensor data from
              automotive systems.
            </li>
            <li>
              Architected and implemented a responsive web interface enabling
              users to visualize and analyze real-time data from onboard ECUs
              and sensors.
            </li>
            <li>
              Designed and integrated robust data acquisition pipelines,
              ensuring the seamless ingestion of diverse data sources into the
              cloud platform.
            </li>
            <li>
              Implemented advanced analytics features, empowering users to
              derive insights and make data-driven decisions based on the
              measured data.
            </li>
            <li>
              Guided best practices around inclusive design and accessible,
              semantic UI.
            </li>
            <li>
              Mentored junior developers and helped new hires onboard and
              succeed.
            </li>
          </ul>
        </div>
      </div>
      <div
        className="flex-col w-full pb-2 border-b-[1px] justify-center items-center border-background-third "
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className=" w-full 
     justify-center items-center "
        >
          <div className="flex justify-center items-center">
            <div className="text-3xl flex w-4/6 text-dim-gray font-broadacre-text  ">
              Experince
            </div>
            <div className=" font-broadacre-text text-xl flex w-2/6 text-dim-gray  ">
              Jan 2017 - Present
            </div>
          </div>
          <div className=" font-broadacre-text text-base w-full text-2xl text-dim-gray   ">
            Full Stack Software Developer
          </div>
        </div>
        {/* <ul className={`text-base  text-text-contrast-green transition-opacity duration-1000 ease-out opacity-0 hover:opacity-100`}></ul> */}
        <div
          className=" font-broadacre-text menu-dropdown top-full left-0 overflow-hidden w-full bg-shadow-cream  
    rounded-b-md transition-all"
          style={{
            height: hover ? "270px" : "0",
            transitionDuration: hover ? "0.8s" : "0.5s"
          }}
        >
          <ul className="text-background-third p-4">
            <li>
              Spearheaded the development of a cloud-based SAAS platform
              specializing in analyzed acquired ECU and sensor data from
              automotive systems.
            </li>
            <li>
              Architected and implemented a responsive web interface enabling
              users to visualize and analyze real-time data from onboard ECUs
              and sensors.
            </li>
            <li>
              Designed and integrated robust data acquisition pipelines,
              ensuring the seamless ingestion of diverse data sources into the
              cloud platform.
            </li>
            <li>
              Implemented advanced analytics features, empowering users to
              derive insights and make data-driven decisions based on the
              measured data.
            </li>
            <li>
              Guided best practices around inclusive design and accessible,
              semantic UI.
            </li>
            <li>
              Mentored junior developers and helped new hires onboard and
              succeed.
            </li>
          </ul>
          </div>
      </div>
    </div>
  );
};

export default Experiences;
