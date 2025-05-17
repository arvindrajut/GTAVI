// FeaturedProjects.jsx — Scrollable GSAP Enhanced Projects Section

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "PrepAI",
    subtitle: "AI-powered interview platform",
    description:
      "Built with Gemini Pro, Redux Toolkit, and NLP modules to simulate real-world interviews. Includes audio analysis, live feedback, and resume parsing.",
    stack: ["React", "Redux", "Gemini", "Node.js"],
    image: "./sky.png",
  },
  {
    title: "DevDocer",
    subtitle: "Smart document reader",
    description:
      "Semantic search powered by Pinecone and OpenAI. Stripe-based billing flow, PDF parsing with annotations, and JWT-secured document access.",
    stack: ["React", "Stripe", "Pinecone", "Next.js"],
    image: "./sky.png",
  },
  {
    title: "Chainfund",
    subtitle: "Ethereum DApp",
    description:
      "A token-voting smart contract app with MetaMask auth, live wallet sync, and dynamic funding rounds visualized in real time.",
    stack: ["Solidity", "Ethers.js", "React", "Tailwind"],
    image: "./sky.png",
  },
  {
    title: "RND4Impact",
    subtitle: "Fintech dashboard",
    description:
      "Node.js backend with Plaid sync, cron-based data refresh, and a dashboard for income/expense summaries and alert notifications.",
    stack: ["Node.js", "Plaid API", "React", "node-cron"],
    image: "./sky.png",
  },
];

const FeaturedProjects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".project-card");

    sections.forEach((section, i) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-black text-white px-10 md:px-32 py-32" id="projects">
      <h2 className="text-6xl mb-20 text-center font-bold tracking-wide">
        Featured Projects
      </h2>
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card bg-[#111] rounded-2xl p-8 shadow-xl flex flex-col justify-between hover:scale-[1.02] transition-transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover rounded-xl mb-6"
            />
            <h3 className="text-3xl font-bold mb-1">{project.title}</h3>
            <h4 className="text-xl italic text-pink-400 mb-4">{project.subtitle}</h4>
            <p className="text-lg leading-relaxed text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full border border-gray-500 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
