import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import about from "../Utils/about.json";
gsap.registerPlugin(useGSAP, TextPlugin, ScrollTrigger);
const About = () => {
  const main = useRef();
  useGSAP(
    () => {
      gsap.to("meg", {
        opacity: 0,
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: "meg",
          //markers: true,
          scrub: true,
          start: "top center",
          end: "bottom center",
        },
      });
    },
    { scope: main },
  );
  useGSAP(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Target all elements with the class "scrollDiv"
    gsap.utils.toArray(".scrollDiv").forEach((div) => {
      gsap.fromTo(
        div,
        {
          y: 50, // Start slightly below its normal position
          opacity: 0, // Start with 0 opacity for a fade-in effect
        },
        {
          y: 0, // Move to its natural position
          opacity: 1, // Fade to full opacity
          duration: 2, // Duration of the animation
          ease: "elastic.out", // Bounce effect when reaching the final position
          scrollTrigger: {
            trigger: div,
            start: "top 90%", // When the top of the div is 80% from the top of the viewport
            end: "top 10%", // End when the top of the div is 20% from the top of the viewport
            toggleActions: "play none none reset", // Only play the animation when it enters the viewport
            scrub: true,
          },
        },
      );
    });
  }, []); // Empty dependency array ensures this runs only once on mount
  return (
    <div className="h-screen">
      <h1
        className="meg font-broadacre-text pl-8 mb-4 pt-2 text-justify text-l text-background "
        ref={main}
      >
        <div className="grid grid-cols-4 w-full gap-[1px] pb-4 px-2 ">
          {/* First Row */}
          <div className=" scrollDiv font-broadacre-text text-xl bg-indian-red h-auto flex rounded-lg px-2 my-2 justify-center items-center col-span-1 ">
            <p className="my-2">MY DRIVE</p>
          </div>
          <div
            className="h-auto text-right border-b-[1px] border-b-shadow-cream py-2 flex px-2 ml-auto justify-center items-center col-span-3"
            style={{ width: "85%" }}
          >
            <p className="my-2 text-sm">{about.about_drive}</p>
          </div>
          {/* Second Row */}
          <div
            className="h-auto text-left border-b-[1px] border-b-shadow-cream py-2 flex px-2 justify-center items-center col-span-3"
            style={{ width: "85%" }}
          >
            <p className="my-2 text-sm">
              {about.about_future}
              {about.about_goal}
            </p>
          </div>
          <div className="scrollDiv font-broadacre-text text-xl bg-indian-red text-right h-auto flex rounded-lg px-2 my-2 justify-center items-center col-span-1">
            <p className="my-2">MY GOAL</p>
          </div>
          {/* Third Row */}
          <div className="scrollDiv font-broadacre-text text-xl  bg-indian-red text-right h-auto flex rounded-lg px-2 my-2 justify-center items-center col-span-1">
            <p className="my-2">MY VALUE</p>
          </div>
          <div
            className="h-auto text-right border-b-[1px] border-b-shadow-cream py-2 flex px-2 ml-auto justify-center items-center col-span-3"
            style={{ width: "85%" }}
          >
            <p className="my-2 text-sm">{about.about_value}</p>
            {/* <p className="my-2 text-sm">
              {about.about_future}
              {about.about_goal}
            </p> */}
          </div>
          {/* Forth Row */}
          <div
            className="h-auto text-left border-b-[1px] border-b-shadow-cream py-2 flex px-2 justify-center items-center col-span-3"
            style={{ width: "85%" }}
          >
            <p className="my-2 text-sm">{about.about_ideal_work}</p>
          </div>
          <div className="scrollDiv font-broadacre-text text-xl  bg-indian-red  h-auto flex rounded-lg px-2 my-2  justify-center items-center col-span-1">
            <p className="my-2">MY IDEAL WORK ENVIROMENT</p>
          </div>
          {/* Fifth Row */}
          <div className="scrollDiv font-broadacre-text text-xl bg-indian-red h-auto flex rounded-lg px-2 my-2 justify-center items-center col-span-1">
            <p className="my-2">IN CLOSING</p>
          </div>
          <div
            className="h-auto text-right border-b-[1px] border-b-shadow-cream py-2 flex px-2 ml-auto justify-center items-center col-span-3"
            style={{ width: "85%" }}
          >
            <p className="my-2 text-sm">{about.about_end}</p>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default About;
