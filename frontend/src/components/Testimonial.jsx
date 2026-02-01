// import img1 from "../assets/user1.png"

// // import img2 from "../assets/user2.png"
// // import img3 from "../assets/user3.png"
// // import img4 from "../assets/user4.jpg"
// // import img5 from "../assets/user5.jpg"
// // import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// // import './styles.css';

// // import required modules
// import { Navigation } from 'swiper/modules';

// const Testimonial =() =>{
// return (
//   <>
//   <div className="w-full px-2 md:px-5 lg:px-8 py-12">
//     <h1 className="text-center font-extrabold text-6xl">Testimonial</h1> 

//     <Swiper navigation={true} modules={[Navigation]} className="mySwiper pt-10">
//         <SwiperSlide >
//          <div className="p-5 grid gap-5 grid-cols-3">
//            <div className='p-3 rounded-[15px] bg-amber-200'>
//             <p className="pb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quasi officiis est numquam a totam pariatur impedit vitae quisquam labore!</p>
//             <div className='flex items-center'>
//               <img src={img1} alt="" className="w-[70px] h-[40px] pe-3 rounded-full" />
//               <div>
//                 <h1 className="font-medium text-lg  ">James</h1>
//                 <p className="text-sm">1/06/2023</p>
//               </div>

//             </div>

//           </div>
//            <div className='p-3 rounded-[15px] bg-amber-200'>
//             <p className="pb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quasi officiis est numquam a totam pariatur impedit vitae quisquam labore!</p>
//             <div className='flex items-center'>
//               <img src={img1} alt="" className="w-[70px] h-[40px] pe-3 rounded-full" />
//               <div>
//                 <h1 className="font-medium text-lg  ">Clio</h1>
//                 <p className="text-sm">1/06/2023</p>
//               </div>

//             </div>

//           </div>
//            <div className='p-3 rounded-[15px] bg-amber-200'>
//             <p className="pb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quasi officiis est numquam a totam pariatur impedit vitae quisquam labore!</p>
//             <div className='flex items-center'>
//               <img src={img1} alt="" className="w-[70px] h-[40px] pe-3 rounded-full" />
//               <div>
//                 <h1 className="font-medium text-lg  ">Jenifar</h1>
//                 <p className="text-sm">1/06/2023</p>
//               </div>

//             </div>

//           </div>
//            <div className='p-3 rounded-[15px] bg-amber-200'>
//             <p className="pb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quasi officiis est numquam a totam pariatur impedit vitae quisquam labore!</p>
//             <div className='flex items-center'>
//               <img src={img1} alt="" className="w-[70px] h-[40px] pe-3 rounded-full" />
//               <div>
//                 <h1 className="font-medium text-lg  ">Pixel</h1>
//                 <p className="text-sm">1/06/2023</p>
//               </div>

//             </div>

//           </div>
//            <div className='p-3 rounded-[15px] bg-amber-200'>
//             <p className="pb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quasi officiis est numquam a totam pariatur impedit vitae quisquam labore!</p>
//             <div className='flex items-center'>
//               <img src={img1} alt="" className="w-[70px] h-[40px] pe-3 rounded-full" />
//               <div>
//                 <h1 className="font-medium text-lg  ">Cmelia</h1>
//                 <p className="text-sm">1/06/2023</p>
//               </div>

//             </div>

//           </div>
//            <div className='p-3 rounded-[15px] bg-amber-200'>
//             <p className="pb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quasi officiis est numquam a totam pariatur impedit vitae quisquam labore!</p>
//             <div className='flex items-center'>
//               <img src={img1} alt="" className="w-[70px] h-[40px] pe-3 rounded-full" />
//               <div>
//                 <h1 className="font-medium text-lg  "></h1>
//                 <p className="text-sm">1/06/2023</p>
//               </div>

//             </div>

//           </div>

//          </div>

//         </SwiperSlide>
        
//       </Swiper>

//   </div>
//   </>
// )

// }
// export default Testimonial
import img1 from "../assets/user1.png";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Testimonial = () => {
  return (
    <div className="w-full px-2 md:px-5 lg:px-8 py-12">
      <h1 className="text-center font-extrabold text-4xl md:text-6xl">
        Testimonial
      </h1>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper pt-10"
      >
        <SwiperSlide>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            
            {/* Card 1 */}
            <div className="p-4 rounded-[15px] bg-amber-200">
              <p className="pb-4">
                Working with this developer was a smooth experience. The portfolio
                design is clean, responsive, and optimized for all screen sizes.
              </p>
              <div className="flex items-center">
                <img
                  src={img1}
                  alt="James"
                  className="w-[50px] h-[50px] me-3 rounded-full object-cover"
                />
                <div>
                  <h1 className="font-medium text-lg">James</h1>
                  <p className="text-sm">01/06/2023</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-4 rounded-[15px] bg-amber-200">
              <p className="pb-4">
                The attention to detail is impressive. Every section feels
                thoughtfully designed and performs well on both mobile and desktop.
              </p>
              <div className="flex items-center">
                <img
                  src={img1}
                  alt="Clio"
                  className="w-[50px] h-[50px] me-3 rounded-full object-cover"
                />
                <div>
                  <h1 className="font-medium text-lg">Clio</h1>
                  <p className="text-sm">01/06/2023</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-4 rounded-[15px] bg-amber-200">
              <p className="pb-4">
                A modern and professional portfolio that clearly reflects strong
                frontend skills using React, Tailwind, and Swiper.
              </p>
              <div className="flex items-center">
                <img
                  src={img1}
                  alt="Jenifar"
                  className="w-[50px] h-[50px] me-3 rounded-full object-cover"
                />
                <div>
                  <h1 className="font-medium text-lg">Jenifar</h1>
                  <p className="text-sm">01/06/2023</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-4 rounded-[15px] bg-amber-200">
              <p className="pb-4">
                Clean UI, smooth slider interaction, and excellent responsiveness.
                This portfolio is client-ready and visually appealing.
              </p>
              <div className="flex items-center">
                <img
                  src={img1}
                  alt="Pixel"
                  className="w-[50px] h-[50px] me-3 rounded-full object-cover"
                />
                <div>
                  <h1 className="font-medium text-lg">Pixel</h1>
                  <p className="text-sm">01/06/2023</p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="p-4 rounded-[15px] bg-amber-200">
              <p className="pb-4">
                The layout adapts beautifully across devices. It clearly shows a
                strong understanding of responsive web design principles.
              </p>
              <div className="flex items-center">
                <img
                  src={img1}
                  alt="Cmelia"
                  className="w-[50px] h-[50px] me-3 rounded-full object-cover"
                />
                <div>
                  <h1 className="font-medium text-lg">Cmelia</h1>
                  <p className="text-sm">01/06/2023</p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="p-4 rounded-[15px] bg-amber-200">
              <p className="pb-4">
                A well-structured and visually pleasing portfolio that highlights
                creativity, performance, and frontend development skills.
              </p>
              <div className="flex items-center">
                <img
                  src={img1}
                  alt="Alex"
                  className="w-[50px] h-[50px] me-3 rounded-full object-cover"
                />
                <div>
                  <h1 className="font-medium text-lg">Alex</h1>
                  <p className="text-sm">01/06/2023</p>
                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;


