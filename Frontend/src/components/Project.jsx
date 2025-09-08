import React from "react";
import project1Img from "../assets/project1.avif";
const Project = () => {
  return (
    <section className="w-full h-full px-4 sm:px-8 md:px-12 lg:pb-0 md:pb-0 py-0 border-2 border-black">
      <div className="w-full border-b-2 border-[#151515] mt-4"></div>
      <div className="w-full h-full flex justify-between items-center flex-col-reverse lg:flex-row md:flex-row border-2 border-amber-600">
        <div className="w-2/5 border-2 border-black h-full flex justify-between flex-col">
          <div className="">
            <p>Hello project</p>
          </div>
          <div>
            <p>Making a barber business more convenient and visible</p>
            <button>Web Design</button>
          </div>
        </div>
        <div className="w-3/5 h-1/4">
          <img src={project1Img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
