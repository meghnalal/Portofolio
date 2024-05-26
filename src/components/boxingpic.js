import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Boxingtry = () => {
  const main = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box");
      boxes.forEach((box) => {
        gsap.set(box, {
          x: 50,
          opacity: 0,
          y: 0,
          duration: 2,
        });
        gsap.to(box, {
          x: 900,
          opacity: 1,
          ease: "expo",
          duration: 2,
          immediateRender: false, // otherwise scrollTrigger will force the render right away and the starting values that get locked in would be affected by the from() above
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            scrub: true,
          },
        });
      });
    },
    { scope: main },
  );

  return (
    <div>
      <section className="section  flex-center column">
        <h2>Basic ScrollTrigger with React</h2>
        <p>Scroll down to see the magic happen!!</p>
      </section>
      <div className="section border-2  flex-center column" ref={main}>
        <div className="box border-2 border-black gradient-blue">box</div>
        <div className="box border-2 border-black gradient-blue">box</div>
        <div className="box border-2 border-black  gradient-blue">box</div>
      </div>
      <section className="section"></section>
    </div>
  );
};

export default Boxingtry;
