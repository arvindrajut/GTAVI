// Contact.jsx — GTA VI Inspired Contact Terminal

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Contact = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      terminalRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
    );
  }, []);

  return (
    <section
      id="contact"
      className="bg-black text-white py-32 px-10 md:px-32 flex justify-center items-center min-h-screen"
    >
      <div
        ref={terminalRef}
        className="w-full max-w-3xl bg-[#111] border border-gray-700 rounded-2xl p-10 shadow-xl text-green-400 font-mono text-lg"
      >
        <div className="mb-6">
          <span className="text-pink-500">&gt; </span>
          Initiating Contact Protocol...
        </div>
        <div className="mb-4">
          <span className="text-pink-500">📧 Email: </span>
          <a
            href="mailto:tarvindraju@gmail.com"
            className="underline hover:text-white"
          >
            tarvindraju@gmail.com
          </a>
        </div>
        <div className="mb-4">
          <span className="text-pink-500">🔗 LinkedIn: </span>
          <a
            href="https://linkedin.com/in/tadiarvindraju"
            className="underline hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            /tadiarvindraju
          </a>
        </div>
        <div className="mb-4">
          <span className="text-pink-500">💾 Resume: </span>
          <a
            href="./ArvindRajuTadi_resume.pdf"
            download
            className="underline hover:text-white"
          >
            Download PDF
          </a>
        </div>
        <div className="mt-8 text-pink-500 italic">
          "Signal sent. Awaiting response."
        </div>
      </div>
    </section>
  );
};

export default Contact;