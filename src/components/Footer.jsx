import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#000000] tracking-wider border-t-4 mt-10 border-[#13866c] text-white py-10">
      <div className="ml-10 flex flex-col">
        <div className="mb-6 bebas md:mb-0 flex items-center justify-around max600:flex-col">
          <div>
            <h3 className="text-[3rem] font-bold mb-2 tracking-wider text-[#13866c] ">Contact</h3>
            <p className="text-[2rem] flex items-center gap-2 max600:text-[1.3rem]">Email: <a href="mailto:avishek.mishra@example.com" className="inter text-[1.5rem] max600:text-[1.3rem]">avishekmishra56@gmail.com</a></p>
            <p className="text-[2rem] max600:text-[1.3rem]">Phone: +917735227398</p>
          </div>
          <div className='flex gap-10 max600:m-auto max600:w-full max600:mt-4'>
            <a href="mailto:avishekmishra56@gmail.com?subject=Feedback" className="mt-2 border-2 tracking-widest text-[1.7rem] border-[#13866c] text-white font-bold py-2 px-4">
              Feedback
            </a>
            <a href="mailto:avishekmishra56@gmail.com?subject=Job Opportunity" className="mt-2 border-2 tracking-widest text-[1.7rem] border-[#13866c] text-white font-bold py-2 px-4">
              Offer Me
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center max600:mb-6 max600:mt-0">
        <p className="text-lg">© 2024 Avishek Mishra. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;