// eslint-disable-next-line no-unused-vars
import React from "react";
import developer from "../developer.png";
import { Typewriter } from "react-simple-typewriter";

// eslint-disable-next-line react/prop-types
const Hero = ({darkMode}) => {
  return (
    <div
      id="home"
      className={`flex w-full md:flex-row flex-col h-[91vh] ${darkMode ? 'bg-[#1e0c1f]' : 'bg-[#515983]'}  md:justify-between justify-center md:px-20 px-5 items-center `}
    >
      <div>
        <h1 className="capitalize text-[30px] lg:text-[45px] sm:text-[30px] text-[#fff]">
          Hi, My name is{" "}
          <span className="text-[#4386bd] font-semibold">Gm</span>
          <br />
          and i am a passionate
          <br />
          <h1 className="text-[#308ca8] font-bold">
            <Typewriter
              words={[
                "Coder",
                "Web app developer",
                "Mobile app developer",
                "react developer",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        </h1>
      </div>
      <div>
        <img src={developer} className="z-[10] relative w-[300px] lg:w-[450px]" alt="" />
        <div className="absolute top-0 pink__gradient z-[0] w-[20%] h-[200px]" />
      <div className="absolute bottom-20 white__gradient z-[0] w-[10%] h-[100px] rounded-full" />
      <div className="absolute bottom-20 right-20 blue__gradient z-[0] w-[30%] h-[300px] rounded-full" />
      </div>
    </div>
  );
};

export default Hero;
