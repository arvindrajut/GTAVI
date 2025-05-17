// Education.jsx — GTA VI Style Education Timeline

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    school: "University at Buffalo",
    degree: "Master’s in Computer Science",
    period: "2023 – 2024"
  },
  {
    school: "VIT University",
    degree: "Bachelor’s in Computer Science",
    period: "2017 – 2021"
  }
];

const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".edu-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="bg-black text-white py-32 px-10 md:px-32"
    >
      <h2 className="text-5xl text-center mb-16 font-bold tracking-wide text-cyan-400">
        Education
      </h2>
      <div className="space-y-12 max-w-4xl mx-auto">
        {education.map((edu, i) => (
          <div
            key={i}
            className="edu-item border-l-4 border-pink-500 pl-6 py-4 relative"
          >
            <div className="text-xl text-white font-semibold">{edu.school}</div>
            <div className="text-lg italic text-pink-400">{edu.degree}</div>
            <div className="text-sm text-gray-400">{edu.period}</div>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center text-xl italic text-pink-500">
        "XP unlocked. Skills upgraded."
      </div>
    </section>
  );
};

export default Education;