import React, { useRef } from "react";
import meghna from "../image/meghna_lal.png";
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
  return (
    <div className="h-screen ">
      <h1
        className=" meg font-broadacre-text pl-8 mb-8 pt-14 text-justify text-xl text-background "
        ref={main}
      >
        {/* {Hello! I dont like to define myself by the work i've done . I define
        myself by the work I want to do. Skills can be thouht but personality is
        inherent. I prefer to keep learning, continue challenging myself, and do
        interesting things that matter. I dont like to define myself by the work
        i've done . I define myself by the work I want to do. Skills can be
        thouht but personality is inherent. I prefer to keep learning, continue
        challenging myself, and do interesting things that matter. I dont like
        to define myself by the work i've done . I define myself by the work I
        want to do. Skills can be thouht but personality is inherent. I prefer
        to keep learning, continue challenging myself, and do interesting things
        that matter. I dont like to define myself by the work i've done . I
        define myself by the work I want to do. Skills can be thouht but
        personality is inherent. I prefer to keep learning, continue challenging
        myself, and do interesting things that matter. I dont like to define
        myself by the work i've done . I define myself by the work I want to do.
        Skills can be thouht but personality is inherent. I prefer to keep
        learning, continue challenging myself, and do interesting things that
        matter. I dont like to define myself by the work i've done . I define
        myself by the work I want to do. Skills can be thouht but personality is
        inherent. I prefer to keep learning, continue challenging myself, and do
        interesting things that matter.} */}
        {about.about}
      </h1>
    </div>
  );
};

export default About;
