import DiagonalSplitBackground from "../components/background";
import Header from "../components/header";
import Subcat from "../components/subcategories";
import React, { useEffect, useState } from "react";
import meghna from "../image/meghna_lal.png";
import { motion } from "framer-motion";

function Experience() {
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
     
      <div className={`flex flex-col max-w-8xl font-thin mx-auto p-4 overflow-scroll h-screen transform transition-transform duration-1000 ease-in-out ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`} >
        <Header/> 
        <div className="flex font-mainFont p-2 ">
          <div className="w-1/4  text-primary  ">
            {/* First column */}
            <h3 className="text-2xl mb-2">2022-Present</h3>
          </div>
          <div className="w-3/4 ml-8  b hover:bg-purple-300 hover:bg-opacity-20 ">
            {/* Second column */}
            <h1 className=" text-2xl font-bold text-text-contrast-green mb-2">
              Full Stack Software Developer
            </h1>
            <h2 className=" text-sm mb-4 italic text-text-contrast-red"> Jaguar Land Rover, UK and ROI</h2>
            <p className="text-base text-text-contrast-green leading-snug ">
              <ul>
                <li>
                  Spearheaded the development of a cloud-based SAAS platform
                  specializing in analyzed acquired ECU and sensor data from
                  automotive systems.
                </li>
                <li>
                  Architected and implemented a responsive web interface
                  enabling users to visualize and analyze real-time data from
                  onboard ECUs and sensors.
                </li>
                <li>
                  Designed and integrated robust data acquisition pipelines,
                  ensuring the seamless ingestion of diverse data sources into
                  the cloud platform.
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
            </p>
            <div className="flex flex-row mr-1.5 mt-2  px-3 py-1 leading-5 font-mainFont  p-4 border-2 border-purple-200 ">
              <ul className="flex">
                <li className="border-2  items-center rounded-full mr-3 p-2 bg-text-contrast-green text-white bg-opacity-50">
                  React
                </li>
                <li className="border-2  items-center rounded-full mr-3 p-2 bg-text-contrast-green  text-white bg-opacity-50">
                  JavaScript
                </li>
                <li className="border-2  items-center rounded-full mr-3 p-2 bg-text-contrast-green text-white bg-opacity-50">
                  JavaScript
                </li>
                <li className="border-2  items-center rounded-full mr-3 p-2 bg-text-contrast-green text-white bg-opacity-50">
                  Python
                </li>
                <li className="border-2  items-center rounded-full mr-3 p-2 bg-text-contrast-green text-white bg-opacity-50">
                  TypeScript
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex font-mainFont  p-4 ">
        <div className="w-1/4  text-primary  ">
            {/* First column */}
            <h3 className="text-2xl mb-2">2022-Present</h3>
          </div>
          <div className="w-3/4 ml-8  hover:bg-purple-300 hover:bg-opacity-20 ">
            {/* Second column */}
            <h1 className=" text-2xl font-bold text-text-contrast-green mb-2">
              Full Stack Software Developer
            </h1>
            <h2 className=" text-sm mb-4 italic text-text-contrast-red"> Jaguar Land Rover, UK and ROI</h2>
            <p className="text-base text-text-contrast-green leading-snug ">
              <ul>
                <li>
                  Spearheaded the development of a cloud-based SAAS platform
                  specializing in analyzed acquired ECU and sensor data from
                  automotive systems.
                </li>
                <li>
                  Architected and implemented a responsive web interface
                  enabling users to visualize and analyze real-time data from
                  onboard ECUs and sensors.
                </li>
                <li>
                  Designed and integrated robust data acquisition pipelines,
                  ensuring the seamless ingestion of diverse data sources into
                  the cloud platform.
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
            </p>
            <div className="flex flex-row mr-1.5 mt-2  px-3 py-1 leading-5 font-mainFont  p-4 border-2 border-purple-200 ">
              <ul className="flex">
                <li className="border-2  items-center rounded-full mr-3 p-2 bg-text-contrast-green text-white bg-opacity-50">
                  React
                </li>
                <li className="border-2  items-center rounded-full mr-3 p-2 bg-text-contrast-green  text-white bg-opacity-50">
                  JavaScript
                </li>
                <li className="border-2  items-center rounded-full mr-3 p-2 bg-text-contrast-green text-white bg-opacity-50">
                  JavaScript
                </li>
                <li className="border-2  items-center rounded-full mr-3 p-2 bg-text-contrast-green text-white bg-opacity-50">
                  Python
                </li>
                <li className="border-2  items-center rounded-full mr-3 p-2 bg-text-contrast-green text-white bg-opacity-50">
                  TypeScript
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex font-mainFont p-4">
        <div className="w-1/4  text-primary  ">
            {/* First column */}
            <h3 className="text-2xl mb-2">2022-Present</h3>
          </div>
          <div className="w-3/4 ml-8  hover:bg-purple-300 hover:bg-opacity-20 ">
            {/* Second column */}
            <h1 className=" text-2xl font-bold text-text-contrast-green mb-2">
              Full Stack Software Developer
            </h1>
            <h2 className=" text-sm mb-4 italic text-text-contrast-red"> Jaguar Land Rover, UK and ROI</h2>
            <p className="text-base text-text-contrast-green leading-snug ">
              <ul>
                <li>
                  Spearheaded the development of a cloud-based SAAS platform
                  specializing in analyzed acquired ECU and sensor data from
                  automotive systems.
                </li>
                <li>
                  Architected and implemented a responsive web interface
                  enabling users to visualize and analyze real-time data from
                  onboard ECUs and sensors.
                </li>
                <li>
                  Designed and integrated robust data acquisition pipelines,
                  ensuring the seamless ingestion of diverse data sources into
                  the cloud platform.
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
            </p>
            <div className="flex flex-row mr-1.5 mt-2  px-3 py-1 leading-5 font-mainFont  p-4 border-2 border-purple-200 ">
              <ul className="flex">
                <li className="border-2  items-center rounded-full mr-3 p-2 bg-text-contrast-green text-white bg-opacity-50">
                  React
                </li>
                <li className="border-2  items-center rounded-full mr-3 p-2 bg-text-contrast-green  text-white bg-opacity-50">
                  JavaScript
                </li>
                <li className="border-2  items-center rounded-full mr-3 p-2 bg-text-contrast-green text-white bg-opacity-50">
                  JavaScript
                </li>
                <li className="border-2  items-center rounded-full mr-3 p-2 bg-text-contrast-green text-white bg-opacity-50">
                  Python
                </li>
                <li className="border-2  items-center rounded-full mr-3 p-2 bg-text-contrast-green text-white bg-opacity-50">
                  TypeScript
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex font-mainFont p-4">
        <div className="w-1/4  text-primary  ">
            {/* First column */}
            <h3 className="text-2xl mb-2">2022-Present</h3>
          </div>
          <div className="w-3/4 ml-8  hover:bg-purple-300 hover:bg-opacity-20 ">
            {/* Second column */}
            <h1 className=" text-2xl font-bold text-text-contrast-green mb-2">
              Full Stack Software Developer
            </h1>
            <h2 className=" text-sm mb-4 italic text-text-contrast-red"> Jaguar Land Rover, UK and ROI</h2>
            <p className="text-base text-text-contrast-green leading-snug ">
              <ul>
                <li>
                  Spearheaded the development of a cloud-based SAAS platform
                  specializing in analyzed acquired ECU and sensor data from
                  automotive systems.
                </li>
                <li>
                  Architected and implemented a responsive web interface
                  enabling users to visualize and analyze real-time data from
                  onboard ECUs and sensors.
                </li>
                <li>
                  Designed and integrated robust data acquisition pipelines,
                  ensuring the seamless ingestion of diverse data sources into
                  the cloud platform.
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
            </p>
            <div className="flex flex-row mr-1.5 mt-2  px-3 py-1 leading-5 font-mainFont  p-4 border-2 border-purple-200 ">
              <ul className="flex">
                <li className="border-2  items-center rounded-full mr-3 p-2 bg-text-contrast-green text-white bg-opacity-50">
                  React
                </li>
                <li className="border-2  items-center rounded-full mr-3 p-2 bg-text-contrast-green  text-white bg-opacity-50">
                  JavaScript
                </li>
                <li className="border-2  items-center rounded-full mr-3 p-2 bg-text-contrast-green text-white bg-opacity-50">
                  JavaScript
                </li>
                <li className="border-2  items-center rounded-full mr-3 p-2 bg-text-contrast-green text-white bg-opacity-50">
                  Python
                </li>
                <li className="border-2  items-center rounded-full mr-3 p-2 bg-text-contrast-green text-white bg-opacity-50">
                  TypeScript
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </DiagonalSplitBackground>
  );
}

export default Experience;
