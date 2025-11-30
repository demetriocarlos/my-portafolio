 
import { projects } from "../data/proyects"
import { Github , ExternalLink,  Maximize} from "lucide-react"
import { SlideShowProject } from "./SlideShowProject";


export const ProjectsList = () => {
    
  return (
    <div className="min-h-screen bg-gray-900"> 

      <div className="max-w-7x1 mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Mis Proyectos
          </span>
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Una colección de mis trabajos más recientes en desarrollo web y diseño de interfaces.
        </p>

                                 {/**lg:grid-cols-2 gap-10 */}
        <div className="grid grid-cols-1 ">
            {
              projects.map((project)=>(
                <div key={project.id} className="mb-28   bg-transparent overflow-hidden border-0 group">
                  <div className="flex flex-col md:flex-row gap-6 p-1    items-stretch">

                    <div className="aspect-video border border-red-500  relative w-full md:w-2/5  md:h-auto   overflow-hidden rounded-lg">
                      <div className="   absolute inset-0  bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 "/>
                        <SlideShowProject project={project} />
                    </div>

                      <div className=" w-full md:w-3/5 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2   group-hover:text-purple-400  transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 mb-4">{project.description}</p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech) => (
                              <div 
                                key={tech.id}
                                className=" flex space-x-4 bg-gray-800/50 hover:bg-gray-700 text-gray-300 border border-gray-700 px-3 py-1  rounded-xl "
                              >
                                <span> {tech.name}</span>  <tech.icon color={tech.color} size={20} />

                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4">
                          {project.repositorios.map((repo) =>(
                            <div key={repo.name}>
                                <a 
                                  href={repo.githubUrl}
                                  target="_blank"
                                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                >
                                  <Github  size={18}/>
                                  <span>{repo.name}</span>
                                </a>
                            </div>
                          ))}

                          <a 
                            href={project.link} 
                            target="_blank"
                            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                          > 
                            <ExternalLink size={18} />  <span>App Desplegada</span>
                          </a>
                        </div>
                         
                      </div>
                  </div>
                     <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 mt-4" />
                </div>
              ))}
        </div>
       </div>
       <div>

       </div>
    </div>
  )
}
