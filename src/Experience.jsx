// Experience.jsx — GTA VI Style Experience Timeline

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "RND4IMPACT INC.",
    role: "React/Node Engineer",
    period: "Sep 2024 – Mar 2025",
    details: "Integrated Plaid API, built fintech dashboards, automated sync jobs with cron."
  },
  {
    company: "Jio Platforms Limited",
    role: "Software Engineer",
    period: "Jun 2021 – Dec 2022",
    details: "Built REST APIs in Express, CI/CD on Azure, and frontend in React."
  }
];

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".exp-card",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative bg-black text-white py-32 px-10 md:px-32"
    >
      <h2 className="text-5xl text-center mb-16 font-bold tracking-wide text-pink-500">
        Work Experience
      </h2>
      <div className="space-y-12 max-w-4xl mx-auto">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="exp-card bg-[#111] border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-pink-500/30 transition duration-300"
          >
            <h3 className="text-3xl font-semibold text-cyan-300 mb-1">{exp.company}</h3>
            <h4 className="text-xl italic text-white mb-1">{exp.role}</h4>
            <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
            <p className="text-lg text-gray-300">{exp.details}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center text-xl text-cyan-400 italic">
        "Every mission completed leaves a trace."
      </div>
    </section>
  );
};

export default Experience;