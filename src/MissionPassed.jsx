// MissionPassed.jsx — Fullscreen GTA Style Quick Info Overlay

import React, { useEffect, useState } from "react";
import gsap from "gsap";

const MissionPassed = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 10
      ) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (show) {
      const tl = gsap.timeline();
      tl.fromTo(
        ".mission-container",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      ).to(".mission-container", {
        opacity: 0,
        delay: 3,
        duration: 1,
        ease: "power2.in",
      });
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="mission-container fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center text-center z-[9999]">
      <h1 className="text-yellow-400 text-6xl md:text-8xl font-black tracking-widest mb-6 animate-pulse">
        MISSION PASSED!
      </h1>
      <p className="text-white text-2xl md:text-3xl tracking-wide max-w-2xl">
        React & Node.js Engineer crafting stylish, high-performance web apps with fintech & AI flavor. Fast, focused, always deployed.
      </p>
    </div>
  );
};

export default MissionPassed;