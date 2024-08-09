"use client";

import React from 'react';
import Image from 'next/image';
import resumeGeniusImg from '../utils/resume-genius.png';
import examScriptImg from '../utils/exam-script-evaluation-system.png';
import ecommerceImg from '../utils/ecommerce-website.png';
// import chatterBoxImg from '../utils/chatter-box.png';

function Third() {
  const projects = [
    {
      name: "RESUME GENIUS",
      image: resumeGeniusImg,
      link: "https://next-resume-builder-delta.vercel.app/"
    },
    {
      name: "EXAM-SCRIPT EVALUATION SYSTEM",
      image: examScriptImg,
      link: "https://exam-scripts-evaluation-system.netlify.app/"
    },
    {
      name: "ECOMMERCE WEBSITE",
      image: ecommerceImg,
      link: "https://ecommerce-avishek.netlify.app"
    },
    {
      name: "CHATTER BOX",
      // image: chatterBoxImg,
      link: "https://chatter-box23.netlify.app"
    }
  ];

  const handleRedirect = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="bg-black flex flex-col items-center justify-center mt-[5rem]  text-white max600:mt-[5rem]">
      <h1 className="text-[6vw] font-bold rainbow-text-animation tracking-wide mb-10 max600:text-[2.3rem] max600:text-center">PERSONAL PROJECT</h1>
      <div className="space-y-4 bebas w-full px-20 relative max600:px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative border-t-2 border-gray-600 pt-6 text-[4rem] cursor-pointer tracking-widest max"
            onClick={() => handleRedirect(project.link)}
          >
            <div className='max600:text-[2rem]'>{project.name}</div>
            {project.image && (
              <div className="absolute left-[70%] z-50 -top-10 hidden ml-4 mt-2 bg-[#15957E] slideIn text-white text-sm p-1 rounded group-hover:block max600:w-[60vw] max600:-top-44 max600:left-0">
                <Image src={project.image} alt={project.name} className="object-cover rounded" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Third;
