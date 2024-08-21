import React, { useState } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactComponent as ArrayIcon } from "../image/arrow_down.svg";
import jobs from "../Utils/experience.json";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
  const [hoverStates, setHoverStates] = useState(jobs.map(() => false));
  const main = useRef();
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box");
      boxes.forEach((box) => {
        gsap.set(box, {
          x: -200,
          opacity: 0,
          y: 0,
          duration: 1,
        });
        gsap.to(box, {
          x: 0,
          opacity: 1,
          //ease: "expo",
          duration: 1,
          immediateRender: false, // otherwise scrollTrigger will force the render right away and the starting values that get locked in would be affected by the from() above
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "center center",
            scrub: true,
          },
        });
      });
    },
    { scope: main },
  );
  //learnt on youtube regarding changing just a value on your object/array
  const handleClick = (index) => {
    setHoverStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };
  return (
    <div className="mb-16" ref={main}>
      {jobs.map((job, index) => (
        <div
          className="flex-col w-full pb-2 border-b-[1px] justify-center duration-800 ease-in-out items-center overflow-hidden border-background-third"
          // style={{
          //   height: hoverStates[index] ? "auto" : "100px",
          //   // transitionDuration: `height 0.8s ${
          //   //   hoverStates[index] ? "0.8s" : "0.8s"
          //   // }`,
          //   transition: `height 0.8s ease-in-out`,
          // }}
        >
          <div className="w-full justify-center items-center">
            <div className="flex justify-center items-center">
              <div className="text-3xl flex w-4/6 text-dim-gray font-broadacre-text">
                {job.company}
              </div>
              <div className="font-broadacre-text text-xl flex w-2/6 text-dim-gray">
                {job.period}
              </div>
            </div>
            <div className="flex items-center font-broadacre-text text-base w-full text-dim-gray">
              <p className="w-4/6">{job.role}</p>
              <div className="flex w-1/6 justify-center items-center h-[60px]">
                <div
                  className="animate-bounce hover:cursor-pointer flex justify-center items-center h-[33px] w-[60px] border-[1px] border-background-third rounded-2xl fill-background-third"
                  onClick={() => handleClick(index)}
                  key={index}
                >
                  <ArrayIcon
                    className={` ${
                      hoverStates[index] ? "rotate-180" : "rotate-0"
                    }`}
                    style={{
                      transitionDuration: hoverStates[index] ? "0.8s" : "0.5s",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="font-broadacre-text overflow-hidden w-full bg-shadow-cream rounded-b-md "
            style={{
              maxHeight: hoverStates[index] ? "1000px" : "0", // Adjust based on your expected maximum content height
              transition: "max-height 0.6s ease-in-out",
            }}
          >
            <ul className="text-background-third text-justify h-auto p-4 pl-4 ">
              {job.tasks.map((task, index) =>
                task.startsWith("*") ? (
                  <li
                    key={index}
                    className="custom-indent list-disc mx-10 mb-4 text-wrap list-inside "
                  >
                    {task.replace("*", "")}
                  </li>
                ) : (
                  <li key={index} className="mx-4 mb-4 list-none">
                    {task}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
