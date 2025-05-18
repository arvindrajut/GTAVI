// EnhancedHero.jsx — GTA VI Style Hero Landing Section

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EnhancedHero = ({ characterRef }) => {
  const logoRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      taglineRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.5,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="landing relative w-full h-screen bg-black overflow-hidden">
      <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 flex justify-between items-center">
        <div ref={logoRef} className="logo flex gap-7">
          <div className="lines flex flex-col gap-[5px]">
            <div className="line w-15 h-2 bg-white"></div>
            <div className="line w-8 h-2 bg-white"></div>
            <div className="line w-5 h-2 bg-white"></div>
          </div>
          <h3 className="text-4xl text-white">Arvind Raju Tadi</h3>
        </div>
        <div className="nav-items text-white text-lg flex gap-10">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="imagesdiv relative w-full h-full">
        <img className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover" src="./sky.png" alt="sky" />
        <img className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover" src="./bg.png" alt="bg" />

        <div className="text text-white flex flex-col gap-4 items-center absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg] text-center">
          <h1 className="text-[10rem] leading-none">Software</h1>
          <h1 className="text-[10rem] leading-none">Engineer</h1>
          <p
            ref={taglineRef}
            className="text-xl mt-4 text-white font-light tracking-wide italic max-w-xl"
          >
            Building sleek, scalable web systems with React, Node, and cheat-code precision. Fintech-ready. GTA-certified.
          </p>
        </div>

        <img
          ref={characterRef}
          className="absolute character -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg] z-10"
          src="./girlbg.png"
          alt="character"
        />
      </div>

      <div className="btmbar text-white absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <i className="text-4xl ri-arrow-down-line"></i>
          <h3 className="text-xl font-[Helvetica_Now_Display]">Scroll to explore</h3>
        </div>
        <div className="flex gap-6">
          <a
            href="https://github.com/arvindrajut"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./ps5.png"
              alt="GitHub"
              className="h-[55px] hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="https://linkedin.com/in/tadiarvindraju"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./xbox.png"
              alt="LinkedIn"
              className="h-[55px] hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EnhancedHero;