import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import DashboardPortfolio from './components/DashboardPortfolio';

const App = () => {

  const [activeMenu, setActiveMenu] = useState()

  const handleactiveMenu = (menu) => {
   setActiveMenu(menu);
 
  }


  return (
    <>
    <div className="main flex ">
      <div className="left w-[20%] h-[400px] ">
        <ul>
          <li onClick={()=>handleactiveMenu("Navbar")} className='list-none p-1 bg-green-600 text-white m-1 cursor-pointer text-2xl border-4  border-black hover:bg-green-700 hover:text-white'>Navbar</li>
          <li onClick={()=>handleactiveMenu("Banner")} className='list-none p-1 bg-green-600 text-white m-1 cursor-pointer text-2xl border-4  border-black hover:bg-green-700 hover:text-white'>Banner</li>
          <li onClick={()=>handleactiveMenu("About")} className='list-none p-1 bg-green-600 text-white m-1 cursor-pointer text-2xl border-4  border-black hover:bg-green-700 hover:text-white'>About</li>
          <li onClick={()=>handleactiveMenu("Service")} className='list-none p-1 bg-green-600 text-white m-1 cursor-pointer text-2xl border-4  border-black hover:bg-green-700 hover:text-white'>Service</li>
          <li onClick={()=>handleactiveMenu("Resume")} className='list-none p-1 bg-green-600 text-white m-1 cursor-pointer text-2xl border-4  border-black hover:bg-green-700 hover:text-white'>Resume</li>
          <li onClick={()=>handleactiveMenu("Portflio")} className='list-none p-1 bg-green-600 text-white m-1 cursor-pointer text-2xl border-4  border-black hover:bg-green-700 hover:text-white'>Portflio</li>
          <li onClick={()=>handleactiveMenu("Testimonial")} className='list-none p-1 bg-green-600 text-white m-1 cursor-pointer text-2xl border-4  border-black hover:bg-green-700 hover:text-white'>Testimonial</li>
          <li onClick={()=>handleactiveMenu("Partner")} className='list-none p-1 bg-green-600 text-white m-1 cursor-pointer text-2xl border-4  border-black hover:bg-green-700 hover:text-white'>Partner</li>
          <li onClick={()=>handleactiveMenu("Blog")} className='list-none p-1 bg-green-600 text-white m-1 cursor-pointer text-2xl border-4  border-black hover:bg-green-700 hover:text-white'>Blog</li>
          <li  onClick={()=>handleactiveMenu("Contact")}className='list-none p-1 bg-green-600 text-white m-1 cursor-pointer text-2xl border-4  border-black hover:bg-green-700 hover:text-white'>Contact</li>
        </ul>
      </div>
      <div className="right w-[80%] h-[400px] bg-green-500 ">
        {activeMenu == "Navbar" && <Navbar/>}
        {activeMenu == "Banner" && <h1 className='text-4xl text-white'><Banner/></h1>}
        {activeMenu == "About" && <h1 className='text-4xl text-white'>This is About Menu</h1>}
        {activeMenu == "Service" && <h1 className='text-4xl text-white'>This is Service Menu</h1>}
        {activeMenu == "Resume" && <h1 className='text-4xl text-white'>This is Resume Menu</h1>}
        {activeMenu == "Portflio" && <h1 className='text-4xl text-white'><DashboardPortfolio/></h1>}
        {activeMenu == "Testimonial" && <h1 className='text-4xl text-white'>This is Testimonial Menu</h1>}
        {activeMenu == "Partner" && <h1 className='text-4xl text-white'>This is Partner Menu</h1>}
        {activeMenu == "Blog" && <h1 className='text-4xl text-white'>This is Blog Menu</h1>}
        {activeMenu == "Contact" && <h1 className='text-4xl text-white'>This is Contact Menu</h1>}
      </div>
    </div>
    </>
  )
}

export default App