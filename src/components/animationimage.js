import React from "react";
import { useRef } from "react";
import meghna from "../image/meghna_lal.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const AnimationImage = () => {
  const main = useRef();
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: main.current,
          start: "top top",
          end: "+=200",
          scrub: 1,
          pin: true,
          markers: true,
        },
      });

      tl.to(".img", { yPercent: 120, scale: 1.4, duration: 3 });
    },
    { scope: main },
  );
  return (
    <div className="relative trigger mt-20 w-screen h-[150px] flex justify-end items-center">
      <div className="absolute w-screen " ref={main}>
        <img
          className="img w-[100px] object-contain text-primary"
          src={meghna}
          alt="me"
          style={{ marginTop: "5%" }} // Adjust the margin-top as needed
        />
      </div>
    </div>
  );
};

export default AnimationImage;
