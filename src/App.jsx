// Resume Website — GTA 6 Style (Complete)

import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import FeaturedProjects from "./FeaturedProjects";
import AboutMe from "./AboutMe";

function App() {
  const [showContent, setShowContent] = useState(false);
  const characterRef = useRef(null);


  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg")?.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", { scale: 1, rotate: 0, duration: 2, delay: "-1", ease: "Expo.easeInOut" });
    gsap.to(".sky", { scale: 1.1, rotate: 0, duration: 2, delay: "-.8", ease: "Expo.easeInOut" });
    gsap.to(".bg", { scale: 1.1, rotate: 0, duration: 2, delay: "-.8", ease: "Expo.easeInOut" });
    gsap.to(".text", { scale: 1, rotate: 0, duration: 2, delay: "-.8", ease: "Expo.easeInOut" });
    // gsap.to(".character", {
    //   scale: 1.4,
    //   x: "-50%",
    //   bottom: "-25%",
    //   rotate: 0,
    //   duration: 2,
    //   delay: 0.5,
    //   ease: "Expo.easeInOut",
    //   zIndex: 0,
    // });
    gsap.to(".character", {
      scale: 1.2,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: 0.5,
      ease: "Expo.easeInOut",
      zIndex: 0,
    });
    
    // gsap.to(".character", { zIndex: -1, duration: 1, delay: 2.5 });

    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", { x: `${xMove * 0.4}%` });
      gsap.to(".sky", { x: xMove });
      gsap.to(".bg", { x: xMove * 1.7 });
    });
  }, [showContent]);

  useEffect(() => {
    const charImg = characterRef.current;
    if (!charImg) return;
    const bringForward = () => gsap.to(charImg, { zIndex: 10, duration: 0.5 });
    charImg.addEventListener("click", bringForward);
    charImg.addEventListener("touchstart", bringForward);
    return () => {
      charImg.removeEventListener("click", bringForward);
      charImg.removeEventListener("touchstart", bringForward);
    };
  }, []);

  return (
    <>
<div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
  <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
    <defs>
      <mask id="viMask">
        <rect width="100%" height="100%" fill="black" />
        <g className="vi-mask-group">
          <text
            x="50%"
            y="50%"
            fontSize="250"
            textAnchor="middle"
            fill="white"
            dominantBaseline="middle"
            fontFamily="Arial Black"
            letterSpacing="10"
          >
            AR
          </text>
        </g>
      </mask>
    </defs>
    <image
      href="./bg.png"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      mask="url(#viMask)"
    />
  </svg>
</div>


      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          {/* Hero Landing Section */}
          <div className="landing relative w-full h-screen bg-black overflow-hidden">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 flex justify-between items-center">
              <div className="logo flex gap-7">
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
              {/* <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[10rem] leading-none">Software</h1>
                <h1 className="text-[10rem] leading-none">Engineer</h1>
                <h2 className="text-[3rem] text-center">Buffalo, NY · tarvindraju@gmail.com</h2>
              </div> */}
              <div className="text text-white flex flex-col gap-4 items-center absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg] text-center">
  <h1 className="text-[10rem] leading-none">Software</h1>
  <h1 className="text-[10rem] leading-none">Engineer</h1>
  <p className="text-xl mt-4 text-white font-light tracking-wide italic">
    Engineering smart systems & sleek experiences with React, Node, and a whole lot of cheat codes.
  </p>

</div>

              <img ref={characterRef} className="absolute character -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg] z-10" src="./girlbg.png" alt="character" />
            </div>
            {/* <div className="btmbar text-white absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">Scroll to explore</h3>
              </div>
            </div> */}
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent flex items-center justify-between">
  <div className="flex gap-4 items-center">
    <i className="text-4xl ri-arrow-down-line"></i>
    <h3 className="text-xl font-[Helvetica_Now_Display]">Scroll to explore</h3>
  </div>
  <div className="flex gap-6">
    <a href="https://github.com/arvindrajut" target="_blank" rel="noopener noreferrer">
      <img
        src="./ps5.png"
        alt="GitHub"
        className="h-[55px] hover:scale-110 transition-transform"
      />
    </a>
    <a href="https://linkedin.com/in/tadiarvindraju" target="_blank" rel="noopener noreferrer">
      <img
        src="./xbox.png"
        alt="LinkedIn"
        className="h-[55px] hover:scale-110 transition-transform"
      />
    </a>
  </div>
</div>

          </div>

          {/* Sections */}
          <div className="bg-black text-white px-20">
<FeaturedProjects />

<AboutMe />

            <section id="skills" className="py-24">
              <h2 className="text-5xl mb-6">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-lg">
                <span>JavaScript</span><span>TypeScript</span><span>React</span><span>Next.js</span><span>Node.js</span><span>Express</span><span>Redux</span><span>GraphQL</span><span>MongoDB</span><span>MySQL</span><span>Drizzle ORM</span><span>Auth0</span><span>Jest</span><span>CI/CD</span><span>Figma</span>
              </div>
            </section>

            <section id="experience" className="py-24">
              <h2 className="text-5xl mb-6">Experience</h2>
              <div className="space-y-8">
                <div><h3 className="text-3xl">RND4IMPACT INC.</h3><p className="text-lg">React/Node Engineer | Sep 2024 – Mar 2025</p><p className="text-md">Integrated Plaid API, built financial dashboards, automated sync jobs with cron.</p></div>
                <div><h3 className="text-3xl">Jio Platforms Limited</h3><p className="text-lg">Software Engineer | Jun 2021 – Dec 2022</p><p className="text-md">Built REST APIs in Express, CI/CD on Azure, and frontend in React.</p></div>
              </div>
            </section>

            <section id="education" className="py-24">
              <h2 className="text-5xl mb-6">Education</h2>
              <ul className="list-disc list-inside text-xl">
                <li>Master’s in CS – University at Buffalo (2023–2024)</li>
                <li>Bachelor’s in CS – VIT (2017–2021)</li>
              </ul>
            </section>

            <section id="contact" className="py-24">
              <h2 className="text-5xl mb-6">Contact</h2>
              <p className="text-xl">📧 tarvindraju@gmail.com</p>
              <p className="text-xl">🔗 <a href="https://linkedin.com/in/tadiarvindraju" className="underline">LinkedIn</a></p>
              <p className="text-xl">📄 <a href="./ArvindRajuTadi_resume.pdf" download className="underline">Download Resume</a></p>
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
