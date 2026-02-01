
import mysqlicon from "../assets/mysql.png"
import pythonicon from "../assets/python.png"
import javaicon from "../assets/java.png"
import cppicon from "../assets/c++.png"
import cicon from "../assets/c.png"
import cssicon from "../assets/CSS.png"
import jsicon from "../assets/js.png"


import Reacticon from "../assets/React.png"
import html5 from "../assets/html.jpg"

import SkillIcon from './SkillIcon';
import Marquee from "react-fast-marquee";

const Skills =  () => {
    return (
        <>
        <div className="Skills w-full py-14 px-2 md:px-5  lg:px-12">
            <h1 className="text-5xl font-extrabold text-black text-center pb-8">My <span className="text-orange-500">Skills</span></h1>

           <div >
            <Marquee speed={35} gradient={true} gradientColor='#F1EFF0' gradientWidth={125} className='mb-10'>
                {/* html5 */}
                <SkillIcon img={html5} name="HTML5" />
                <SkillIcon img={Reacticon} name="React" />
                <SkillIcon img={jsicon} name="JS" />
                 <SkillIcon img={pythonicon} name="PYTHON" />
                
                <SkillIcon img={cssicon} name="CSS" />
               
                <SkillIcon img={cicon} name="C" />
                <SkillIcon img={cppicon} name="C++" />
                <SkillIcon img={javaicon} name="JAVA" />
                <SkillIcon img={mysqlicon} name="MYSQL" />
                
                
                
                
                
                




            </Marquee>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
            
            </div> 
        </div>
        
        </>
    )
}
export default Skills 