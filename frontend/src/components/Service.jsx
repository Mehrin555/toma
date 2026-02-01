// import React from 'react'

// const Service = () => {
//   return (
//     <>
    
//     <section className='py-32'>
//         <div className='conatiner w-[1144px] mx-auto'>
//              <div className="flex justify-center items-center  gap-2">
//                 <img src="./images/Frame.png" alt="Frame" />
//                 <p className="text-base font-[jost]">My Service</p>
//               </div> 
//               <div className=" mt-1 uppercase flex justify-center items-center">
//                 <h1 className=" leading-[86px] text-7xl font-semibold font-[jost] text-start">
//                  Services I offer
//                 </h1>
//               </div>

//                 <div className='flex flex-wrap gap-2 items-center justify-center mt-10'>

//                     <div className='pt-[46px] pb-[46px] w-[270px] border-2 border-orange-300 '>
//                 <div className='flex flex-col gap-4 items-center justify-between '>
//                     <img src="./images/Group 17.png" alt="" />
//                     <h3 className='text-2xl font-semibold'>UI/UX Design</h3>
//                     <p className='text-base text-center text-[#606060] w-[252px]'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
//                 </div>
//               </div>

//               <div className='pt-[46px] pb-[46px] w-[270px] border-2 border-orange-300 '>
//                 <div className='flex flex-col gap-4 items-center justify-between '>
//                     <img src="./images/Group 17.png" alt="" />
//                     <h3 className='text-2xl font-semibold'>UI/UX Design</h3>
//                     <p className='text-base text-center text-[#606060] w-[252px]'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
//                 </div>
//               </div>

//               <div className='pt-[46px] pb-[46px] w-[270px] border-2 border-orange-300 '>
//                 <div className='flex flex-col gap-4 items-center justify-between '>
//                     <img src="./images/Group 17.png" alt="" />
//                     <h3 className='text-2xl font-semibold'>UI/UX Design</h3>
//                     <p className='text-base text-center text-[#606060] w-[252px]'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
//                 </div>
//               </div>

//               <div className='pt-[46px] pb-[46px] w-[270px] border-2 border-orange-300 '>
//                 <div className='flex flex-col gap-4 items-center justify-between '>
//                     <img src="./images/Group 17.png" alt="" />
//                     <h3 className='text-2xl font-semibold'>UI/UX Design</h3>
//                     <p className='text-base text-center text-[#606060] w-[252px]'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
//                 </div>
//               </div>

//               <div className='pt-[46px] pb-[46px] w-[270px] border-2 border-orange-300 '>
//                 <div className='flex flex-col gap-4 items-center justify-between '>
//                     <img src="./images/Group 17.png" alt="" />
//                     <h3 className='text-2xl font-semibold'>UI/UX Design</h3>
//                     <p className='text-base text-center text-[#606060] w-[252px]'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
//                 </div>
//               </div>

//               <div className='pt-[46px] pb-[46px] w-[270px] border-2 border-orange-300 '>
//                 <div className='flex flex-col gap-4 items-center justify-between '>
//                     <img src="./images/Group 17.png" alt="" />
//                     <h3 className='text-2xl font-semibold'>UI/UX Design</h3>
//                     <p className='text-base text-center text-[#606060] w-[252px]'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
//                 </div>
//               </div>

//               <div className='pt-[46px] pb-[46px] w-[270px] border-2 border-orange-300 '>
//                 <div className='flex flex-col gap-4 items-center justify-between '>
//                     <img src="./images/Group 17.png" alt="" />
//                     <h3 className='text-2xl font-semibold'>UI/UX Design</h3>
//                     <p className='text-base text-center text-[#606060] w-[252px]'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
//                 </div>
//               </div>

//               <div className='pt-[46px] pb-[46px] w-[270px] border-2 border-orange-300 '>
//                 <div className='flex flex-col gap-4 items-center justify-between '>
//                     <img src="./images/Group 17.png" alt="" />
//                     <h3 className='text-2xl font-semibold'>UI/UX Design</h3>
//                     <p className='text-base text-center text-[#606060] w-[252px]'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
//                 </div>
//               </div>
//                 </div>
              
//         </div>
//     </section>
    
//     </>
//   )
// }

// export default Service ( add ...ppt)
import React from "react";

const services = [
  {
    title: "UI/UX Design",
    desc: "Designing clean, intuitive, and user-friendly interfaces focused on usability."
  },
  {
    title: "Web Design",
    desc: "Creating responsive and modern website layouts for all devices."
  },
  {
    title: "Frontend Development",
    desc: "Building fast, interactive interfaces using modern frontend technologies."
  },
  {
    title: "Mobile App Design",
    desc: "Designing beautiful and functional mobile app interfaces."
  },
  {
    title: "Landing Page Design",
    desc: "Crafting high-converting landing pages optimized for performance."
  },
  {
    title: "Dashboard Design",
    desc: "Designing clean, data-driven dashboards and admin panels."
  },
];

const Service = () => {
  return (
    <>
      <section className="py-32">
        <div className="container w-[1144px] mx-auto">
          
          {/* Heading */}
          <div className="flex justify-center items-center gap-2">
            <img src="./images/Frame.png" alt="Frame" />
            <p className="text-base font-[jost]">My Service</p>
          </div>

          <div className="mt-1 uppercase flex justify-center items-center">
            <h1 className="leading-[86px] text-7xl font-semibold font-[jost]">
              Services I offer
            </h1>
          </div>

          {/* Services Grid */}
          <div className="flex flex-wrap gap-2 items-center justify-center mt-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="pt-[46px] pb-[46px] w-[270px] border-2 border-orange-300"
              >
                <div className="flex flex-col gap-4 items-center justify-between">
                  <img src="./images/Group 17.png" alt="icon" />
                  <h3 className="text-2xl font-semibold text-center">
                    {service.title}
                  </h3>
                  <p className="text-base text-center text-[#606060] w-[252px]">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Service;
