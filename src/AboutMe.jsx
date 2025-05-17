// AboutMe.jsx — Animated GTA VI-Inspired About Section

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-black text-white py-32 px-10 md:px-32"
    >
      <div
        ref={contentRef}
        className="max-w-4xl mx-auto text-center flex flex-col gap-6"
      >
        <h2 className="text-5xl font-bold tracking-wide text-pink-400">About Me</h2>
        <p className="text-xl leading-relaxed text-gray-300">
          I'm a software engineer blending logic and aesthetics to craft sleek, performance-driven web experiences. With 2+ years building fintech dashboards, AI tools, and full-stack apps, I specialize in React, Node.js, and web animation magic. Whether it’s syncing Plaid data or designing a UI worthy of Rockstar North, I build systems that feel alive.
        </p>
        <div className="mt-4 text-lg italic text-cyan-300">
          "Code is the cheat code to the modern world."
        </div>
      </div>
    </section>
  );
};

export default AboutMe;