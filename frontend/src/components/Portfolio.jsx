import React, { useEffect, useState } from "react";
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import axios from "axios";
import Portfolio2 from './Portfolio2';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:3000/api/projects");
  //       console.log("PROJECTS RESPONSE 👉", res.data); // 🔥 DEBUG
  //       setProjects(Array.isArray(res.data) ? res.data : []);
  //     } catch (err) {
  //       console.error("❌ Portfolio API Error:", err);
  //       setError("Failed to load projects");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProjects();
  // }, []);
  useEffect(()=>{
    const fetchData= async()=>{
      try{
        const res =await axios.get("projects.json")
        const data = await res?.data;
        console.log("projects data", data )
        setProjects(data)

      }catch(error){
        console.error(error)
        setError("if error found")

      }finally{
        setLoading(false)
      }
      

    }
    fetchData()

  },[])

  // 🔄 Loading state
  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center text-gray-500">
        Loading projects...
      </section>
    );
  }

  // ❌ Error state
  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-[1144px] mx-auto px-4">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            My <span className="text-orange-500">Portfolio</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Some of my recent projects that I’ve worked on
          </p>
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <p className="text-center text-gray-400 mt-20">
            No projects found
          </p>
        )}

        {/* Projects Grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <a
              key={project._id}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              {/* Image */}
              {/* <img
                src={project.image}
                alt={project.title}
                className="h-72 w-full object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold border border-white px-6 py-2 rounded-full">
                  View Project
                </span>
              </div>

              {/* Title */}
              {/* <div className="absolute bottom-0 w-full bg-white/90 backdrop-blur px-4 py-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h3>
              </div> 
            </a>
          ))}
        </div>  */}

   
        <div className="projectsContainer grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            projects.map(project=>{
              const { name, image, live_link, card_description } = project;
              return(
                

                <div className='project_card p-3 rounded-lg bg-slate-50 group hover:shadow-md border'>
            {/* project_image container div starts */}
            <div className="project_image w-full h-[135px] rounded-md border border-gray-200">
                <img src={image} alt="" className='w-full h-full rounded-md' />
            </div>

            {/* project_content container div starts */}
            <div className="project_container pt-3">
                <h1 className='text-slate-600 font-semibold text-lg group-hover:text-slate-950'>{name} - MERN Stack</h1>

                <p className='text-xs text-slate-800 my-2'>{card_description}</p>

                <div className="flex gap-3 items-center mt-3">
                    <a href={live_link} target='_blank'>
                        <p className='px-3 py-[2px] border rounded-full flex gap-1 text-xs transform transition ease-in-out duration-200 cursor-default bg-white text-slate-700 hover:bg-slate-700 hover:text-white active:text-slate-700 active:bg-white'>Live Visit <ArrowLongRightIcon className='w-4' /></p>
                    </a>

                    <p className='px-3 py-[2px] border rounded-full flex gap-1 text-xs transform transition ease-in-out duration-200 cursor-default bg-slate-700 text-white hover:bg-white hover:text-slate-900 active:bg-slate-900 active:text-white'>See Details</p>
                </div>
            </div>
        </div>
              )
            })
          }

        </div>
        
        <Portfolio2/>
      </div>
    </section>
  );
};

export default Portfolio;
