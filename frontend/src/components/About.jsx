import React from "react";

const About = () => {
  return (
    <div className="py-32">
      <div className="conatiner w-[1144px] mx-auto">
        <div className="about_main flex gap-20 items-center">
          <div className="about_left">
            {/* <img src="./images/Image.jpg" alt="image" /> */}
            {/* <img src="./src/assets/image.jpeg" alt="" /> */}
          </div>
          <div className="about_right">
            <div>
              <div className="flex items-center  gap-2">
                <img src="./images/Frame.png" alt="Frame" />
                <p className="text-base font-[jost]">About Me</p>
              </div>
             
              <div>
                 <div className=" mt-3">
                <h1 className=" leading-[86px] text-7xl font-semibold font-[jost] text-start">
                  I Can Design Anything You Want
                </h1>
              </div>

              <div className="w-[649px] mt-11">
                <p className="text-lg font-[jost] text-left text-[#606060]">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.</p>
               </div>
              
              <div className="flex gap-14 mt-9">
                <div className="flex items-center">
                  <img src="../../public/images/Icon.png" alt="icon" />
                  <div className="flex flex-col items-start">
                    <p className="text-xl font-semibold text-orange-400">350+</p>
                    <p className="text-xl font-semibold">Complete Project</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <img src="./images/Icon (1).png" alt="icon" />
                  <div className="flex flex-col items-start">
                    <p className="text-xl font-semibold text-orange-400">16+</p>
                    <p className="text-xl font-semibold">Year of experience</p>
                  </div>
                </div>

                
              </div>


                <button className="text-white text-left text-xl py-4 w-[226px] flex justify-center font-[jost] bg-orange-500 rounded-md mt-12">Download My CV</button>
              </div>
            


            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
