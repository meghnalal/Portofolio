import meghna from "../image/meghna1.jpg";
import React, { useRef, useEffect } from "react";
import gsap from "gsap"; // <-- import GSAP
import { ScrollTrigger } from "gsap/ScrollTrigger"; // <-- import the hook from our React package

gsap.registerPlugin(ScrollTrigger);

const Image = () => {
  const imageRef = useRef(null);
  useEffect(() => {
    const anim = gsap.fromTo(
      imageRef.current,
      { autoAlpha: 0, scale: 0.8 },
      { duration: 1, autoAlpha: 1, scale: 1 },
    );
    ScrollTrigger.create({
      trigger: imageRef.current,
      animation: anim,
      markers: true,
      toggleActions: "restart none none reset",
    });
  }, []);

  return (
    <div className=" static ">
      <img
        ref={imageRef}
        className=" absolute rounded-xl w-[300px] h-[500px] mr-[2%] object-cover text-primary mt-[3%]  left-0   "
        src={meghna}
        alt="me"
      />
    </div>
  );
};
export default Image;
