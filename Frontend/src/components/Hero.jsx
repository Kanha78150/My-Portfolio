import { TbAsterisk } from "react-icons/tb";
import { FaArrowDownLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <section className="w-full lg:h-[100%] h-[95%] relative">
      <div className="flex justify-center items-center w-full mb-4">
        <div className="flex justify-center items-center gap-1.5 text-center">
          <TbAsterisk className="text-3xl md:text-5xl lg:text-8xl font-normal text-[#151515]" />
          <h1 className="text-3xl md:text-5xl lg:text-[80px] sm:text-center font-normal text-[#151515] w-full">
            I’m Bholasankar Nanda
          </h1>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row justify-between items-center w-full">
        <h3 className="text-xl md:text-xl lg:text-2xl font-medium text-[#151515] lg:w-[50%] md:w-[50%] w-full leading-[38px] md:leading-[32px] lg:leading-[38.4px] lg:text-left text-left lg:pl-14 px-6 lg:mt-0 mt-5">
          With over 3 years of experience and a passion for solving problems
          through code, I design and build full-stack solutions that balance
          creativity, functionality, and user-focused design
        </h3>
        <h2 className="lg:w-[50%] md:w-[50%] w-full lg:text-8xl md:text-6xl text-5xl font-bold text-[#151515] text-center lg:text-center md:text-center">
          A developer
        </h2>
      </div>
      <div className="flex justify-center items-center w-full h-auto">
        <h1 className="lg:text-[90px] md:text-[80px] text-[50px] font-normal text-[#151515] lg:text-center text-center">
          lives by code.
        </h1>
      </div>
      <div className="w-full flex justify-between items-center font-medium text-[#151515] lg:px-11 px-3 lg:mt-0 mt-5">
        <h4 className="text-[24px]">Featured work</h4>
        <div>
          <h4 className="text-[18px] flex justify-center items-center">
            Scroll <FaArrowDownLong className="text-[18px]" />
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Hero;
