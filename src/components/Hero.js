import React from "react";

const Hero = () => {
  return (
    <header class="">
    <div class="w-full bg-center bg-cover bg-hero">
      <div class="flex items-center justify-center w-full h-full py-20 md:py-44">
        <div class="text-center">
          <div class="container px-4 mx-auto">
            <div class="w-full mx-auto text-center">
              <h2 class="bg-white bg-opacity-60 mt-16 md:mt-8 mb-14 py-0 md:py-5 text-2xl md:text-4xl lg:text-5xl text-black font-monospace hover:bg-hover-color hover:text-white">
                Hi, <br/> I am Efnan <br/> Jr. Frontend Developer
              </h2>
              <a href="/#about" className="font-monospace max-w-xl md:max-w-3xl mx-auto text-2xl btn bg-alien text-black px-6 py-3 hover:bg-hover-color  hover:text-white">
              So, who am I?             </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Hero;

