// GTA 6 Inspired Developer Portfolio (Resume-Integrated) with Character Depth Animation

import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

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

    // Character starts forward, then fades behind
    gsap.to(".character", {
      scale: 1.4,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: 0.5,
      ease: "Expo.easeInOut",
      zIndex: 0,
    });

    gsap.to(".character", {
      zIndex: -1,
      duration: 1,
      delay: 2.5,
    });

    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", { x: `${xMove * 0.4}%` });
      gsap.to(".sky", { x: xMove });
      gsap.to(".bg", { x: xMove * 1.7 });
    });
  }, [showContent]);

  // Toggle character z-index on click or touch
  useEffect(() => {
    const charImg = characterRef.current;
    if (!charImg) return;

    const bringForward = () => {
      gsap.to(charImg, { zIndex: 10, duration: 0.5 });
    };

    charImg.addEventListener("click", bringForward);
    charImg.addEventListener("touchstart", bringForward);

    return () => {
      charImg.removeEventListener("click", bringForward);
      charImg.removeEventListener("touchstart", bringForward);
    };
  }, [characterRef]);

  return (
    <>
      {/* Splash Screen */}
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text x="50%" y="50%" fontSize="220" textAnchor="middle" fill="white" dominantBaseline="middle" fontFamily="Arial Black">
                  AR
                </text>
              </g>
            </mask>
          </defs>
          <image href="./bg.png" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" mask="url(#viMask)" />
        </svg>
      </div>

      {/* Main Content */}
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            {/* Top Navbar */}
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 flex justify-between">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl text-white">Arvind Raju Tadi</h3>
              </div>
              <span className="text-white text-xl">React · Node.js · AI · DeFi</span>
            </div>

            {/* Hero Section */}
            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover" src="./sky.png" alt="sky" />
              <img className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover" src="./bg.png" alt="bg" />

              <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[10rem] leading-none">Software</h1>
                <h1 className="text-[10rem] leading-none">Engineer</h1>
                <h2 className="text-[3rem] text-center">Buffalo, NY · tarvindraju@gmail.com</h2>
              </div>

              <img
                ref={characterRef}
                className="absolute character -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg] z-10"
                src="./girlbg.png"
                alt="character"
              />
            </div>

            {/* Footer CTA */}
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">Scroll to explore projects & skills</h3>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="w-full min-h-screen bg-black text-white px-20 py-32">
            <h2 className="text-6xl mb-10">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-4xl">PrepAI - AI Mock Interviews</h3>
                <p className="mt-4 text-xl">AI-powered mock interview platform using Gemini AI, SSR, Redux, and NLP for tailored user feedback.</p>
              </div>
              <div>
                <h3 className="text-4xl">DevDocer - AI PDF Reader</h3>
                <p className="mt-4 text-xl">Interactive document reader using Pinecone, vector embeddings, and secure Stripe-auth workflows.</p>
              </div>
              <div>
                <h3 className="text-4xl">Chainfund - DeFi DApp</h3>
                <p className="mt-4 text-xl">Blockchain-based DeFi app on Ethereum using ERC standards, asset tokenization, and smart contracts.</p>
              </div>
              <div>
                <h3 className="text-4xl">RND4Impact - Fintech Sync</h3>
                <p className="mt-4 text-xl">React + Node-based financial dashboard with Plaid integration and cron-scheduled backend sync.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;