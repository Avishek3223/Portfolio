import Image from 'next/image';
import React from 'react';
import firstName from '../utils/first-name.png';
import lastName from '../utils/last-name.png';
import avishek from '../utils/AVISHEK.png';
import about from '../utils/ABOUT.png';
import facebookIcon from '../utils/github.png';
import twitterIcon from '../utils/twitter-icon.png';
import instagramIcon from '../utils/instagram-icon.png';
import linkdin from '../utils/Linkdin-icon.png';

function First() {
  return (
    <div className='relative w-full flex h-screen justify-around items-center flex-wrap-reverse max600:h-auto'>
      <div className='flex items-center flex-col gap-20 max600:gap-0'>
        <div>
          <div className='fadeIn ml-2 text-[3rem] font-bold poppins text-[#E6E6E6] max600:text-[2rem] max600:w-[90%] max600:m-auto'>
            Hi 👋
          </div>
          <div className={`slideIn relative w-[30rem] flex justify-center items-center gap-3 border-b border-[#15957E] max600:w-[90%] max600:m-auto max600:-mb-10`}>
            <div className='text-[3rem] font-bold mb-1 text-[#E6E6E6] mr-3 max600:text-[2.1rem] poppins'>I&apos;m</div>
            <Image src={firstName} alt="First Name" className='mb-1 max600:w-[38vw]' />
            <Image src={lastName} alt="Last Name" className='mb-1 max600:w-[33vw] max600:mb-0' />
            <div className='absolute inter tracking-[1.3px] font-[600] text-[#c0c0c0] -bottom-3 right-0 border px-2 text-[1rem] border-[#15957E] rounded-[2px] bg-black max600:text-[0.7rem]'>Developer</div>
          </div>
        </div>
        <div className={`fadeIn delay flex gap-8 items-center justify-center max600:flex-col max600:gap-0`}>
          <Image src={about} alt="About Me" className='max600:-mt-10 max600:rotate-90' />
          <div className='max-w-[45rem] font-[600] inter text-[1.34rem] text-justify text-[#c9c9c9] max600:text-[0.8rem] max600:w-[90vw] max600:-mt-[6rem]'>
            <p>
              I am a <span className='text-[#00FFC2]'>Full-Stack Developer</span> with expertise in React.js, Next.js, Node.js, MongoDB, and AWS. I specialize in building <span className='text-[#00FFC2]'>scalable</span> web applications and <span className='text-[#00FFC2]'>optimizing</span> performance. I have <span className='text-[#00FFC2]'>developed</span> projects like an admin performance tracking site and a template-based website creation process, <span className='text-[#00FFC2]'>enhancing</span> data accessibility and <span className='text-[#00FFC2]'>reducing</span> development <span className='text-[#00FFC2]'>time</span>. My strong <span className='text-[#00FFC2]'>problem-solving</span> skills and <span className='text-[#00FFC2]'>collaborative</span> nature make me effective in cross-functional <span className='text-[#00FFC2]'>teams</span>. I am always ready to tackle new <span className='text-[#00FFC2]'>challenges</span> and <span className='text-[#00FFC2]'>contribute</span> to innovative solutions in the tech <span className='text-[#00FFC2]'>industry</span>.
            </p>
          </div>
        </div>
      </div>
      <div className={`slideIn delay relative vignette-bottom m-4 max600:-mb-[0.5rem] max600:mt-8`}>
        <Image src={avishek} alt="Avishek" />
      </div>

      {/* Social Media Sidebar */}
      <div className="fixed top-3/4 right-0 z-50 slideIn delay transform -translate-y-1/2 flex flex-col gap-4 p-2 bg-[#15957E] max600:top-1/4">
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <Image src={linkdin} alt="TikTok" className="w-[2.5rem] max600:w-6" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Image src={facebookIcon} alt="Facebook" className="w-[2.5rem] max600:w-6" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Image src={twitterIcon} alt="Twitter" className="w-[2.5rem] max600:w-6" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Image src={instagramIcon} alt="Instagram" className="w-[2.5rem] max600:w-6" />
        </a>
      </div>
    </div>
  );
}

export default First;
