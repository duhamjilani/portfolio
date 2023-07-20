import React from "react";
import Html from "../assets/html.png";
import Aws from "../assets/aws.png";
import Css from "../assets/css.png";
import Github from '../assets/github.png';
import Javascript from "../assets/javascript.png";
import Mongo from "../assets/mongo.png";
import Node from "../assets/node.png";
import React1 from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

function Skills() {
  return (
    <div name="skills" className=" w-full h-screen bg-[#444b52] text-white">
      {/*Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className=" text-4xl py-4 border-b-2 border-blue-500 inline">
            Skills
          </p>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-3 gap-6 text-center py-8">
          <div className="shadow-md shadow-[#495058] hover:scale-110 duration-500 my-3">
            <img className="w-20 mx-auto" src={Html} alt="html" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#495058] hover:scale-110 duration-500 my-3">
            <img className="w-20 mx-auto" src={Css} alt="html" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#495058] hover:scale-110 duration-500 my-3">
            <img className="w-20 mx-auto" src={Mongo} alt="html" />
            <p className="my-4">MONGO</p>
          </div>
          <div className="shadow-md shadow-[#495058] hover:scale-110 duration-500 my-3">
            <img className="w-20 mx-auto" src={Tailwind} alt="html" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#495058] hover:scale-110 duration-500 my-3">
            <img className="w-20 mx-auto" src={Aws} alt="html" />
            <p className="my-4">AWS</p>
          </div>
          <div className="shadow-md shadow-[#495058] hover:scale-110 duration-500 my-3">
            <img className="w-20 mx-auto" src={React1} alt="html" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#495058] hover:scale-110 duration-500 my-3">
            <img className="w-20 mx-auto" src={Github} alt="html" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#495058] hover:scale-110 duration-500 my-3">
            <img className="w-20 mx-auto" src={Javascript} alt="html" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#495058] hover:scale-110 duration-500 my-3">
            <img className="w-20 mx-auto" src={Node} alt="html" />
            <p className="my-4">NODE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
