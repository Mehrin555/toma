import React from 'react'

const Blog = () => {
  return (
    <>
    <section className='py-32'>
        <div className='container w-[1144px] mx-auto'>
            <div className='flex justify-center items-center  gap-2'>
              <img src="./images/Frame.png" alt="Frame" />
                <p className="text-base font-[jost]">My Blog</p>
            </div>
                <div className=" mt-1 uppercase flex justify-center items-center">
                <h1 className=" leading-[86px] text-7xl font-semibold font-[jost] text-start">
                REPUTED PARTNER
                </h1>
              </div>



            <div className='flex justify-center mt-12 gap-8'>
                <div className='py-7 px-16 bg-amber-300 rounded-md'>

                </div>

                <div className='py-7 px-16 bg-amber-300 rounded-md'>

                </div>

                <div className='py-7 px-16 bg-amber-300 rounded-md'>

                </div>

                <div className='py-7 px-16 bg-amber-300 rounded-md'>

                </div>

                <div className='py-7 px-16 bg-amber-300 rounded-md'>

                </div>

                <div className='py-7 px-16 bg-amber-300 rounded-md'>

                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Blog