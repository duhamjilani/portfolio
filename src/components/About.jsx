import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#444b52] text-white">
      <div className="flex justify-center flex-col items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-3 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl  inline border-b-2 border-blue-500">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full  sm:grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-left text-2xl font-semibold ">
            <p>
              I studied Computer Science at Hashemite University and graduated
              in 2023 with a GPA of 3.01 (very good). I received training at
              Orange Coding Academy as a Full Stack Mobile & Web Developer
            </p>
          </div>
          <div className="my-3 text-xl ">
            <p>
              Accomplished Full Stack Developer with a proven track record of 10
              successful projects spanning diverse technologies. Effective Scrum
              Master, driving agile methodologies for seamless project
              management. Proficient in crafting user-friendly interfaces using
              HTML, CSS, JavaScript, Bootstrap, and delivering dynamic web
              applications through React's power. A collaborative team player
              committed to optimizing user experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
