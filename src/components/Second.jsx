"use client";

import React from 'react';
import Image from 'next/image';
import tree from '../utils/brain.png';
import skills from '../utils/skills.svg';
import { Circle } from 'rc-progress';

const skillScores = [
  { name: 'Docker', score: 80 },
  { name: 'React', score: 90 },
  { name: 'Next.js', score: 85 },
  { name: 'JavaScript', score: 90 },
  { name: 'Serverless', score: 95 },
  { name: 'Python', score: 60 },
  { name: 'Node.js', score: 85 },
  { name: 'Tailwind CSS', score: 90 },
  { name: 'MongoDB', score: 85 },
  { name: 'Firebase', score: 65 },
  { name: 'Kubernetes', score: 50 },
  { name: 'Git', score: 90 },
];

const circularSkills = skillScores.slice(0, 6);  // First 6 skills as circular
const barSkills = skillScores.slice(6);  // Last 6 skills as bar

function Gauge({ name, score }) {
  return (
    <div className="relative flex flex-col items-center justify-center w-[7rem] mx-4 my-4 max600:w-[4rem]">
      <Circle
        percent={score}
        strokeWidth={6}
        strokeColor="#FBC02D"
        trailColor="#424242"
        className="w-full"
      />
      <span className="absolute top-1/3 text-[#ffffff] text-[1.3rem] left-1/3 max600:text-[1rem] max600:top-1/4 max600:left-1/4 tracking-tighter">{score}%</span>
      <span className="mt-2 text-[#e0e0e0] text-sm max600:text-[0.8rem] max600:tracking-tight">{name}</span>
    </div>
  );
}

function Bar({ name, score }) {
  return (
    <div className="flex items-center w-full mb-4">
      <span className="text-[#e6e6e6] w-1/3 text-right pr-4 max600:text-[0.8rem] max600:tracking-tight">{name}</span>
      <div className="w-2/3 h-2 bg-gray-300 rounded overflow-hidden ml-2">
        <div
          className="h-full bg-purple-600"
          style={{ width: `${score}%` }}
        />
      </div>
      <span className="text-white ml-2 w-1/12">{score}%</span>
    </div>
  );
}

function Second() {
  return (
    <div className="bg-black text-center inter text-[6vw] font-[800] capitalize tracking-[4px] max600:mt-10 max600:text-[8vw]">
      <div className="text-[#e0e0e0]">
        <span className="max600:hidden">
          Fueling <span className="text-stroke poppins">Ideas </span> with My,
        </span>
        <span className="hidden max600:inline-block bebas max600:text-[2.7rem]">
          Ideas & Tech Fuel
        </span>
      </div>
      <div className="text-[#13866c] -mt-14 max600:-mt-4">
        <span className="max600:hidden rainbow-text-animation">
          Technological Brain
        </span>
        <span className="hidden max600:inline-block bebas max600:text-[2.7rem] rainbow-text-animation">
          My Tech Mind
        </span>
      </div>
      <div className="w-full relative">
        <Image
          src={tree}
          className="w-[35vw] mx-auto mt-[4rem] max600:w-[55vw] max600:mt-[2rem]"
          alt="Brain"
        />
        <div className="absolute -top-14 w-full">
          <Image
            src={skills}
            className="w-[48vw] mx-auto fadeIn delay max600:w-[90vw] max600:mt-[2rem]"
            alt="Skills"
          />
        </div>
      </div>
      <div className="flex justify-evenly items-center mt-8 max600:flex-col max600:justify-center">
        <div className="flex flex-col items-end w-1/2 pr-4 text-[1.2rem] max600:text-[0.8rem] max600:w-[90vw] max600:tracking-tight">
          {barSkills.map((skill) => (
            <Bar key={skill.name} name={skill.name} score={skill.score} />
          ))}
        </div>
        <div className="flex gap-8 flex-wrap justify-center w-[30vw] max600:w-[90vw] max600:gap-4">
          {circularSkills.map((skill) => (
            <Gauge key={skill.name} name={skill.name} score={skill.score} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Second;
