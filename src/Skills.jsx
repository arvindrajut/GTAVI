// Skills.jsx — Animated Grid Skills Section with GTA VI Flair

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "JavaScript", "TypeScript", "React.js", "Next.js",
  "Node.js", "Express.js", "Redux", "GraphQL",
  "MongoDB", "MySQL", "Drizzle ORM", "Auth0",
  "Jest", "React Query", "Tailwind CSS", "Figma",
  "Git", "CI/CD", "Vercel", "Plaid API"
];

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".skill-chip",
      { opacity: 0, y: 20, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      id="skills"
      className="relative bg-black text-white py-32 px-10 md:px-32 min-h-screen"
    >
      <h2 className="text-5xl text-center mb-16 font-bold tracking-wide text-cyan-400">
        Skills & Tools
      </h2>
      <div
        ref={containerRef}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            className="skill-chip px-5 py-3 text-lg text-white border border-gray-500 rounded-full text-center hover:bg-cyan-600 hover:scale-105 transition-transform shadow-md"
          >
            {skill}
          </div>
        ))}
      </div>
      <div className="mt-16 text-center text-pink-500 italic text-xl">
        "Loadout optimized. Mission-ready."
      </div>
    </section>
  );
};

export default Skills;
