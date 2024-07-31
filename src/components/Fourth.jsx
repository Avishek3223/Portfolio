"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const data = {
  labels: [
    'Jun 23', 'Jul 23', 'Aug 23', 'Sep 23',
    'Oct 23', 'Nov 23', 'Dec 23',
    'Jan 24', 'Feb 24', 'Mar 24',
    'Apr 24', 'May 24', 'Jun 24', 'Jul 24'
  ],
  datasets: [
    {
      label: 'Personal Growth',
      data: [70, 75, 80, 85, 82, 88, 92, 90, 93, 95, 94, 96, 98, 100],
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

const config = {
  type: 'line',
  data: data,
  options: {
    scales: {
      y: {
        ticks: {
          display: false, // This will hide the y-axis labels
        },
        grid: {
          display: false, // Optionally, hide the y-axis grid lines
        },
      },
    },
  },
};


const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Personal Growth Over Time',
    },
  },
};

const Fourth = () => {
  return (
    <div className="w-[90vw] mx-auto mt-[7rem] max600:mt-[3rem]">
      <h1 className="text-[6vw] text-center font-bold rainbow-text-animation tracking-wide mb-8 max600:text-[2.3rem] m-auto">WORK EXPERIENCE</h1>
      <div className='relative'>
        <div className="flex flex-col items-center">
          {/* Title and details */}
          <div className="w-[80vw] bebas flex justify-between items-center pb-2 mb-4">
            <h2 className="text-[2rem] -mt-[2rem] text-[#13866c] ">INTELLIGENT CLOUD APPLICATIONS</h2>
            <div className="flex flex-col space-x-4 text-right ">
              <span className="text-[1.3rem]">REMOTE</span>
              <span className="text-[1.3rem]">JUNE-2023 TO PRESENT</span>
            </div>
          </div>
          <div className='absolute top-7 w-[80vw] h-[0.1rem] bg-[#d1d1d1]'></div>
        </div>
      </div>
      <div className="flex justify-between w-[80vw] mx-auto">
        {/* Left side points */}
        <div className="w-1/2 p-4">
          <ul className="list-disc pl-5 source text-[1.2rem] text-justify space-y-2">
            <li>Developed an admin website for performance tracking, including features like monthly and yearly income reports and member tracking using Chart.js, resulting in a 25% improvement in data accessibility.</li>
            <li>Contributed to a template-based website creation process, reducing development time for new sites by 40%.</li>
            <li>Integrated Twilio for class reminder notifications, increasing user engagement by 15%, and Razorpay for a single-page payment system, which improved payment processing speed by 20%.</li>
            <li>Optimized code for quicker response times, reducing average load times by 30% and enhancing user experience.</li>
            <li>Troubleshot and resolved complex issues during development and operation, decreasing bug resolution time by 50%.</li>
          </ul>
        </div>
        {/* Right side personal growth graph */}
        <div className="w-[45%] p-4 flex justify-center items-center">
          <div className="w-full">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
