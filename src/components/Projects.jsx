import React from "react";
import GitHub from "../assets/download.png";

import Jewelery from "../assets/jewellry.jpg";
function Projects() {
  return (
    <div
      name="projects"
      className=" w-full md:h-screen bg-[#444b52] text-white"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl py-4 border-b-2 border-blue-500 inline">
            Projects
          </p>
        </div>
        <div>
          {/*Container */}
          <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-4">
            {/*Grid item */}
            <div
              style={{ backgroundImage: `url(${GitHub})` }}
              className="shadow-lg shadow-[#495058] group container rounded-md flex justify-center items-center mx-auto content-div mt-3 hover:scale-110 duration-500 "
            >
              {/*Hover Effect */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font-bold text-white tracking-wider">
                  React JS Application Github Finder
                </span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/duhamjilani/githubFinder.git">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Jewelery})` }}
            className="shadow-lg shadow-[#495058] group container rounded-md flex justify-center items-center mx-auto content-div mt-3 hover:scale-110 duration-500"
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application Jewelry Store
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Mohammadkay/jewelry_Store.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
