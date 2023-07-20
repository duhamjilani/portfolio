import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
 
  return (
    <div name="home" className="w-full h-screen bg-[#444b52]">
      {/* Container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className=' text-white font-bold sm:text-3xl text-2xl'> Hello, My Name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-blue-500 py-3'> Duha Jilani</h1>
        <h2 className='text-4xl sm:text-5xl font-bold text-[#c5cacf]'> I'm a Full Stack Developer</h2>
        <p className=' text-[#e8edf3] py-4 max-w-[700px]'>Skilled developer with expertise in HTML, CSS, React Quick learner , problem-solving, 
delivering high-quality web applications.
 Excellent communication skills and a track record of creating responsive web designs.

Detail-oriented developer experienced in  React and the MERN stack. Demonstrates organizational 
skills and a creative mindset in delivering exceptional web applications</p>
<div>
    <button className=' group flex items-center text-white border-2 px-6 my-2 py-3 hover:bg-blue-500 hover:border-blue-500'  
       > View Work
     <span className=' group-hover:rotate-90 duration-300'>
    <HiArrowNarrowRight className='ml-3 '/>
   
    </span>    
   
    </button>
</div>
      </div>
    </div>
  );
}

export default Home;
