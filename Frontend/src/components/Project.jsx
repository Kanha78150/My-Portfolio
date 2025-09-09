import React from "react";
import project1Img from "../assets/project1.avif";
const Project = () => {
  return (
    <section className="w-full h-full px-4 sm:px-8 md:px-12 lg:pb-0 md:pb-0 py-0">
      {/* Border */}
      <div className="w-full border-b-2 border-[#151515] mt-4"></div>
      {/* Wrapper div */}
      <div className="w-full h-full flex justify-between items-center flex-col-reverse lg:flex-row md:flex-row">
        {/* Left div */}
        <div className="w-2/5 h-full flex justify flex-col">
          <div className="flex justify-start w-full h-full">
            <p>Hello project</p>
          </div>
          <div>
            <p>Making a barber business more convenient and visible</p>
            <button>Web Design</button>
          </div>
        </div>

        {/* Right div */}
        <div className="w-3/5 h-1/4">
          <img src={project1Img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
